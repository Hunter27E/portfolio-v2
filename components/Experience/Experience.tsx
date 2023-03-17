import React from 'react'

import { Card } from '../Card/Card'

import styles from './Experience.module.scss'
import experiences from './Experience.json'

export const Experience = () => (
	<section className={`section ${styles.experience}`}>
		<h2 className='subheading'>i've learned a lot from my SWE roles!</h2>
		<h1 className='heading'>EXPERIENCE</h1>
		<div className={`${styles.cards}`}>
			{experiences.map(
				(
					{
						company,
						title,
						date,
						logoPath,
						logoAlt,
						description,
						webLink,
						githubLink,
						skills,
						mockupImgPath,
					},
					index
				) => (
					<Card
						key={index}
						company={company}
						title={title}
						date={date}
						logoPath={logoPath}
						logoAlt={logoAlt}
						description={description}
						webLink={webLink}
						githubLink={githubLink}
						skills={skills}
						mockupImgPath={mockupImgPath}
						variant='experience'
					/>
				)
			)}
		</div>
	</section>
)
