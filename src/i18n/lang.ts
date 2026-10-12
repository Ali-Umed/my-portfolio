// The site's languages: English pages live at the root, Kurdish (Sorani) pages under /ku/.
// Astro builds the /ku/ pages from the same page files (see `i18n` in astro.config.mjs).
export const languages = {
	en: {
		name: "English",
		htmlLang: "en",
		dir: "ltr",
		dateLocale: "en-US",
	},
	ku: {
		name: "کوردی",
		htmlLang: "ckb",
		dir: "rtl",
		// Kurdish month names with the same 0-9 digits used everywhere else on the site
		dateLocale: "ckb-u-nu-latn",
	},
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export function toLang(value: string | null | undefined): Lang {
	return value === "ku" ? "ku" : defaultLang;
}

export function otherLang(lang: Lang): Lang {
	return lang === "ku" ? "en" : "ku";
}

export function formatDate(
	date: Date,
	lang: Lang,
	options: Intl.DateTimeFormatOptions,
): string {
	return date.toLocaleDateString(languages[lang].dateLocale, options);
}
