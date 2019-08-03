import { withRouter } from 'next/router'
import Link from 'next/link'
// translations
import { Trans } from '@lingui/macro'
import withLang from './withLang'

class Header extends React.Component {
  state = {
    language: ''
  }

  componentDidMount() {
    // this.setState({ language: i18n.language })
    this.setState({ language: 'en' })    
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
    const { router } = this.props
    const path = router.pathname.slice(1)

    const language = (
      <p className="language">
        <span 
          className={`btn ${this.handleActiveLangClass('es')}`}
          onClick={this.handlelanguage('es')}>
          <Trans>ES</Trans>
        </span>
        <span 
          className={`btn ${this.handleActiveLangClass('en')}`}
          onClick={this.handlelanguage('en')}>
          <Trans>EN</Trans>
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
                    <Trans>Home</Trans>
                  </a>
                </Link>
                <Link href="/experimental">
                  <a className={`btn ${this.handleActivePathClass(path, 'experimental')}`}>
                    <Trans>Experimental</Trans>
                  </a>
                </Link>
              </p>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="box">
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(withLang(Header))
