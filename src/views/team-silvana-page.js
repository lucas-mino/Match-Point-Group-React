import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './team-silvana-page.css'

const TeamSilvanaPage = (props) => {
  return (
    <div className="team-silvana-page-container">
      <Helmet>
        <title>Team-Silvana-page - Match Point Group</title>
        <meta
          property="og:title"
          content="Team-Silvana-page - Match Point Group"
        />
      </Helmet>
      <header data-role="Header" className="team-silvana-page-header">
        <div className="team-silvana-page-container1">
          <div className="team-silvana-page-menu">
            <div className="team-silvana-page-logo">
              <Link to="/" className="team-silvana-page-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="team-silvana-page-image"
                />
              </Link>
            </div>
            <div className="team-silvana-page-summary">
              <Link to="/home-summary" className="team-silvana-page-navlink1">
                01  SUMMARY
              </Link>
            </div>
            <div className="team-silvana-page-market">
              <Link to="/market" className="team-silvana-page-navlink2">
                02  MARKET
              </Link>
            </div>
            <div className="team-silvana-page-solution">
              <Link
                to="/solution-overview"
                className="team-silvana-page-navlink3"
              >
                03  SOLUTION
              </Link>
            </div>
            <div className="team-silvana-page-cma">
              <span className="team-silvana-page-text">04  CMA</span>
            </div>
            <div className="team-silvana-page-financial">
              <Link to="/financial" className="team-silvana-page-navlink4">
                05  FINANCIAL
              </Link>
            </div>
            <div className="team-silvana-page-timeline">
              <Link to="/timeline" className="team-silvana-page-navlink5">
                06  TIMELINE
              </Link>
            </div>
            <div className="team-silvana-page-team">
              <Link to="/team" className="team-silvana-page-navlink6">
                07  TEAM
              </Link>
            </div>
            <div className="team-silvana-page-contact-us">
              <button className="team-silvana-page-button button">
                CONTACT US
              </button>
            </div>
          </div>
          <div className="team-silvana-page-container2">
            <div className="team-silvana-page-container3">
              <div className="team-silvana-page-container4"></div>
              <div className="team-silvana-page-container5">
                <span className="team-silvana-page-text01">Team</span>
              </div>
            </div>
            <div className="team-silvana-page-container6">
              <div className="team-silvana-page-foto">
                <a
                  href="https://www.linkedin.com/in/silvana-laura-su%C3%A1rez-3882a529/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="team-silvana-page-link"
                >
                  <img
                    alt="image"
                    src="/china-200h.png"
                    className="team-silvana-page-image1"
                  />
                </a>
              </div>
              <div className="team-silvana-page-nombre">
                <div className="team-silvana-page-nombre1">
                  <a
                    href="https://www.linkedin.com/in/silvana-laura-su%C3%A1rez-3882a529/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="team-silvana-page-link1"
                  >
                    <span>Silvana Suarez</span>
                    <br></br>
                  </a>
                </div>
                <div className="team-silvana-page-cargo">
                  <span className="team-silvana-page-link2">COO</span>
                </div>
              </div>
            </div>
            <div className="team-silvana-page-container7">
              <span className="team-silvana-page-text04">
                <span>
                  Silvana is an experienced marketing professional who brings
                  over a decade of experience in business development,
                  marketing, communication, public relations, and sales. She
                  currently serves as the Marketing Director at Location3
                  Investments, a company focused on raising funds for real
                  estate product development in the US, with a track record of
                  $138M in equity and $500M in sales in 2022.
                </span>
                <br></br>
                <span> </span>
                <br></br>
                <span>
                  Her background in design, art, and real estate has provided
                  her with a comprehensive understanding of various industries,
                  enabling her to thrive in the traditional media industry.
                  Silvana was a key player in generating over $3 million in
                  advertising sales through her work in print media and managed
                  yearly accounts worth over $1 million for her PR Agency.
                </span>
                <br></br>
                <span> </span>
                <br></br>
                <span>
                  With her exceptional leadership and entrepreneurial spirit,
                  Silvana is well-equipped to guide startups to reach their full
                  potential. She is a graduate of the Venture Capital Executive
                  Program at Universidad del San Andres, Argentina, and
                  currently leads The Wolf Pack, a startup accelerator where she
                  works closely with entrepreneurs to help them take their
                  projects to the next level.
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default TeamSilvanaPage
