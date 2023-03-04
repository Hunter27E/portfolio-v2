import { Nav } from '../components/Nav/Nav'
import { Hero } from '../components/Hero/Hero'
import { AboutMe } from '../components/AboutMe/AboutMe'
import { Experience } from '../components/Experience/Experience'
import { Projects } from '../components/Projects/Projects'

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
		</main>
	)
}

export default Home
