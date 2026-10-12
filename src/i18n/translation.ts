import { siteConfig } from "../config";
import type I18nKey from "./i18nKey";
import { en } from "./languages/en";
import { ku } from "./languages/ku";

export type Translation = {
	[K in I18nKey]: string;
};

const defaultTranslation = en;

const map: { [key: string]: Translation } = {
	en: en,
	ku: ku,
	ckb: ku,
};

export function getTranslation(lang: string): Translation {
	return map[lang.toLowerCase()] || defaultTranslation;
}

export function i18n(
	key: I18nKey,
	lang: string = siteConfig.lang || "en",
): string {
	return getTranslation(lang)[key];
}

// Translator bound to one language, with {placeholder} values filled in:
// t(I18nKey.minRead, { minutes: 5 }) -> "5 min read"
export function useTranslations(lang: string) {
	const translation = getTranslation(lang);
	return (key: I18nKey, values: Record<string, string | number> = {}) =>
		translation[key].replace(/\{(\w+)\}/g, (match, name) =>
			name in values ? String(values[name]) : match,
		);
}
