import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SideBarDrawerProvider } from '../context/SIdebarDrawerContext'
import makeServer from '../services/mirage'


if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function MyApp({ Component, pageProps }:AppProps) {

  return (
    
    <ChakraProvider resetCSS theme={theme}>
      <SideBarDrawerProvider>
      <Component {...pageProps} />
      </SideBarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp

