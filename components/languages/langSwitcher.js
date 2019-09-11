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
    const languages = [
      { code: 'es', translation: 'ES' },
      { code: 'en', translation: 'EN' }
    ]

    return (
      <I18n>
        {({ i18n }) => (
          <div className='language'>
            {languages.map((language, i) =>
              <span
                key={i}
                className={`btn ${this.handleActiveLangClass(i18n.language, language.code)}`}
                onClick={this.handlelanguage(language.code)}
              >
                <Trans>{language.translation}</Trans>
              </span>
            )}
          </div>
        )}
      </I18n>
    )
  }
}

export default LangSwitcher
