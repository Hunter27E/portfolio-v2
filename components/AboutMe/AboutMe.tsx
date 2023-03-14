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
		/* const intervalID = setInterval(() => {
			setWordIdx((prevWordIdx) => (prevWordIdx + 1) % words.length)
		}, 2000) TODO uncomment for production

		return () => clearInterval(intervalID) */
	}, [])

	return (
		<section
			className={`${styles.aboutMe} flexColumn section`}
			id='aboutMe'
		>
			<p className={`${styles.tagline} outlineText flexColumn`}>
				<span>
					I'm a
					<span className='gradientText'> software engineer</span>
				</span>
				<span>with a special interest in building</span>
				<span className='gradientText typewriter'>
					{words[wordIdx]}
				</span>
				<span>user experiences.</span>
			</p>
			<div className={styles.aboutMeCard}>
				<div className={`flexColumn ${styles.cardText}`}>
					<h2>ABOUT ME</h2>
					<p className='paragraph'>
						hello! my name is Hunter and I'm a software engineer
						with a special interest in building functional,
						accessible, performant user interfaces.
					</p>
					<p className='paragraph'>
						in 2020 I got started with web development and since
						then i've had a ton of fun building websites for school
						projects, internships, clients, employers, and myself!
					</p>
					<p className='paragraph'>
						let me show you some of the things i've worked on!
					</p>
					<img
						src='/images/me.jpg'
						alt='Me'
						className={styles.cardImg}
					/>
				</div>
				<div className={styles.cardSidebar}>
					<div className={styles.cardSidebarSocials}>
						<a href='https://www.instagram.com/hunter27e/'>
							<FontAwesomeIcon
								icon={faSquareInstagram}
								className='link'
							/>
						</a>
						<a href='https://www.linkedin.com/in/hunter-estrada/'>
							<FontAwesomeIcon
								icon={faLinkedin}
								className='link'
							/>
						</a>
						<a href='https://github.com/Hunter27E'>
							<FontAwesomeIcon
								icon={faSquareGithub}
								className='link'
							/>
						</a>
						<a href='https://www.facebook.com/hunter.estrada.779/'>
							<FontAwesomeIcon
								icon={faSquareFacebook}
								className='link'
							/>
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
