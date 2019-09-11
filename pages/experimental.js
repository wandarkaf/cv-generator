// Translations
import withLang from '../components/languages/WithLang'
// Components
import Layout from '../components/layouts/Layout'

const Experimental = () => {
  return (
    <Layout>
      <p>This is the Experimental page. Not working yet.</p>
    </Layout>
  )
}

export default withLang(Experimental)
