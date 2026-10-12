import I18nKey from "@i18n/i18nKey";
import { defaultLang, type Lang } from "@i18n/lang";
import { i18n } from "@i18n/translation";

export function pathsEqual(path1: string, path2: string) {
	const normalizedPath1 = path1.replace(/^\/|\/$/g, "").toLowerCase();
	const normalizedPath2 = path2.replace(/^\/|\/$/g, "").toLowerCase();
	return normalizedPath1 === normalizedPath2;
}

function joinUrl(...parts: string[]): string {
	const joined = parts.join("/");
	return joined.replace(/\/+/g, "/");
}

export function getPostUrlBySlug(
	slug: string,
	lang: Lang = defaultLang,
): string {
	return localeUrl(`/posts/${slug}/`, lang);
}

export function getTagUrl(tag: string, lang: Lang = defaultLang): string {
	if (!tag) return localeUrl("/archive/", lang);
	return localeUrl(`/archive/?tag=${encodeURIComponent(tag.trim())}`, lang);
}

export function getCategoryUrl(
	category: string | null,
	lang: Lang = defaultLang,
): string {
	if (
		!category ||
		category.trim() === "" ||
		category.trim().toLowerCase() ===
			i18n(I18nKey.uncategorized, lang).toLowerCase()
	)
		return localeUrl("/archive/?uncategorized=true", lang);
	return localeUrl(
		`/archive/?category=${encodeURIComponent(category.trim())}`,
		lang,
	);
}

export function getDir(path: string): string {
	const lastSlashIndex = path.lastIndexOf("/");
	if (lastSlashIndex < 0) {
		return "/";
	}
	return path.substring(0, lastSlashIndex + 1);
}

export function url(path: string) {
	return joinUrl("", import.meta.env.BASE_URL, path);
}

// Link to a page in the given language: Kurdish pages live under /ku/
export function localeUrl(path: string, lang: Lang): string {
	return url(lang === defaultLang ? path : `/${lang}${path}`);
}

function withoutBase(pathname: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, "");
	return base && pathname.startsWith(base)
		? pathname.slice(base.length)
		: pathname;
}

export function getLangFromPath(pathname: string): Lang {
	return /^\/ku(\/|$)/.test(withoutBase(pathname)) ? "ku" : defaultLang;
}

// The same page in another language: /about/ <-> /ku/about/
export function switchLangPath(pathname: string, lang: Lang): string {
	const path = withoutBase(pathname).replace(/^\/ku(?=\/|$)/, "") || "/";
	return localeUrl(path, lang);
}
