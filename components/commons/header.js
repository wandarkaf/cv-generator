import React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
// translations
import { Trans } from '@lingui/macro'
import LangSwitcher from '../languages/LangSwitcher'

class Header extends React.Component {
  handleActivePathClass = (path, current) =>
    path === current ? 'active' : 'inactive'

  handleLangPath = (path, lang) =>
    lang ? `${path}?lang=${lang}` : path

  render () {
    const { router } = this.props
    const path = router.pathname.slice(1)

    const links = [
      { route: '', translation: 'Home' },
      { route: 'about', translation: 'About' }
    ]

    return (
      <nav className='menu'>
        <div className='row'>
          <div className='col-xs-8'>
            <div className='box'>
              {links.map((link, i) =>
                <Link key={i} href={this.handleLangPath(`/${link.route}`, router.query.lang)}>
                  <a className={`btn ${this.handleActivePathClass(path, link.route)}`}>
                    <Trans>{link.translation}</Trans>
                  </a>
                </Link>
              )}
            </div>
          </div>
          <div className='col-xs-4'>
            <div className='box'>
              <LangSwitcher />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
