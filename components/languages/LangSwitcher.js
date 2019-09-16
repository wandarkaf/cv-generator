import React from 'react'
import Router from 'next/router'
// translations
import { I18n } from '@lingui/react'
import { Trans } from '@lingui/macro'
// icons
import { FiGlobe } from 'react-icons/fi'

class LangSwitcher extends React.Component {
  state = {
    open: false
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleLanguageClick)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleLanguageClick)
  }

  handlelanguage = lang => e => {
    e.preventDefault()
    this.setState({ open: false })
    Router.push({
      pathname: window.location.pathname,
      query: { lang }
    })
  }

  handleLanguageClick = e => {
    if (this.area.contains(e.target)) {
      this.setState({ open: true })
      return
    }
    this.setState({ open: false })
  }
    
  handleActiveLangClass = (curr, lang) =>
    curr === lang ? 'active' : 'inactive'

  render () {
    const languages = [
      { code: 'es', translation: 'ES' },
      { code: 'en', translation: 'EN' }
    ]

    return (
      <I18n>
        {({ i18n }) => (
          <div className='language' ref={area => this.area = area}>
            <span 
              className={`btn ${this.state.open ? 'active': 'inactive'}`}
            >
              <FiGlobe />
            </span>
            {this.state.open
              ? <ul>
                  {languages.map((language, i) =>
                    <li
                      key={i}
                      className={`btn ${this.handleActiveLangClass(i18n.language, language.code)}`}
                      onClick={this.handlelanguage(language.code)}
                    >
                      <Trans id={language.translation} />
                    </li>
                  )}
                </ul>
              : null
            }
          </div>
        )}
      </I18n>
    )
  }
}

export default LangSwitcher
