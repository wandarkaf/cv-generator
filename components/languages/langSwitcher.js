import React from 'react'
import Router from 'next/router'
import { I18n } from '@lingui/react'
import { Trans } from '@lingui/macro'

class LangSwitcher extends React.Component {
  handlelanguage = lang => e => {
    e.preventDefault()
    Router.push({
      pathname: window.location.pathname,
      query: { lang }
    })
  }

  handleActiveLangClass = (curr, lang) =>
    curr === lang ? 'active' : 'inactive'

  render () {
    return (
      <I18n>
        {({ i18n }) => (
          <p className='language'>
            <span
              className={`btn ${this.handleActiveLangClass(i18n.language, 'es')}`}
              onClick={this.handlelanguage('es')}>
              <Trans>ES</Trans>
            </span>
            <span
              className={`btn ${this.handleActiveLangClass(i18n.language, 'en')}`}
              onClick={this.handlelanguage('en')}>
              <Trans>EN</Trans>
            </span>
          </p>
        )}
      </I18n>
    )
  }
}

export default LangSwitcher
