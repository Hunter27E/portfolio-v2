import React, { FormEventHandler, useState } from 'react'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebook,
	faSquareInstagram,
	faLinkedin,
	faGithub,
} from '@fortawesome/free-brands-svg-icons'

import styles from './Contact.module.scss'

export const Contact = () => {
	const [title, setTitle] = useState('CONTACT ME')

	const handleSubmitForm: FormEventHandler = e => {
		e.preventDefault()

		const form = document.getElementById('contactForm') as HTMLFormElement
		const formData = new FormData(form)

		// Make the request
		const xhr = new XMLHttpRequest()
		xhr.open(form.method, form.action)
		xhr.setRequestHeader('Accept', 'application/json')
		xhr.onreadystatechange = function () {
			if (xhr.readyState != XMLHttpRequest.DONE) return
			if (xhr.status === 200) {
				form.reset()
				setTitle('THANK YOU')
			} else setTitle('TRY AGAIN, PLEASE')
		}
		xhr.send(formData)
	}

	return (
		<section className={`section ${styles.contactMe}`} id='contactMe'>
			<div className={styles.backgroundImg}></div>
			<h2 className='subheading'>can't wait to hear from you</h2>
			<h1 className='heading'>{title}</h1>
			<form
				action='https://formspree.io/f/mwkwdodq'
				method='POST'
				className={`${styles.form} flexColumn`}
				onSubmit={handleSubmitForm}
				id='contactForm'
			>
				<div className={`${styles.formGroup} flexRow`}>
					<label htmlFor='name'>NAME&nbsp;</label>
					<input name='name' type='text' placeholder='John Doe' required />
				</div>
				<div className={`${styles.formGroup} flexRow`}>
					<label htmlFor='phone'>PHONE</label>
					<input name='phone' type='tel' placeholder='(123) 555-1234' />
				</div>
				<div className={`${styles.formGroup} flexRow`}>
					<label htmlFor='email'>EMAIL</label>
					<input name='email' type='email' placeholder='johndoe@mail.com' required />
				</div>
				<div className={`flexColumn ${styles.formGroup} ${styles.messageFormGroup}`}>
					<label htmlFor='message'>MESSAGE</label>
					<textarea name='message' placeholder='Send a message...' required></textarea>
				</div>
				<button type='submit' className={`btnPrimary ${styles.sendBtn}`}>
					SEND MESSAGE
				</button>
			</form>
			<footer className={`flexRow ${styles.footer}`}>
				<a href='https://www.facebook.com/hunter.estrada.779/'>
					<FontAwesomeIcon icon={faFacebook} className='link' />
				</a>
				<a href='https://www.instagram.com/hunter27e/'>
					<FontAwesomeIcon icon={faSquareInstagram} className='link' />
				</a>
				<a href='https://linkedin.com/in/hunter-estrada'>
					<FontAwesomeIcon icon={faLinkedin} className='link' />
				</a>
				<a href='https://github.com/Hunter27E'>
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
}
