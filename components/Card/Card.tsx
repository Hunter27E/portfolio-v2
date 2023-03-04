import React from 'react'

import cn from 'classnames'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import styles from './Card.module.scss'
import { CardMask } from './CardMask'

interface CardProps {
	company: string
	title: string
	date: string | null
	logoPath: string | null
	logoAlt: string
	description: string[]
	webLink: string
	githubLink: string | null
	skills: string[]
	mockupImgPath: string | null
	variant: 'project' | 'experience'
	isActive: boolean
}

export const Card = ({
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
	variant,
	isActive,
}: CardProps) => {
	const showCardMask =
		variant === 'experience' && logoPath !== null && !isActive

	return (
		<article
			className={cn({
				[styles.project]: variant === 'project',
				[styles.experience]: variant === 'experience',
				[styles.card]: true,
			})}
		>
			{showCardMask && <CardMask logoPath={logoPath} logoAlt={logoAlt} />}
			<header>
				<div className={`${styles.headerLeft} flexColumn`}>
					<h1>{company}</h1>
					<hr />
					{date && <p className={styles.date}>{date}</p>}
				</div>
				{logoPath && (
					<img
						src={logoPath}
						alt={logoAlt}
						className={styles.headerRight}
					/>
				)}
			</header>
			<section className={`${styles.content} flexColumn`}>
				<div className={`${styles.top} flexRow`}>
					<p className={styles.title}>{title}</p>
					<a href={webLink}>
						<FontAwesomeIcon icon={faLink} className='link' />
					</a>
					{githubLink && (
						<a href={githubLink}>
							<FontAwesomeIcon icon={faGithub} className='link' />
						</a>
					)}
				</div>
				<div className={`${styles.description} flexColumn`}>
					{description.map((paragraph) => (
						<p className='paragraph'>{paragraph}</p>
					))}
				</div>
				<div className={`${styles.skills} flexRow`}>
					{skills.map((skill, index) => (
						<span className={styles.skill} key={index}>
							{skill}
						</span>
					))}
				</div>
			</section>
			{mockupImgPath && (
				<img
					src={mockupImgPath}
					alt='Mockup image'
					className={styles.mockupImg}
				/>
			)}
		</article>
	)
}

/*
<article className={`${styles.card} flexColumn`}>
*/

/*

TODO

use either animations/transforms or scrolling using JS to move the carousel

set one of the cards to be "active"
the active card does not have a mask, but the others do

handle clicking left and right buttons (should wrap around to the beginning) to scroll
between cards and correspondingly scroll the options bar

also handle clicking on the cards themselves to make that one active
(it would also update the scrolling of the options bar)

calculate how much you must scroll in order to get to that card when it becomes active

*/
