import React, { Component } from 'react'
// Translations
// import { Trans } from '@lingui/macro'

class Card extends Component {
  state = {
    flip: false
  }

  handleToogleFlip = e => {
    e.preventDefault()
    this.setState({ flip: !this.state.flip })
  }

  render () {
    return (
      <div id='baseballCard' className='baseball-card' onClick={this.handleToogleFlip}>
        <article id='flipper' className={this.state.flip ? 'flipped' : ''}>
          <section className='front'>
            <address className='player-name holtwood'>Alonso Lamas</address>
            <div className='player-photo' role='image' />
            <p className='position holtwood'>Fullstack</p>
            <p className='team holtwood'>Software</p>
            <img className='team-banner' id='teambanner' src='/static/teamBanner.svg' />
            <img className='position-banner' id='positionBanner' src='/static/positionBanner.svg' />
          </section>
          <section className='back'>
            <header>
              <p className='card-number'>50
                <img id='stitching' src='/static/stitching.svg' />
              </p>
              <div className='flex-grid header-grid'>
                <div className='flex-row'>
                  <h2 className='flex-cell text-center width-12 header-player-name'>Alonso Lamas</h2>
                </div>
                <div className='flex-row'>
                  <span className='flex-cell width-04 header-player-position text-left'>
                    Fullstack
                  </span>
                  <span className='flex-cell width-08 header-player-team text-right'>
                    Software
                  </span>
                </div>
                <div className='flex-row small-text'>
                  <span className='flex-cell width-04'><strong>Code</strong>: <br />DRY</span>
                  <span className='flex-cell width-04'><strong>Monitor</strong>: <br />Dual</span>
                  <span className='flex-cell width-04'><strong>Keyboard</strong>: <br />Mechanical</span>
                </div>
                <div className='flex-row small-text'>
                  <span className='flex-cell width-06'><strong>Born</strong>: <br />May 17, 1985</span>
                  <span className='flex-cell width-06'><strong>Home</strong>: <br />Caracas, VE</span>
                </div>
              </div>
            </header>
            <p className='bio'>
              Alonso 'Splinter' Lamas is a frontend natural team lead with a high coding rate and a high level of production when pulling the keycap, Lamas has been compared to fellow Software Developer Linus Torvalds. Lamas was drafted by the Engineer team in 2005, and made his Industry debut in the 2011 season, sharing time between frontend and the backend. He became the Ateknea starting Frontend senior in 2017, before moving to team lead in 2018.
            </p>
            <h3 className='table-title text-center'>Software League Records</h3>
            <table className='player-stats'>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Team</th>
                  <th>Pos.</th>
                  <th>G</th>
                  <th>AB</th>
                  <th>AVG.</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th colSpan='3'>Maj. Tot. 5 Yrs</th>
                  <th>644</th>
                  <th>2606</th>
                  <th>.303 </th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>2015</td>
                  <td>Frontend</td>
                  <td>Coder</td>
                  <td>52</td>
                  <td>189</td>
                  <td>.291</td>
                </tr>
                <tr>
                  <td>2016</td>
                  <td>Frontend</td>
                  <td>Coder</td>
                  <td>145</td>
                  <td>597</td>
                  <td>.291</td>
                </tr>
                <tr>
                  <td>2017</td>
                  <td>Backend</td>
                  <td>Coder</td>
                  <td>158</td>
                  <td>672</td>
                  <td>.318</td>
                </tr>
                <tr>
                  <td>2018</td>
                  <td>Fullstack</td>
                  <td>Coder</td>
                  <td>153</td>
                  <td>628</td>
                  <td>.264</td>
                </tr>
                <tr>
                  <td>2019</td>
                  <td>Lead</td>
                  <td>Coder</td>
                  <td>136</td>
                  <td>520</td>
                  <td>.346</td>
                </tr>
              </tbody>
            </table>
            <p className='printed'>&copy; Alonso Lamas</p>
          </section>
        </article>
      </div>
    )
  }
}

export default Card
