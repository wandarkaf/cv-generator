import { withRouter } from 'next/router'
// translations
import { i18n, withTranslation, Link } from '../i18n'

class Header extends React.Component {
  state = {
    language: ''
  }

  componentDidMount() {
    this.setState({ language: i18n.language })
  }

  handlelanguage = lang => e => {
    e.preventDefault()
    i18n.changeLanguage(lang)
    this.setState({ language: lang })
  }

  handleActiveLangClass = lang => 
    this.state.language === lang ? 'active' : 'inactive'

  handleActivePathClass = (path, current) => 
    path === current ? 'active' : 'inactive'

  render() {
    const { t, router } = this.props
    const path = router.pathname.slice(1)

    const language = (
      <p className="language">
        <span 
          className={`btn ${this.handleActiveLangClass('es')}`}
          onClick={this.handlelanguage('es')}>
          {t('nav.header.langMenu.es')}
        </span>
        <span 
          className={`btn ${this.handleActiveLangClass('en')}`}
          onClick={this.handlelanguage('en')}>
          {t('nav.header.langMenu.en')}
        </span>
      </p>)

    return (
      <nav className="menu">
        <div className="row">
          <div className="col-xs-8">
            <div className="box">
              <p>
                <Link href="/">
                  <a className={`btn ${this.handleActivePathClass(path, '')}`}>
                    {t('nav.header.home')}
                  </a>
                </Link>
                <Link href="/experimental">
                  <a className={`btn ${this.handleActivePathClass(path, 'experimental')}`}>
                    {t('nav.header.experimental')}
                  </a>
                </Link>
              </p>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="box">
              {language}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

Header.getInitialProps = () => {
    namespacesRequired: ['common']
}

export default withRouter(withTranslation('common')(Header))
