import I18nKey from "@i18n/i18nKey";
import type { Lang } from "@i18n/lang";
import { i18n } from "@i18n/translation";
import { navBarConfig } from "@/config";
import { LinkPreset, type NavBarLink } from "@/types/config";

const presets: { [key in LinkPreset]: { name: I18nKey; url: string } } = {
	[LinkPreset.Home]: { name: I18nKey.home, url: "/" },
	[LinkPreset.About]: { name: I18nKey.about, url: "/about/" },
	[LinkPreset.Archive]: { name: I18nKey.archive, url: "/archive/" },
	[LinkPreset.Projects]: { name: I18nKey.projects, url: "/projects/" },
	[LinkPreset.Blogs]: { name: I18nKey.blogs, url: "/blogs/" },
	[LinkPreset.Pinterest]: { name: I18nKey.pinterest, url: "/pinterest/" },
};

// Navbar links with preset names translated; `url` is still unprefixed, see localeUrl()
export function getNavBarLinks(lang: Lang): NavBarLink[] {
	return navBarConfig.links.map((item) => {
		if (typeof item !== "number") return item;
		const preset = presets[item];
		return { name: i18n(preset.name, lang), url: preset.url };
	});
}
