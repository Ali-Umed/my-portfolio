// Content for the About page. Edit text here; the layout lives in src/pages/about.astro.

export const aboutIntro = {
	role: "Software Developer",
	summary:
		"I build fast, intuitive applications using React.js, React Native, Flutter, and Next.js, turning ideas into polished digital products.",
	codingSince: 2020,
};

export type Experience = {
	title: string;
	place: string;
	period: string;
	current?: boolean;
	points: string[];
};

export const experience: Experience[] = [
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
];

export const skillGroups: { name: string; icon: string; skills: string[] }[] = [
	{
		name: "Frontend",
		icon: "material-symbols:computer-outline-rounded",
		skills: ["Next.js", "React", "React Native", "JavaScript", "TypeScript", "Redux / Redux Toolkit", "Tailwind CSS", "Sass"],
	},
	{
		name: "Mobile",
		icon: "material-symbols:smartphone-outline",
		skills: ["Flutter", "Dart", "React Native"],
	},
	{
		name: "Backend & Databases",
		icon: "material-symbols:database-outline",
		skills: ["Node.js", "Laravel", "Firebase", "Supabase", "MySQL"],
	},
	{
		name: "Tools & Practices",
		icon: "material-symbols:build-outline-rounded",
		skills: ["Git / GitHub", "Vite", "Linux", "Trello", "Agile / Scrum", "Team Collaboration"],
	},
];

export const education = {
	school: "Erbil Polytechnic University",
	degree: "Bachelor's Degree in Information Systems Engineering",
	period: "2020 – 2024",
};

export const quote =
	"Code is not just about solving problems, it's about creating experiences.";
