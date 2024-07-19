import React from 'react'

import { Anton } from '@next/font/google'
const anton = Anton({
	subsets: ['latin'],
	weight: ['400'],
	style: ['normal'],
	variable: '--font-anton',
})

import styles from './Hero.module.scss'

export const Hero = () => {
	return (
		<section className={`${styles.hero} ${anton.variable}`}>
			<h2 className={styles.subtitle}>software engineer</h2>
			<h1 className={`${styles.title} outlineText anton`}>HUNTER ESTRADA</h1>
			<div className={styles.ctaBtns}>
				<a href='#contactMe' className='btnPrimary'>
					SAY HELLO
				</a>
				<a href='#aboutMe' className='btnSecondary'>
					READ MORE
				</a>
			</div>
		</section>
	)
}
