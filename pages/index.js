import React from 'react'
// API
import { getData } from '../utils/api'
// Translations
import { I18n } from '@lingui/react'
import { Trans } from '@lingui/macro'
import WithLang from '../components/languages/WithLang'
// components
import Layout from '../components/layouts/Layout'
import Education from '../components/cv/Education'
import Experience from '../components/cv/Experience'
import Logo from '../components/cv/Logo'
import List from '../components/commons/List'
import CircularChart from '../components/graphs/CircularChart'

class Index extends React.Component {
  render () {
    const { studies, jobs, skills } = this.props

    return (
      <I18n>
        {({ i18n }) => (
          <Layout>
            <Logo lang={i18n.language} />
            <main className='row'>
              <List title='Experience' measure='col-xs-12 col-sm-12 col-md-7 col-lg-8'>
                {jobs.map(exp => (
                  <Experience key={exp.id} show={exp} lang={i18n.language} />
                ))}
              </List>

              <List title='Studies' measure='col-xs-12 col-sm-12 col-md-5 col-lg-4'>
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
              </List>
            </main>
          </Layout>
        )}
      </I18n>
    )
  }
}

Index.getInitialProps = async function () {
  const [studies, jobs, skills] = await Promise.all([
    getData('studies'),
    getData('jobs'),
    getData('skills')
  ])

  return {
    studies,
    jobs,
    skills: skills[0]
  }
}

export default WithLang(Index)
