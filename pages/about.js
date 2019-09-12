import React from 'react'
// Translations
import withLang from '../components/languages/WithLang'
// components
import Layout from '../components/layouts/Layout'
import Card from '../components/commons/Card'

const About = () => {
  return (
    <Layout>
      <Card />
    </Layout>
  )
}

export default withLang(About)
