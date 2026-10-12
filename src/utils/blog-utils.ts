export type BlogPlatform = "android" | "ios" | "other";

export function getBlogPlatform(
	category: string | null | undefined,
): BlogPlatform {
	const value = (category ?? "").toLowerCase();
	if (value.includes("android")) return "android";
	if (value.includes("ios") || value.includes("apple")) return "ios";
	return "other";
}
