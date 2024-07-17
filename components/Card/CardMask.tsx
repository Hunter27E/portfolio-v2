import React from 'react'

import cn from 'classnames'

import styles from './CardMask.module.scss'

interface CardMaskProps {
	logoPath: string
	logoAlt: string
	isBeingHovered: boolean
}

export const CardMask = ({
	logoPath,
	logoAlt,
	isBeingHovered,
}: CardMaskProps) => (
	<div
		className={cn({
			[styles.cardMask]: true,
			[styles.hideMask]: isBeingHovered,
		})}
	>
		<img src={logoPath} alt={logoAlt} className={styles.logoImg} />
	</div>
)
