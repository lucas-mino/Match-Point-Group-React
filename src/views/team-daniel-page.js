import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './team-daniel-page.css'

const TeamDanielPage = (props) => {
  return (
    <div className="team-daniel-page-container">
      <Helmet>
        <title>Team-Daniel-page - Match Point Group</title>
        <meta
          property="og:title"
          content="Team-Daniel-page - Match Point Group"
        />
      </Helmet>
      <header data-role="Header" className="team-daniel-page-header">
        <div className="team-daniel-page-container1">
          <div className="team-daniel-page-menu">
            <div className="team-daniel-page-logo">
              <Link to="/" className="team-daniel-page-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="team-daniel-page-image"
                />
              </Link>
            </div>
            <div className="team-daniel-page-summary">
              <Link to="/home-summary" className="team-daniel-page-navlink1">
                01  SUMMARY
              </Link>
            </div>
            <div className="team-daniel-page-market">
              <Link to="/market" className="team-daniel-page-navlink2">
                02  MARKET
              </Link>
            </div>
            <div className="team-daniel-page-solution">
              <Link
                to="/solution-overview"
                className="team-daniel-page-navlink3"
              >
                03  SOLUTION
              </Link>
            </div>
            <div className="team-daniel-page-cma">
              <Link to="/cma" className="team-daniel-page-navlink4">
                04  CMA
              </Link>
            </div>
            <div className="team-daniel-page-financial">
              <Link to="/financial" className="team-daniel-page-navlink5">
                05  FINANCIAL
              </Link>
            </div>
            <div className="team-daniel-page-timeline">
              <Link to="/timeline" className="team-daniel-page-navlink6">
                06  TIMELINE
              </Link>
            </div>
            <div className="team-daniel-page-team">
              <Link to="/team" className="team-daniel-page-navlink7">
                07  TEAM
              </Link>
            </div>
            <div className="team-daniel-page-contact-us">
              <a
                href="mailto:hey@matchpointglobal.com?subject=Investment contact"
                className="team-daniel-page-link button"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="team-daniel-page-container2">
            <div className="team-daniel-page-container3">
              <div className="team-daniel-page-container4"></div>
              <div className="team-daniel-page-container5">
                <span className="team-daniel-page-text">Team</span>
              </div>
            </div>
            <div className="team-daniel-page-container6">
              <div className="team-daniel-page-foto">
                <img
                  alt="image"
                  src="/dani-li-200h.png"
                  className="team-daniel-page-image1"
                />
              </div>
              <div className="team-daniel-page-nombre">
                <div className="team-daniel-page-nombre1">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="team-daniel-page-link1"
                  >
                    <span>Daniel Orsanic</span>
                    <br></br>
                  </a>
                </div>
                <div className="team-daniel-page-cargo">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="team-daniel-page-link2"
                  >
                    <span>Brand Ambassador </span>
                    <span>&amp; Partner</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-daniel-page-container7">
              <span className="team-daniel-page-text05">
                <span>
                  Daniel has been directly related to tennis, with success both
                  on and off the court. As a professional player, he won 8
                  titles and ranked among the top 20 in the world, maintaining a
                  large number of sponsors.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  After retirement, he became a coach and manager of
                  professional players, achieving good results with all of them.
                  The most outstanding: Pablo Cuevas champion of Roland Garros
                  in doubles in 2008.
                </span>
                <br></br>
                <br></br>
                <span>
                  He was part of the Argentine Tennis Association, in charge of
                  Development, to later become captain of the Argentine team
                  that won the Davis Cup for the only time, in 2016, having also
                  reached the semifinals the previous year.
                </span>
                <br></br>
                <br></br>
                <span>
                  Daniel not only knows perfectly, but has also been an active
                  part of each component that makes up the tennis ecosystem:
                  professional and amateur circuit, associations, brands and
                  clubs.
                </span>
                <br></br>
                <br></br>
                <span>
                  He is currently one of the faces of ESPN Tennis for the entire
                  region, which keeps him as one of the greatest exponents of
                  Argentine and Latin American tennis.
                </span>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default TeamDanielPage
