import React from 'react'

import { Anton } from '@next/font/google'

import styles from './Hero.module.scss'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })

export const Hero = () => {
	return (
		<section className={styles.hero}>
			<h2 className={styles.subtitle}>software engineer</h2>
			<h1 className={`${styles.title} outlineText ${anton.className}`}>
				HUNTER ESTRADA
			</h1>
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
