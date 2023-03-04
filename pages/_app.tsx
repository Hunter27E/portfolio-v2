import { AppProps } from 'next/app'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import '../styles/globals.scss' // applies styles throughout entire app

export const MyApp = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default MyApp
