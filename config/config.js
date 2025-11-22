
import { faAppStore, faGithub, faGooglePlay, faGoogleDrive, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Abhishek",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Experience",
			link: "#experience"
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		}
	]
}
export const intro = {
	title: "Hey, I'm Abhishek",
	description: "Associate Engineer @ Huawei Technologies, Vancouver",
	image: "/config/profile.png",
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1eDKNr5FTqQe32thpOVKPluVsDSQkX5sh/view?usp=sharing",
			isPrimary: false,
		}
	]
}

export const about = {
	title: "Who I am",
	description: [
		"A passionate and enthusiastic student of Computing - recently completed a Master's degree in Computing Science at Simon Fraser University.",
		"After a good 3 years as a Software Engineer in various product teams and having gained experience with a wide range of technologies, I decided to dive back into the world of academics - and venture into the exciting field that is Visual Computing! After having completed my Master's degree focused in this domain, I recently started working as an Associate Engineer in a team focused on solving fundamental problems in the area of Computer Graphics.",
		"As a relatively new entrant to the domains of Visual Computing and Computer Graphics, I am getting to learn new things on a consistent basis - through self-learning and collaboration. I believe in gaining knowledge across a broad spectrum of domains and intend to remain a lifelong learner.",
		"As I move forward in my career, I want to continue to learn new skills and technologies and contribute towards building software that can deliver value."
	]
}

export const experience = {
	title: "Industry experience",
	cards: [
		{
			title: "5+ years of developing software",
			description: [
				"Huawei Technologies [2022 - present]",
				"Dell EMC [2018 - 2021]"
			]
		},
		{
			title: "Experience in Computer Graphics",
			description: [
				"Associate Engineer at Huawei's Vancouver Graphics Technology Lab.",
				"Currently part of an effort for developing a system-integration Vulkan extension on Mesa - with the added avenue of open source community contribution",
				"Currently a representative for Huawei in the Khronos group for Vulkan standard related activities",
				"Designing, experimenting and implementing POCs for open problems of interest in Computer Graphics.",
				"Tools - Unreal Engine, Unity, O3DE, Blender, Mesa",
				"Graphics APIs - Vulkan"
			]
		},
		{
			title: "Former Lead Engineer",
			description: [
				"Formerly lead a product team that developed solutions for automated remote support use cases in Dell APEX.",
				"Tools - Spring, Docker, Kubernetes"
			]
		}
	]
}

export const work = {
	title: "Domains of interest",
	cards: [
		{
			title: "Software Development",
			description: [
				"Constructing efficient automata that provides value to users.",
				"I take great interest in breaking down and building complex systems through ideation, research and collaboration."
			],
			icons: null,
		},
		{
			title: "Visual Computing",
			description: [
				"Learning how to equip machines to see the world like humans do.",
				"I recently set out on a journey of acquiring practical knowledge in areas such as visualization, computer vision and graphics."
			]
		},
		{
			title: "AI",
			description: [
				"Data is the new oil.",
				"I am keen on contributing towards building solutions that use AI/ML as it has become an invaluable avenue for uncovering hidden trends and patterns in data."
			]
		}
	]
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Car Following Simulation",
			description: [
				"Computer Animation Project.",
				"An implementation of AOVRV method for traffic flow simulation in Unity.",
				"Weighted AOVRV proposed and implemented for lane switching scenario."
			],
			icons: [
				{
					icon: faYoutube,
					link: "https://drive.google.com/file/d/1I7OBwGBf8GmbkHtGHCz2HJE6pUgph2xd/view?usp=share_link"
				},
				{
					icon: faGithub,
					link: "https://github.com/abs990/Car-Following-Simulation",
				},
				{
					icon: faGoogleDrive,
					link: "https://drive.google.com/file/d/1Ol8ivshNIuovQy2c6MVepDYhWEFsM_Mi/view?usp=share_link"
				}
			]
		},
		{
			title: "Hand Gesture based Computer Interaction",
			description: [
				"Visual Computing course project.",
				"Aimed at building a simple system to trigger automated actions in a given host system by using hand pose estimation.",
				"Additional research conducted to investigate 3D model control as a system extension."
			],
			icons: [
				{
					icon: faGoogleDrive,
					link: "https://drive.google.com/file/d/1hGn-gFDXD4uNs26-DPYdfwL67eQaPEMC/view?usp=sharing"
				},
				{
					icon: faGithub,
					link: "https://github.com/abs990/hand-gesture-computer-control",
				}
			]
		},
		{
			title: "Positional tracking based Video Game",
			description: [
				"Visual Computing course project.",
				"Collaborative effort to build a game that integrates Unity Engine and real-time human pose estimation."
			],
			icons: [
				{
					icon: faGoogleDrive,
					link: "https://drive.google.com/file/d/14PwVwgzU-bj4N2iYE_umHGCeq_gdZB4b/view?usp=sharing"
				},
				{
					icon: faGithub,
					link: "https://github.com/liamsparkles/BodyTrackingVGControl"
				}
			]
		}
	]
}

export const contact = {
	title: "Get in touch!",
	description: "Feel free to reach out directly by email at abhi.snair0@gmail.com",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:abhi.snair0@gmail.com",
			isPrimary: true,
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/abhishek-sashi-nair/",
			isPrimary: false
		},
		{
			title: "GitHub",
			link: "https://github.com/abs990",
			isPrimary: false
		}
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Abhishek Sashi Nair | Computing Science Student @ SFU | Visual Computing",
	description: "A passionate and enthusiastic student of Computing - recently completed a Master's degree in Computing Science at Simon Fraser University. After working for more than 3 years as a software engineer in various product teams and having gained experience with a wide range of technologies, I decided to come back to the world of academics  - and venture into the exciting field that is Visual Computing! As a relatively new entrant to the domain, I am getting to learn new things on a consistent basis - through self-learning and collaboration. I believe in gaining knowledge across a broad spectrum of domains and intend to remain a lifelong learner. As I move forward in my career, I want to continue to learn new skills and technologies and contribute towards building software that can deliver value.",
	image: "/config/profile.png",
}

export const links = {
	image: "/config/profile.png",
	title: "@abs990",
	description: "Abhishek Sashi Nair | Computing Science Student @ SFU | Visual Computing",
	cards: [
		{
			title: "My GitHub",
			link: "https://github.com/abs990/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/abhishek-sashi-nair/",
		}
	]
}