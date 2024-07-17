import React, { useEffect, useState } from 'react'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faSquareInstagram,
	faLinkedin,
	faSquareFacebook,
	faSquareGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

import styles from './AboutMe.module.scss'

const words = ['PERFORMANT', 'ACCESSIBLE', 'BEAUTIFUL', 'FUNCTIONAL', 'USABLE']

export const AboutMe = () => {
	const [wordIdx, setWordIdx] = useState(0)

	useEffect(() => {
		const intervalID = setInterval(() => {
			setWordIdx(prevWordIdx => (prevWordIdx + 1) % words.length)
		}, 2000)

		return () => clearInterval(intervalID)
	}, [])

	return (
		<section className={`${styles.aboutMe} flexColumn section`} id='aboutMe'>
			<p className={`${styles.tagline} outlineText flexColumn`}>
				<span>
					I'm a<span className='gradientText'> software engineer</span>
				</span>
				<span>with a special interest in building</span>
				<span className='gradientText typewriter'>{words[wordIdx]}</span>
				<span>user experiences.</span>
			</p>
			<div className={styles.aboutMeCard}>
				<div className={`flexColumn ${styles.cardText}`}>
					<h2>ABOUT ME</h2>
					<p className='paragraph'>
						Hello! My name is Hunter Estrada and I'm a software engineer.
					</p>
					<p className='paragraph'>
						Frontend web development is my favorite, but I really enjoy working on the
						backend too, and even doing some web design at times.
					</p>
					<p className='paragraph'>
						I obtained my Bachelor's in Computer Science from UC San Diego in 2022.
						Midway through my time there in 2020 I picked up web development and have
						been all about it ever since.
					</p>
					<p className='paragraph'>
						When I'm off the computer, I love playing basketball or tennis, taking road
						trips, and going camping.
					</p>
					<p className='paragraph'>
						I hope you enjoy learning a bit about my projects and experiences as a
						software developer!
					</p>
					<img src='/images/me.jpg' alt='Me' className={styles.cardImg} />
				</div>
				<div className={styles.cardSidebar}>
					<div className={styles.cardSidebarSocials}>
						<a href='https://www.instagram.com/hunter27e/'>
							<FontAwesomeIcon icon={faSquareInstagram} className='link' />
						</a>
						<a href='https://www.linkedin.com/in/hunter-estrada/'>
							<FontAwesomeIcon icon={faLinkedin} className='link' />
						</a>
						<a href='https://github.com/Hunter27E'>
							<FontAwesomeIcon icon={faSquareGithub} className='link' />
						</a>
						<a href='https://www.facebook.com/hunter.estrada.779/'>
							<FontAwesomeIcon icon={faSquareFacebook} className='link' />
						</a>
					</div>
					<a href='#contactMe'>
						<FontAwesomeIcon icon={faPaperPlane} className='link' />
					</a>
				</div>
			</div>
		</section>
	)
}
