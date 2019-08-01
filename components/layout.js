import Header from './header'
import Footer from './footer'

import "../stylesheets/main.scss"

const Layout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout
