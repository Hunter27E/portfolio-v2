import React from 'react'

import styles from './CardMask.module.scss'

interface CardMaskProps {
	logoPath: string
	logoAlt: string
}

export const CardMask = ({ logoPath, logoAlt }: CardMaskProps) => (
	<div className={`${styles.cardMask}`}>
		<img src={logoPath} alt={logoAlt} className={styles.logoImg} />
	</div>
)
