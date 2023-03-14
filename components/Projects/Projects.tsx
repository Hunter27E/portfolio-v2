import React, { useState } from 'react'

import { Card } from '../Card/Card'

import styles from './Projects.module.scss'
import projects from './Projects.json'
import extraProjects from './ExtraProjects.json'

export const Projects = () => {
	const [showExtra, setShowExtra] = useState(false)

	const projectsToShow = showExtra
		? [...projects, ...extraProjects]
		: [...projects]

	return (
		<section className={`section ${styles.projects}`}>
			<h2 className='subheading'>
				i like to practice what i'm learning with projects!
			</h2>
			<h1 className='heading'>PROJECTS</h1>
			<div className={`flexRow ${styles.cards}`}>
				{projectsToShow.map(
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
							variant={
								index < projects.length
									? 'project'
									: 'extraProject'
							}
						/>
					)
				)}
			</div>
			<button
				className={`btnPrimary ${styles.toggleExtraProjectsBtn}`}
				onClick={() => {
					setShowExtra((prevShowExtra) => !prevShowExtra)
				}}
			>
				{showExtra ? 'HIDE EXTRAS' : 'MORE PROJECTS'}
			</button>
		</section>
	)
}
