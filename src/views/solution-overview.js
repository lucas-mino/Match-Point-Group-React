import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './solution-overview.css'

const SolutionOverview = (props) => {
  return (
    <div className="solution-overview-container">
      <Helmet>
        <title>Solution-overview - Match Point Group</title>
        <meta
          property="og:title"
          content="Solution-overview - Match Point Group"
        />
      </Helmet>
      <header data-role="Header" className="solution-overview-header">
        <div className="solution-overview-container01">
          <div className="solution-overview-menu">
            <div className="solution-overview-logo">
              <Link to="/" className="solution-overview-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="solution-overview-image"
                />
              </Link>
            </div>
            <div className="solution-overview-summary">
              <Link to="/home-summary" className="solution-overview-navlink1">
                01  SUMMARY
              </Link>
            </div>
            <div className="solution-overview-market">
              <Link to="/market" className="solution-overview-navlink2">
                02  MARKET
              </Link>
            </div>
            <div className="solution-overview-solution">
              <span className="solution-overview-text">03  SOLUTION</span>
            </div>
            <div className="solution-overview-cma">
              <span className="solution-overview-text1">04  CMA</span>
            </div>
            <div className="solution-overview-financial">
              <Link to="/financial" className="solution-overview-navlink3">
                05  FINANCIAL
              </Link>
            </div>
            <div className="solution-overview-timeline">
              <Link to="/timeline" className="solution-overview-navlink4">
                06  TIMELINE
              </Link>
            </div>
            <div className="solution-overview-team">
              <Link to="/team" className="solution-overview-navlink5">
                07  TEAM
              </Link>
            </div>
            <div className="solution-overview-contact-us">
              <a
                href="mailto:hey@matchpointglobal.com?subject=Investment contact"
                className="solution-overview-link button"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="solution-overview-container02">
            <div className="solution-overview-container03">
              <div className="solution-overview-container04">
                <span className="solution-overview-text2">
                  <span>OVERVIEW</span>
                  <br></br>
                </span>
              </div>
              <div className="solution-overview-container05">
                <span className="solution-overview-text5">Summary</span>
              </div>
            </div>
            <div className="solution-overview-container06">
              <img
                alt="image"
                src="/solution-600h.jpg"
                className="solution-overview-image1"
              />
            </div>
            <div className="solution-overview-container07">
              <div className="solution-overview-container08">
                <span className="solution-overview-text6">OVERVIEW</span>
              </div>
              <div className="solution-overview-container09">
                <Link
                  to="/solution-prototypes"
                  className="solution-overview-navlink6"
                >
                  |  PROTOTYPES
                </Link>
              </div>
              <div className="solution-overview-container10">
                <Link
                  to="/solution-stack"
                  className="solution-overview-navlink7"
                >
                  |  STACK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default SolutionOverview
