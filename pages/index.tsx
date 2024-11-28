import { Nav } from '../components/Nav/Nav'
import { Hero } from '../components/Hero/Hero'
import { AboutMe } from '../components/AboutMe/AboutMe'
import { Experience } from '../components/Experience/Experience'
import { Projects } from '../components/Projects/Projects'
import { Contact } from '../components/Contact/Contact'

import { Poppins, Fira_Code } from "next/font/google"
const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	style: ['italic', 'normal'],
	variable: '--font-poppins',
})
const firaCode = Fira_Code({
	subsets: ['latin'],
	weight: 'variable',
	style: ['normal'],
	variable: '--font-fira-code',
})

export const Home = () => {
	return (
		<main className={`${poppins.variable} ${firaCode.variable} poppins`}>
			<header>
				<Nav />
			</header>
			<Hero />
			<AboutMe />
			<Experience />
			<Projects />
			<Contact />
		</main>
	)
}

export default Home
