
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay, faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
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
	description: "Computing Science Student @ Simon Fraser University, Canada",
	image: profile.src,
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
		"A passionate and enthusiastic student of Computing - currently pursuing a Master's degree in Computing Science at Simon Fraser University. After working for more than 3 years as a software engineer in multiple product teams and dabbling with a wide range of technologies, I decided to come back to the world of academics  - and venture into the exciting field that is Visual Computing! As a relatively new entrant to the domain, I am getting to learn new things on a consistent basis - through self-learning and collaboration. I believe in gaining knowledge across a broad spectrum of domains and intend to remain a lifelong learner. As I move forward in my career, I want to continue to learn new skills and technologies and contribute towards building software that can deliver value.",
	]
}

export const experience = {
	title: "Past experience",
	cards: [
		{
			title: "3+ years of developing software",
			description: "Software engineer at Dell EMC (2018-2021)"
		},
		{
			title: "Lead Engineer",
			description: "Formerly lead a product team that developed solutions for critical remote support use cases in Dell APEX."
		},
		{
			title: "Undergrad in Computer Science",
			description: "National Institute of Technology, Calicut, India. Graduated in 2018 with distinction."
		}
	]
}

export const work = {
	title: "Domains of interest",
	cards: [
		{
			title: "Software Development",
			description: "I take great interest in breaking down complex use cases through ideation, research and collaboration with the goal of constructing efficient automata that provides value to users",
			icons: null,
		},
		{
			title: "Visual Computing",
			description: "Learning how to equip machines to see the world like humans do - I recently set out on a journey of acquiring practical knowledge in areas such as visualization, computer vision and graphics"
		},
		{
			title: "AI",
			description: "Data is the new oil - and I am keen on contributing towards building solutions that use AI/ML as it has become an invaluable avenue for uncovering hidden trends and patterns in data"
		}
	]
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Real-time Object Detection using Deep Learning",
			description: "Undergraduate final-year major project. Part of a collaboration that undertook a comprehensive study of existing literature in the domains of Object Detection and Convolutional Neural Networks. Work done includes the implementation of a rudimentary fatigue monitoring feature for road safety applications.",
			icons: [
				{
					icon: faGoogleDrive,
					link: "https://drive.google.com/file/d/16EVQLe8Otz3AO8-twchxvleOh6C26bYN/view?usp=sharing"
				}
			]
		},
		{
			title: "Positional tracking based Video Game",
			description: "Visual Computing course project. Collaborative effort to build a game that integrates Unity Engine and real-time human pose estimation.",
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
		},
		{
			title: "Portfolio",
			description: "An open-source portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/abs990/portfolio",
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
	description: "A passionate and enthusiastic student of Computing - currently pursuing a Master's degree in Computing Science at Simon Fraser University. After working for more than 3 years as a software engineer in multiple product teams and dabbling with a wide range of technologies, I decided to come back to the world of academics  - and venture into the exciting field that is Visual Computing! As a relatively new entrant to the domain, I am getting to learn new things on a consistent basis - through self-learning and collaboration. I believe in gaining knowledge across a broad spectrum of domains and intend to remain a lifelong learner. I want to continue to learn new skills and technologies and collaboratively build software that can deliver value.",
	image: profile.src,
}

export const links = {
	image: profile.src,
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