import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './team-mariano-page.css'

const TeamMarianoPage = (props) => {
  return (
    <div className="team-mariano-page-container">
      <Helmet>
        <title>Team-Mariano-page - Match Point Group</title>
        <meta
          property="og:title"
          content="Team-Mariano-page - Match Point Group"
        />
      </Helmet>
      <header data-role="Header" className="team-mariano-page-header">
        <div className="team-mariano-page-container1">
          <div className="team-mariano-page-menu">
            <div className="team-mariano-page-logo">
              <Link to="/" className="team-mariano-page-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="team-mariano-page-image"
                />
              </Link>
            </div>
            <div className="team-mariano-page-summary">
              <Link to="/home-summary" className="team-mariano-page-navlink1">
                01  SUMMARY
              </Link>
            </div>
            <div className="team-mariano-page-market">
              <Link to="/market" className="team-mariano-page-navlink2">
                02  MARKET
              </Link>
            </div>
            <div className="team-mariano-page-solution">
              <Link
                to="/solution-overview"
                className="team-mariano-page-navlink3"
              >
                03  SOLUTION
              </Link>
            </div>
            <div className="team-mariano-page-cma">
              <Link to="/cma" className="team-mariano-page-navlink4">
                04  CMA
              </Link>
            </div>
            <div className="team-mariano-page-financial">
              <Link to="/financial" className="team-mariano-page-navlink5">
                05  FINANCIAL
              </Link>
            </div>
            <div className="team-mariano-page-timeline">
              <Link to="/timeline" className="team-mariano-page-navlink6">
                06  TIMELINE
              </Link>
            </div>
            <div className="team-mariano-page-team">
              <Link to="/team" className="team-mariano-page-navlink7">
                07  TEAM
              </Link>
            </div>
            <div className="team-mariano-page-contact-us">
              <a
                href="mailto:hey@matchpointglobal.com?subject=Investment contact"
                className="team-mariano-page-link button"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="team-mariano-page-container2">
            <div className="team-mariano-page-container3">
              <div className="team-mariano-page-container4"></div>
              <div className="team-mariano-page-container5">
                <span className="team-mariano-page-text">Team</span>
              </div>
            </div>
            <div className="team-mariano-page-container6">
              <div className="team-mariano-page-foto">
                <a
                  href="https://www.linkedin.com/in/mariano-welch-3275b8128/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="team-mariano-page-link1"
                >
                  <img
                    alt="image"
                    src="/marian-li-200h.png"
                    className="team-mariano-page-image1"
                  />
                </a>
              </div>
              <div className="team-mariano-page-nombre">
                <div className="team-mariano-page-nombre1">
                  <a
                    href="https://www.linkedin.com/in/mariano-welch-3275b8128/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="team-mariano-page-link2"
                  >
                    Mariano Welch
                  </a>
                </div>
                <div className="team-mariano-page-cargo">
                  <span className="team-mariano-page-link3">
                    CEO &amp; Partner
                  </span>
                </div>
              </div>
            </div>
            <div className="team-mariano-page-container7">
              <span className="team-mariano-page-text01">
                <span>
                  Mariano is a media professional with more than 15 years of
                  experience. He has been product manager of the tennis vertical
                  for ESPN Latam for 5 years, in charge of live and studio TV,
                  and digital content.
                </span>
                <br></br>
                <br></br>
                <span>
                  Starting in 2019 and 2021 respectively, he accompanied both
                  the expansion of acquisitions with ATP, WTA and the Challenger
                  circuit, with a 200% increase in content, as well as the
                  convergence between cable TV and the streaming platform Star +
                  .
                </span>
                <br></br>
                <br></br>
                <span>
                  Both the expansion and the migration of ESPN Tennis were
                  successful thanks to the knowledge that the team led by
                  Mariano has of the audience and the tennis market, which
                  allowed tennis to become the second flagship sport for the
                  international signal, with a penetration of 47 % among viewers
                  and users.
                </span>
                <br></br>
                <br></br>
                <span>
                  In addition to the generation and management of onsite and
                  in-studio content, and service delivery to the audience, they
                  create activations and implement guidelines for sponsors
                  throughout the region.
                </span>
                <br></br>
                <br></br>
                <span>
                  He is also head of production at BBP, a North American
                  production company specializing in filming and content
                  generation in high mountains and complex terrain, where he has
                  led documentary projects in the Himalayas, film shoots with
                  teams of 150 people in the Andes, more than 4,000 meters high,
                  and various brands and platforms such as Netflix, Vix and GCN
                </span>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default TeamMarianoPage
