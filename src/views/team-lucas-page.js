import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './team-lucas-page.css'

const TeamLucasPage = (props) => {
  return (
    <div className="team-lucas-page-container">
      <Helmet>
        <title>Team-Lucas-page - Match Point Group</title>
        <meta
          property="og:title"
          content="Team-Lucas-page - Match Point Group"
        />
      </Helmet>
      <header data-role="Header" className="team-lucas-page-header">
        <div className="team-lucas-page-container1">
          <div className="team-lucas-page-menu">
            <div className="team-lucas-page-logo">
              <Link to="/" className="team-lucas-page-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="team-lucas-page-image"
                />
              </Link>
            </div>
            <div className="team-lucas-page-summary">
              <Link to="/home-summary" className="team-lucas-page-link">
                01  SUMMARY
              </Link>
            </div>
            <div className="team-lucas-page-market">
              <Link to="/market" className="team-lucas-page-navlink1">
                02  MARKET
              </Link>
            </div>
            <div className="team-lucas-page-solution">
              <Link
                to="/solution-overview"
                className="team-lucas-page-navlink2"
              >
                03  SOLUTION
              </Link>
            </div>
            <div className="team-lucas-page-cma">
              <Link to="/cma" className="team-lucas-page-navlink3">
                04  CMA
              </Link>
            </div>
            <div className="team-lucas-page-financial">
              <Link to="/financial" className="team-lucas-page-navlink4">
                05  FINANCIAL
              </Link>
            </div>
            <div className="team-lucas-page-timeline">
              <Link to="/timeline" className="team-lucas-page-navlink5">
                06  TIMELINE
              </Link>
            </div>
            <div className="team-lucas-page-team">
              <Link to="/team" className="team-lucas-page-navlink6">
                07  TEAM
              </Link>
            </div>
            <div className="team-lucas-page-contact-us">
              <a
                href="mailto:hey@matchpointglobal.com?subject=Investment contact"
                className="team-lucas-page-link1 button"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="team-lucas-page-container2">
            <div className="team-lucas-page-container3">
              <div className="team-lucas-page-container4"></div>
              <div className="team-lucas-page-container5">
                <span className="team-lucas-page-text">Team</span>
              </div>
            </div>
            <div className="team-lucas-page-container6">
              <div className="team-lucas-page-foto">
                <img
                  alt="image"
                  src="/lucas-li-200h.png"
                  className="team-lucas-page-image1"
                />
              </div>
              <div className="team-lucas-page-nombre">
                <div className="team-lucas-page-nombre1">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="team-lucas-page-link2"
                  >
                    <span>Lucas Miño</span>
                    <br></br>
                  </a>
                </div>
                <div className="team-lucas-page-cargo">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="team-lucas-page-link3"
                  >
                    <span>CCO </span>
                    <span>&amp; Partner</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-lucas-page-container7">
              <span className="team-lucas-page-text05">
                <span>
                  Lucas is a technology expert with more than 15 years of
                  experience developing digital products and managing
                  high-performance agile teams, with more than 50 digital
                  products developed throughout his career.
                </span>
                <br></br>
                <br></br>
                <span>
                  Graduated from the Universidad Argentina de la Empresa and
                  later from the University of Palermo and with more than 100
                  projects implemented, he has multiple tools to evaluate,
                  approach, understand and develop technological projects of any
                  nature.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  In 2015, he was one of those responsible for transforming the
                  development team of a major bank in Argentina, with more than
                  20 teams formed and 10 relaunched products. In 2016 he
                  co-founded XOOLIX, a technology services company focused on
                  business transformation from technology. Since that year he
                  has participated in the transformation of several companies in
                  which XOOLIX provides services.
                </span>
                <br></br>
                <br></br>
                <span>
                  XOOLIX has a presence in many industries in America and has
                  offices in Argentina and Uruguay. Lucas is the CEO.
                </span>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default TeamLucasPage
