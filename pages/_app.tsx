import { AppProps } from 'next/app'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import '../styles/globals.scss' // applies styles throughout entire app

export const MyApp = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default MyApp
