import React from 'react'
import Head from 'next/head'
// API
import { getData } from '../../utils/api'
// Components
import Header from '../commons/Header'
import Footer from '../commons/Footer'
import Loader from '../decorations/Loader'
// Google analytics
import { initGA, logPageView } from '../../utils/analytics'

import '../../stylesheets/main.scss'

class Layout extends React.Component {
  state = {
    profile: {},
    loader: true
  }

  async componentDidMount () {
    // analytics
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  
    const profile = await getData('profile')
    await this.setState({ profile: profile[0], loader: false })
  }

  render () {
    const { profile, loader } = this.state
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, { profile })
    )

    if (loader) {
      return (
        <Loader />
      )
    } else {
      return (
        <div>
          <Head>
            <title>{profile.name}</title>
          </Head>
          <Header />
          {childrenWithProps}
          <Footer show={profile} />
        </div>
      )
    }
  }
}

export default Layout
