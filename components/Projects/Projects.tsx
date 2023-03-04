import React, { useState } from 'react'

import { Card } from '../Card/Card'

import styles from './Projects.module.scss'
import projects from './Projects.json'

export const Projects = () => {
	const [showExtra, setShowExtra] = useState(false)

	return (
		<section className={`section ${styles.projects}`}>
			<h2 className='subheading'>
				i like to practice what i'm learning with projects!
			</h2>
			<h1 className='heading'>PROJECTS</h1>
			<div className={`flexColumn ${styles.cards}`}>
				{projects.map(
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
							variant='project'
							isActive={false}
						/>
					)
				)}
			</div>
		</section>
	)
}
