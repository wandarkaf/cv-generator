import React from 'react'
import App, { Container } from 'next/app'
import { appWithTranslation } from '../i18n'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>

        <Component {...pageProps} />
        <style global jsx>
          {`
          @import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i&display=swap');
          @import url('https://fonts.googleapis.com/css?family=Holtwood+One+SC&display=swap');`}
        </style>
      </Container>
    )
  }
}

export default appWithTranslation(MyApp)