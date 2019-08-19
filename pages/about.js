import React from 'react'
// Translations
import { Trans } from '@lingui/macro'
import withLang from '../components/languages/withLang'
// components
import Layout from '../components/layouts/layout'

const About = () => {
  return (
    <Layout>
      <p><Trans id='about' /></p>
    </Layout>
  )
}

export default withLang(About)
