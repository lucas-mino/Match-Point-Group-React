import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './team.css'

const Team = (props) => {
  return (
    <div className="team-container">
      <Helmet>
        <title>Team - Match Point Group</title>
        <meta property="og:title" content="Team - Match Point Group" />
      </Helmet>
      <header data-role="Header" className="team-header">
        <div className="team-container1">
          <div className="team-menu">
            <div className="team-logo">
              <Link to="/" className="team-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="team-image"
                />
              </Link>
            </div>
            <div className="team-summary">
              <Link to="/home-summary" className="team-link">
                01  SUMMARY
              </Link>
            </div>
            <div className="team-market">
              <Link to="/market" className="team-navlink01">
                02  MARKET
              </Link>
            </div>
            <div className="team-solution">
              <Link to="/solution-overview" className="team-navlink02">
                03  SOLUTION
              </Link>
            </div>
            <div className="team-cma">
              <span className="team-text">04  CMA</span>
            </div>
            <div className="team-financial">
              <Link to="/financial" className="team-navlink03">
                05  FINANCIAL
              </Link>
            </div>
            <div className="team-timeline">
              <Link to="/timeline" className="team-navlink04">
                06  TIMELINE
              </Link>
            </div>
            <div className="team-team">
              <Link to="/team" className="team-navlink05">
                07  TEAM
              </Link>
            </div>
            <div className="team-contact-us">
              <button className="team-button button">CONTACT US</button>
            </div>
          </div>
          <div className="team-container2">
            <div className="team-container3">
              <div className="team-container4"></div>
              <div className="team-container5">
                <span className="team-text1">Team</span>
              </div>
            </div>
            <div className="team-container6">
              <span className="team-text2">Meet our team 💪</span>
            </div>
            <div className="team-container7">
              <div className="team-china">
                <Link to="/team-silvana-page" className="team-navlink06">
                  <div className="team-foto">
                    <img
                      alt="image"
                      src="/china-400h.png"
                      className="team-image1"
                    />
                  </div>
                </Link>
                <div className="team-nombre">
                  <Link to="/team-silvana-page" className="team-link1">
                    <span>Silvana Suarez</span>
                    <br></br>
                  </Link>
                </div>
                <div className="team-cargo">
                  <Link to="/team-silvana-page" className="team-link2">
                    CCO
                  </Link>
                </div>
              </div>
              <div className="team-marian">
                <div className="team-foto1">
                  <Link to="/team-mariano-page" className="team-navlink07">
                    <img
                      alt="image"
                      src="/marian-400h.png"
                      className="team-image2"
                    />
                  </Link>
                </div>
                <div className="team-nombre1">
                  <Link to="/team-mariano-page" className="team-link3">
                    Mariano Welch
                  </Link>
                </div>
                <div className="team-cargo1">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="team-link4"
                  >
                    CEO
                  </a>
                </div>
              </div>
              <div className="team-dani">
                <div className="team-foto2">
                  <Link to="/team-daniel-page" className="team-navlink08">
                    <img
                      alt="image"
                      src="/dani-400h.png"
                      className="team-image3"
                    />
                  </Link>
                </div>
                <div className="team-nombre2">
                  <Link to="/team-daniel-page" className="team-link5">
                    <span>Daniel Orsanic</span>
                    <br></br>
                  </Link>
                </div>
                <div className="team-cargo2">
                  <Link to="/team-daniel-page" className="team-link6">
                    Brand Ambassador
                  </Link>
                </div>
              </div>
              <div className="team-lucas">
                <div className="team-foto3">
                  <Link to="/team-lucas-page" className="team-navlink09">
                    <img
                      alt="image"
                      src="/lucas-400h.png"
                      className="team-image4"
                    />
                  </Link>
                </div>
                <div className="team-nombre3">
                  <Link to="/team-lucas-page" className="team-link7">
                    Lucas Miño
                  </Link>
                </div>
                <div className="team-cargo3">
                  <Link to="/team-lucas-page" className="team-link8">
                    CTO
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Team
