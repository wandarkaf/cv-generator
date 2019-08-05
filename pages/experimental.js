// Translations
import withLang from '../components/languages/withLang'
// Components
import Layout from '../components/layouts/layout'

const Experimental = () => {
  return (
    <Layout>
      <p>This is the Experimental page. Not working yet.</p>
    </Layout>
  )
}

export default withLang(Experimental)
