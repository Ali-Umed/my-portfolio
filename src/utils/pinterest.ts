// Pins for the /pinterest/ page, read from the public Pinterest RSS feed when the site is built.
// The feed lists the most recent pins (about 25); a redeploy picks up new ones.
const PROFILE = "ali_umed";
export const pinterestProfileUrl = `https://www.pinterest.com/${PROFILE}/_created/`;
const FEED_URL =
	import.meta.env.PINTEREST_FEED_URL ??
	`https://www.pinterest.com/${PROFILE}/feed.rss`;

export interface Pin {
	title: string;
	link: string;
	image: string;
}

function decode(text: string): string {
	return text
		.replace(/^<!\[CDATA\[|\]\]>$/g, "")
		.replace(/&quot;/g, '"')
		.replace(/&#39;|&apos;/g, "'")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&amp;/g, "&")
		.trim();
}

function tag(item: string, name: string): string {
	const match = item.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`));
	return match ? decode(match[1]) : "";
}

export function parsePins(xml: string): Pin[] {
	const pins: Pin[] = [];
	for (const [, item] of xml.matchAll(/<item>([\s\S]*?)<\/item>/g)) {
		const src = tag(item, "description").match(/<img[^>]+src="([^"]+)"/)?.[1];
		if (!src) continue;
		pins.push({
			title: tag(item, "title"),
			link: tag(item, "link"),
			// The feed links small 236px thumbnails; 736px is Pinterest's standard size
			image: src.replace(/\/\d+x\//, "/736x/"),
		});
	}
	return pins;
}

// One request per build, shared by the English and Kurdish pages
let pinsPromise: Promise<Pin[]> | undefined;

export function getPins(): Promise<Pin[]> {
	pinsPromise ??= fetch(FEED_URL, { headers: { "User-Agent": "Mozilla/5.0" } })
		.then((res) => {
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			return res.text();
		})
		.then(parsePins)
		.catch((error) => {
			console.warn(`Pinterest feed unavailable (${error}), the page will only link to the profile`);
			return [];
		});
	return pinsPromise;
}
