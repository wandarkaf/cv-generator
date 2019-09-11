import React from 'react'
// Translations
import { Trans } from '@lingui/macro'
import withLang from '../components/languages/WithLang'
// components
import Layout from '../components/layouts/Layout'

const About = () => {
  return (
    <Layout>
      <p><Trans id='about' /></p>
    </Layout>
  )
}

export default withLang(About)
