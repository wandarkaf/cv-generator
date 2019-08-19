import React from 'react'
// API
import fetch from 'isomorphic-unfetch'
// Translations
import { I18n } from '@lingui/react'
import { Trans } from '@lingui/macro'
import withLang from '../components/languages/withLang'
// components
import Layout from '../components/layouts/layout'
import Education from '../components/cv/education'
import Experience from '../components/cv/experience'
import Logo from '../components/cv/logo'
import List from '../components/commons/list'
import CircularChart from '../components/graphs/circularChart'
// utils
// import { getData } from '../utils/graphs'

import {
  API_ROOT_URL,
  PROFILE_ID
} from '../constants'

class Index extends React.Component {
  // upperLang = (lang) => lang.toUpperCase()

  componentDidMount () {}

  render () {
    const { studies, jobs, skills } = this.props

    return (
      <I18n>
        {({ i18n }) => (
          <Layout>
            <Logo lang={i18n.language} />

            <div className='row'>
              <List title='Experience' measure='col-xs-12 col-sm-12 col-md-7 col-lg-8'>
                {jobs.map(exp => (
                  <Experience key={exp.id} show={exp} lang={i18n.language} />
                ))}
              </List>

              <div className='col-xs-12 col-sm-12 col-md-5 col-lg-4'>
                <div className='box'>
                  <h3><Trans id='Studies' /></h3>
                  {studies.map(education => (
                    <Education key={education.id} show={education} lang={i18n.language} />
                  ))}
                  <h3><Trans id='Skills' /></h3>
                  <CircularChart
                    type='polarArea'
                    data={skills.circular.data}
                    colors={['#9F280A', '#BC320D', '#EC6806', '#FFB901', '#958823', '#2F7443']}
                    hoverColors={['#e73a0f', '#f05026', '#fa9244', '#ffce4d', '#d0be35', '#45aa62']}
                  />
                </div>
              </div>
            </div>
          </Layout>
        )}
      </I18n>
    )
  }
}

Index.getInitialProps = async function () {
  const searchProfile = `?profileId=${PROFILE_ID}&_sort=startDate&_order=desc`

  // fake API call
  const resStudies = await fetch(`${API_ROOT_URL}studies${searchProfile}`)
  const studies = await resStudies.json()

  const resJobs = await fetch(`${API_ROOT_URL}jobs${searchProfile}`)
  const jobs = await resJobs.json()

  const resSkills = await fetch(`${API_ROOT_URL}skills?profileId=${PROFILE_ID}`)
  const skillsSet = await resSkills.json()
  const skills = skillsSet[0]

  return {
    studies,
    jobs,
    skills
  }
}

export default withLang(Index)

// <Link href="/post/[id]" as={`/post/${show.id}`}>
// <a>{show.id}</a>
// </Link>
