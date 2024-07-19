import React, { useState } from 'react'

import cn from 'classnames'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faUser as faUserRegular,
	faBuilding as faBuildingRegular,
	faFolder as faFolderRegular,
	faPaperPlane as faPaperPlaneRegular,
} from '@fortawesome/free-regular-svg-icons'
import {
	faBuilding as faBuildingSolid,
	faFolder as faFolderSolid,
	faPaperPlane as faPaperPlaneSolid,
	faUser as faUserSolid,
	faBars,
	faXmark,
} from '@fortawesome/free-solid-svg-icons'

import styles from './Nav.module.scss'

const links = [
	{
		name: 'aboutMe',
		content: 'About Me',
		regularIcon: faUserRegular,
		solidIcon: faUserSolid,
	},
	{
		name: 'experience',
		content: 'Experience',
		regularIcon: faBuildingRegular,
		solidIcon: faBuildingSolid,
	},
	{
		name: 'projects',
		content: 'projects',
		regularIcon: faFolderRegular,
		solidIcon: faFolderSolid,
	},
	{
		name: 'contactMe',
		content: 'Contact Me',
		regularIcon: faPaperPlaneRegular,
		solidIcon: faPaperPlaneSolid,
	},
]

interface NavProps {
	activeSection?: string
}

export const Nav = ({ activeSection }: NavProps) => {
	const [open, setOpen] = useState(false)

	const toggleNav = () => {
		setOpen(prevOpen => {
			const body = document.querySelector('body') as HTMLElement
			body.style.overflow = prevOpen ? 'auto' : 'hidden'
			return !prevOpen
		})
	}

	return (
		<nav
			className={cn({
				[styles.nav]: true,
				[styles.open]: open,
			})}
		>
			<div className={styles.screen}></div>
			<button onClick={toggleNav} className={styles.navToggleBtn}>
				<FontAwesomeIcon icon={faBars} className={`link ${styles.hamburger}`} />
			</button>
			<ul className={styles.navList}>
				<li>
					<button onClick={toggleNav} className={styles.navToggleBtn}>
						<FontAwesomeIcon icon={faXmark} className='link' />
					</button>
				</li>
				{links.map((link, i) => (
					<li key={i}>
						<a href={`#${link.name}`} className='link' onClick={toggleNav}>
							<FontAwesomeIcon
								icon={
									activeSection === link.name ? link.solidIcon : link.regularIcon
								}
							/>
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
