import React, { Component } from 'react'
// Translations
// import { Trans } from '@lingui/macro'

class Card extends Component {
  state = {
    flip: false,
    card: {
      name: 'Alonso Lamas',
      position: 'Fullstack',
      team: 'Software',
      bio: 'Alonso \'Splinter\' Lamas is a frontend natural team lead with a high coding rate and a high level of production when pulling the keycap, Lamas has been compared to fellow Software Developer Linus Torvalds. Lamas was drafted by the Engineer team in 2005, and made his Industry debut in the 2011 season, sharing time between frontend and the backend. He became the Ateknea starting Frontend senior in 2017, before moving to team lead in 2018.',
      stats: [
        { year: '2015', team: 'Frontend', position: 'Coder', projects: 2, performance: 189, average: 0.291 },
        { year: '2016', team: 'Frontend', position: 'Coder', projects: 3, performance: 170, average: 0.391 },
        { year: '2017', team: 'Backend', position: 'Coder', projects: 2, performance: 199, average: 0.282 },
        { year: '2019', team: 'Fullstack', position: 'Coder', projects: 1, performance: 185, average: 0.295 },
        { year: '2018', team: 'Lead', position: 'Coder', projects: 2, performance: 192, average: 0.338 }
      ]
    }
  }

  handleToogleFlip = e => {
    e.preventDefault()
    this.setState({ flip: !this.state.flip })
  }

  render () {
    const { flip, card } = this.state
    return (
      <div className='baseball-card' onClick={this.handleToogleFlip}>
        <article className={flip ? 'flipped' : ''}>
          <section className='front'>
            <address className='player-name holtwood'>{card.name}</address>
            <div className='player-photo' role='image' />
            <p className='position holtwood'>{card.position}</p>
            <p className='team holtwood'>{card.team}</p>
            <img className='team-banner' id='teambanner' src='/static/teamBanner.svg' />
            <img className='position-banner' id='positionBanner' src='/static/positionBanner.svg' />
          </section>
          <section className='back'>
            <header>
              <p className='card-number'>50
                <img id='stitching' src='/static/stitching.svg' />
              </p>
              <div className='row header-grid'>
                <div className='col-xs-12'>
                  <h2 className='box text-right header-player-name'>{card.name}</h2>
                </div>
                <div className='col-xs-12'>
                  <p className='box text-right header-player-position'>
                    {card.position}
                  </p>
                </div>
                <div className='col-xs-12'>
                  <div className='box'>
                    <div className='row'>
                      <span className='col-xs-4'><strong>Code</strong>: <br />DRY</span>
                      <span className='col-xs-4'><strong>Monitor</strong>: <br />Dual</span>
                      <span className='col-xs-4'><strong>Keyboard</strong>: <br />Mechanical</span>
                    </div>
                    <div className='row'>
                      <span className='col-xs-6'><strong>Born</strong>: <br />May 17, 1985</span>
                      <span className='col-xs-6'><strong>Home</strong>: <br />Caracas, VE</span>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <p className='bio'>{card.bio}</p>
            <h3 className='table-title text-center'>Software League Records</h3>
            <table className='player-stats'>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Team</th>
                  <th>Pos.</th>
                  <th>Pro.</th>
                  <th>Perf.</th>
                  <th>AVG.</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th colSpan='3'>Maj. Tot. 5 Yrs</th>
                  <th>10</th>
                  <th>940</th>
                  <th>.289</th>
                </tr>
              </tfoot>
              <tbody>
                {
                  card.stats.map((stat, i) =>
                    <tr key={i}>
                      <td>{stat.year}</td>
                      <td>{stat.team}</td>
                      <td>{stat.position}</td>
                      <td>{stat.projects}</td>
                      <td>{stat.performance}</td>
                      <td>{stat.average}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
            <p className='printed'>&copy; {card.name}</p>
          </section>
        </article>
      </div>
    )
  }
}

export default Card
