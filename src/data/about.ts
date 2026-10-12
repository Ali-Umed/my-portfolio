// Content for the About page. Edit text here; the layout lives in src/pages/about.astro.
// Each text has an English (en) and a Kurdish Sorani (ku) version.
import type { Lang } from "../i18n/lang";

export const codingSince = 2020;

export const aboutIntro: Record<Lang, { role: string; summary: string }> = {
	en: {
		role: "Software Developer",
		summary:
			"I build fast, intuitive applications using React.js, React Native, Flutter, and Next.js, turning ideas into polished digital products.",
	},
	ku: {
		role: "گەشەپێدەری سۆفتوێر",
		summary:
			"ئەپڵیکەیشنی خێرا و ئاسان بۆ بەکارهێنان دروست دەکەم بە React.js و React Native و Flutter و Next.js، و بیرۆکەکان دەگۆڕم بۆ بەرهەمی دیجیتاڵیی ڕێکوپێک.",
	},
};

export type Experience = {
	title: string;
	place: string;
	period: string;
	current?: boolean;
	points: string[];
};

export const experience: Record<Lang, Experience[]> = {
	en: [
		{
			title: "Self-Taught Developer",
			place: "Starter → Full Stack Developer",
			period: "2020 – Present",
			current: true,
			points: [
				"Embarked on a self-learning journey in 2020, mastering mobile development with Flutter",
				"Developed expertise in frontend development using React.js and JavaScript",
				"Built and deployed multiple full-stack applications independently",
				"Continuously expanding knowledge through personal projects and open-source contributions",
			],
		},
		{
			title: "Frontend Developer Intern",
			place: "Gateway",
			period: "Jul 2023 – Sep 2023",
			points: [
				"Collaborated with cross-functional teams on client projects",
				"Developed responsive UIs using React.js and TypeScript",
				"Implemented version control with Git/GitHub",
				"Practiced Agile methodologies including Scrum",
			],
		},
	],
	ku: [
		{
			title: "گەشەپێدەری خۆفێرکار",
			place: "سەرەتا ← گەشەپێدەری Full Stack",
			period: "2020 – ئێستا",
			current: true,
			points: [
				"لە ساڵی 2020ەوە دەستم بە فێربوونی خۆیی کرد و گەشەپێدانی مۆبایلم بە Flutter بە باشی فێربووم",
				"شارەزاییم لە گەشەپێدانی فرۆنتئێند بە React.js و JavaScript پەیدا کرد",
				"بە تەنیا چەندین ئەپڵیکەیشنی Full Stack دروستم کرد و بڵاوم کردنەوە",
				"بەردەوام زانیارییەکانم فراوانتر دەکەم لە ڕێگەی پڕۆژەی کەسی و بەشداریکردن لە پڕۆژەی Open Source",
			],
		},
		{
			title: "گەشەپێدەری فرۆنتئێند (ڕاهێنان)",
			place: "Gateway",
			period: "تەمموزی 2023 – ئەیلوولی 2023",
			points: [
				"لەگەڵ تیمی جیاواز لەسەر پڕۆژەی کڕیاران کارم کرد",
				"بە React.js و TypeScript ڕووکاری گونجاو بۆ هەموو قەبارەیەکی شاشە دروستم کرد",
				"بۆ کۆنترۆڵی وەشانەکان Git/GitHub بەکارم هێنا",
				"بە ڕێبازی Agile و Scrum کارم کرد",
			],
		},
	],
};

export const skillGroups: {
	name: Record<Lang, string>;
	icon: string;
	skills: string[];
}[] = [
	{
		name: { en: "Frontend", ku: "فرۆنتئێند" },
		icon: "material-symbols:computer-outline-rounded",
		skills: ["Next.js", "React", "React Native", "JavaScript", "TypeScript", "Redux / Redux Toolkit", "Tailwind CSS", "Sass"],
	},
	{
		name: { en: "Mobile", ku: "مۆبایل" },
		icon: "material-symbols:smartphone-outline",
		skills: ["Flutter", "Dart", "React Native"],
	},
	{
		name: { en: "Backend & Databases", ku: "باکئێند و داتابەیس" },
		icon: "material-symbols:database-outline",
		skills: ["Node.js", "Laravel", "Firebase", "Supabase", "MySQL"],
	},
	{
		name: { en: "Tools & Practices", ku: "ئامراز و شێوازی کار" },
		icon: "material-symbols:build-outline-rounded",
		skills: ["Git / GitHub", "Vite", "Linux", "Trello", "Agile / Scrum", "Team Collaboration"],
	},
];

export const education: Record<
	Lang,
	{ school: string; degree: string; period: string }
> = {
	en: {
		school: "Erbil Polytechnic University",
		degree: "Bachelor's Degree in Information Systems Engineering",
		period: "2020 – 2024",
	},
	ku: {
		school: "زانکۆی پۆلیتەکنیکی هەولێر",
		degree: "بەکالۆریۆس لە ئەندازیاریی سیستەمەکانی زانیاری",
		period: "2020 – 2024",
	},
};

export const quote: Record<Lang, string> = {
	en: "Code is not just about solving problems, it's about creating experiences.",
	ku: "کۆد تەنها بۆ چارەسەرکردنی کێشە نییە، بەڵکو بۆ دروستکردنی ئەزموونە.",
};
