import { Nav } from '../components/Nav/Nav'
import { Hero } from '../components/Hero/Hero'
import { AboutMe } from '../components/AboutMe/AboutMe'
import { Experience } from '../components/Experience/Experience'
import { Projects } from '../components/Projects/Projects'
import { Contact } from '../components/Contact/Contact'

export const Home = () => {
	return (
		<main>
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
