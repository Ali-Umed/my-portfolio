import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		icon: z.string().optional().default(""),
		appStore: z.string().url().optional(),
		playStore: z.string().url().optional(),
		website: z.string().url().optional(),
		github: z.string().url().optional(),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default(""),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
		pinned: z.boolean().optional(),
		weight: z.number().default(0),
	}),
});

const blogSchema = {
	title: z.string(),
	published: z.date(),
	updated: z.date().optional(),
	draft: z.boolean().optional().default(false),
	description: z.string().optional().default(""),
	image: z.string().optional().default(""),
	tags: z.array(z.string()).optional().default([]),
	category: z.string().optional().nullable().default(""),
	lang: z.string().optional().default(""),
	prevTitle: z.string().default(""),
	prevSlug: z.string().default(""),
	nextTitle: z.string().default(""),
	nextSlug: z.string().default(""),
	pinned: z.boolean().optional(),
	weight: z.number().default(0),
};

const blogsCollection = defineCollection({
	schema: z.object(blogSchema),
});

// Kurdish (Sorani) translations of the project posts, shown on the /ku/ site.
// A translation uses the same file name as its English post in posts/; posts without one show in English.
const postsKuCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional().default(""),
	}),
});

export const collections = {
	posts: postsCollection,
	blogs: blogsCollection,
	"posts-ku": postsKuCollection,
};
