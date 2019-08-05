// API
import fetch from 'isomorphic-unfetch'
// Translations
import { I18n } from '@lingui/react'
import withLang from '../components/languages/withLang'
// components
import Layout from '../components/layouts/layout'
import Education from '../components/cv/education'
import Experience from '../components/cv/experience'
import Logo from '../components/cv/logo'
import List from '../components/commons/list'

import {
  API_ROOT_URL
} from '../constants'

class Index extends React.Component {

  upperLang = (lang) => lang.toUpperCase()

  render() {
    const { studies, jobs } = this.props

    return (
      <I18n>
      {({ i18n }) => (
        <Layout>
          <Logo/>

          <div className="row">
            <List title="Experience" measure="col-xs-12 col-sm-7 col-md-8 col-lg-8">
              {jobs.map(exp => (
                <Experience key={exp.id} show={exp} lang={this.upperLang(i18n.language)} />
              ))}
            </List>

            <List title="Studies" measure="col-xs-12 col-sm-5 col-md-4 col-lg-4">
              {studies.map(education => (
                <Education key={education.id} show={education} lang={this.upperLang(i18n.language)} />
              ))}
            </List>
          </div>
        </Layout>
      )}
      </I18n>
    )
  }
}

Index.getInitialProps = async function() {
  const profileId = 1
  const searchProfile = `?profileId=${profileId}&_sort=startDate&_order=desc`
  
  // fake API call
  const resStudies = await fetch(`${API_ROOT_URL}studies${searchProfile}`)
  const studies = await resStudies.json()

  const resJobs = await fetch(`${API_ROOT_URL}jobs${searchProfile}`)
  const jobs = await resJobs.json()

  return {
    studies,
    jobs
  }
}

export default withLang(Index)

// <Link href="/post/[id]" as={`/post/${show.id}`}>
// <a>{show.id}</a>
// </Link>