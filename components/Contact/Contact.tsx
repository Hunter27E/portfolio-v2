import React from 'react'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebook,
	faSquareInstagram,
	faLinkedin,
	faGithub,
} from '@fortawesome/free-brands-svg-icons'

import styles from './Contact.module.scss'

export const Contact = () => (
	<section className={`section ${styles.contactMe}`} id='contactMe'>
		<div className={styles.backgroundImg}></div>
		<h2 className='subheading'>can't wait to hear from you</h2>
		<h1 className='heading'>CONTACT ME</h1>
		<form
			action='https://formspree.io/f/mwkwdodq'
			method='POST'
			className={`${styles.form} flexColumn`}
		>
			<div className={`${styles.formGroup} flexRow`}>
				<label htmlFor='name'>NAME </label>
				<input
					name='name'
					type='text'
					placeholder='John Doe'
					required
				/>
			</div>
			<div className={`${styles.formGroup} flexRow`}>
				<label htmlFor='phone'>PHONE</label>
				<input name='phone' type='tel' placeholder='(123) 555-1234' />
			</div>
			<div className={`${styles.formGroup} flexRow`}>
				<label htmlFor='email'>EMAIL</label>
				<input
					name='email'
					type='email'
					placeholder='johndoe@mail.com'
					required
				/>
			</div>
			<div className={`flexColumn ${styles.formGroup} `}>
				<label htmlFor='message'>MESSAGE</label>
				<textarea
					name='message'
					placeholder='send a message...'
					required
				></textarea>
			</div>
			<button type='submit' className={`btnPrimary ${styles.sendBtn}`}>
				SEND MESSAGE
			</button>
		</form>
		<footer className={`flexRow ${styles.footer}`}>
			<a href=''>
				<FontAwesomeIcon icon={faFacebook} className='link' />
			</a>
			<a href=''>
				<FontAwesomeIcon icon={faSquareInstagram} className='link' />
			</a>
			<a href=''>
				<FontAwesomeIcon icon={faLinkedin} className='link' />
			</a>
			<a href=''>
				<FontAwesomeIcon icon={faGithub} className='link' />
			</a>
			<p className={styles.tagline}>
				Designed and built by{' '}
				<a className='link' href=''>
					Hunter Estrada
				</a>
			</p>
		</footer>
	</section>
)
