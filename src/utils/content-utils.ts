import { type CollectionEntry, getCollection, getEntry } from "astro:content";
import I18nKey from "@i18n/i18nKey";
import { defaultLang, type Lang, toLang } from "@i18n/lang";
import { i18n } from "@i18n/translation";
import { getCategoryUrl } from "@utils/url-utils";

// Display names for the categories used in post frontmatter
const categoryNames: Record<string, I18nKey> = {
	"Mobile Application": I18nKey.categoryMobileApplication,
	Website: I18nKey.categoryWebsite,
	"iOS Development": I18nKey.categoryIosDevelopment,
	"Android Development": I18nKey.categoryAndroidDevelopment,
};

export function getCategoryName(category: string, lang: Lang): string {
	const key = categoryNames[category.trim()];
	return key ? i18n(key, lang) : category.trim();
}

export type LocalizedPost = {
	title: string;
	description: string;
	// The entry whose body to render: the Kurdish translation when there is one
	content: CollectionEntry<"posts"> | CollectionEntry<"posts-ku">;
	// Language the title and body are written in
	lang: Lang;
};

// Kurdish translation of a project post: src/content/posts-ku/ file with the same name
async function getKurdishPost(slug: string, lang: Lang) {
	return lang === "ku" ? await getEntry("posts-ku", slug) : undefined;
}

// A project post in the page's language: on the Kurdish site its translation if there is one,
// otherwise the English post
export async function localizePost(
	entry: CollectionEntry<"posts">,
	lang: Lang,
): Promise<LocalizedPost> {
	const translation = await getKurdishPost(entry.slug, lang);
	if (translation) {
		return {
			title: translation.data.title,
			description: translation.data.description,
			content: translation,
			lang,
		};
	}
	return {
		title: entry.data.title,
		description: entry.data.description,
		content: entry,
		lang: toLang(entry.data.lang),
	};
}

// Retrieve all posts with draft filtering
async function getRawSortedPosts() {
	return await getCollection("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
}

export async function getSortedPosts() {
	const posts = await getRawSortedPosts();

	const sorted = [...posts].sort((a, b) => {
		// First sort by weight (highest first)
		if (a.data.weight !== b.data.weight) {
			return (b.data.weight || 0) - (a.data.weight || 0);
		}

		// Then by pinned status (pinned first)
		const pinnedA = a.data.pinned ? 1 : 0;
		const pinnedB = b.data.pinned ? 1 : 0;
		if (pinnedA !== pinnedB) {
			return pinnedB - pinnedA;
		}

		// Finally by published date (newest first)
		const dateA = new Date(a.data.published);
		const dateB = new Date(b.data.published);
		return dateB.getTime() - dateA.getTime();
	});

	for (let i = 1; i < sorted.length; i++) {
		sorted[i].data.nextSlug = sorted[i - 1].slug;
		sorted[i].data.nextTitle = sorted[i - 1].data.title;
	}
	for (let i = 0; i < sorted.length - 1; i++) {
		sorted[i].data.prevSlug = sorted[i + 1].slug;
		sorted[i].data.prevTitle = sorted[i + 1].data.title;
	}

	return sorted;
}

export type PostForList = {
	slug: string;
	data: CollectionEntry<"posts">["data"];
};

export async function getPostTitle(post: PostForList, lang: Lang) {
	return (await getKurdishPost(post.slug, lang))?.data.title ?? post.data.title;
}
export async function getSortedPostsList(): Promise<PostForList[]> {
	const sortedFullPosts = await getRawSortedPosts();

	// delete post.body
	const sortedPostsList = sortedFullPosts.map((post) => ({
		slug: post.slug,
		data: post.data,
	}));

	return sortedPostsList;
}
export type Tag = {
	name: string;
	count: number;
};

export async function getTagList(): Promise<Tag[]> {
	const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	const countMap: { [key: string]: number } = {};
	allBlogPosts.forEach((post: { data: { tags: string[] } }) => {
		post.data.tags.forEach((tag: string) => {
			if (!countMap[tag]) countMap[tag] = 0;
			countMap[tag]++;
		});
	});

	// sort tags
	const keys: string[] = Object.keys(countMap).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	return keys.map((key) => ({ name: key, count: countMap[key] }));
}

export type Category = {
	name: string;
	count: number;
	url: string;
};

export async function getCategoryList(
	lang: Lang = defaultLang,
): Promise<Category[]> {
	const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
	const count: { [key: string]: number } = {};
	allBlogPosts.forEach((post: { data: { category: string | null } }) => {
		if (!post.data.category) {
			const ucKey = i18n(I18nKey.uncategorized, lang);
			count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1;
			return;
		}

		const categoryName =
			typeof post.data.category === "string"
				? post.data.category.trim()
				: String(post.data.category).trim();

		count[categoryName] = count[categoryName] ? count[categoryName] + 1 : 1;
	});

	const lst = Object.keys(count).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	const ret: Category[] = [];
	for (const c of lst) {
		ret.push({
			name: getCategoryName(c, lang),
			count: count[c],
			url: getCategoryUrl(c, lang),
		});
	}
	return ret;
}
