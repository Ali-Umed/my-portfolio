import type { Lang } from "./lang";

// Kurdish names for the post tags that are ordinary words. Tech names (React, Flutter, …)
// are not listed and stay as they are. Links and filters always use the original tag.
const kurdishTagNames: Record<string, string> = {
	AI: "زیرەکی دەستکرد",
	Arabic: "عەرەبی",
	"Booking System": "سیستەمی حیجزکردن",
	"Business Website": "ماڵپەڕی بازرگانی",
	"Co-Founder": "دامەزرێنەری هاوبەش",
	"Dark Mode": "دۆخی تاریک",
	"Data Entry": "داخڵکردنی داتا",
	"E-commerce": "بازرگانیی ئەلیکترۆنی",
	Education: "فێرکاری",
	Gamification: "فێربوون بە یاری",
	"E-Learning": "فێربوونی ئەلیکترۆنی",
	"Loyalty Cards": "کارتی دڵسۆزی",
	"QR Code": "کۆدی QR",
	Offers: "ئۆفەر",
	Maps: "نەخشە",
	"Business Dashboard": "داشبۆردی بزنس",
	"Online Payments": "پارەدانی ئۆنلاین",
	Industrial: "پیشەسازی",
	Kurdish: "کوردی",
	Kurmanji: "کورمانجی",
	"Landing Page": "پەڕەی ناساندن",
	"Language Learning": "فێربوونی زمان",
	"Mobile App": "ئەپی مۆبایل",
	"Mobile Application": "ئەپڵیکەیشنی مۆبایل",
	"Multi-language": "چەند زمانە",
	Multilingual: "فرەزمان",
	Quiz: "پرسیار و وەڵام",
	"Responsive Design": "دیزاینی گونجاو",
	Sorani: "سۆرانی",
	"Track App": "ئەپی بەدواداچوون",
	"Web Development": "گەشەپێدانی وێب",
};

export function getTagName(tag: string, lang: Lang): string {
	const name = tag.trim();
	return (lang === "ku" && kurdishTagNames[name]) || name;
}
