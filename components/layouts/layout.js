import React from 'react'
import Head from 'next/head'
// API
import fetch from 'isomorphic-unfetch'
// Google analytics
import { initGA, logPageView } from '../../utils/analytics'
// Components
import Header from '../commons/header'
import Footer from '../commons/footer'
import Loader from '../decorations/loader'

import {
  API_ROOT_URL,
  PROFILE_ID
} from '../../constants'
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

    // fake API call
    const resProfile = await fetch(`${API_ROOT_URL}profiles?id=${PROFILE_ID}`)
    const profile = await resProfile.json()
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
