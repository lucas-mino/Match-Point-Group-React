import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './cma.css'

const CMA = (props) => {
  return (
    <div className="cma-container">
      <Helmet>
        <title>CMA - Match Point Group</title>
        <meta property="og:title" content="CMA - Match Point Group" />
      </Helmet>
      <header data-role="Header" className="cma-header">
        <div className="cma-container1">
          <div className="cma-menu">
            <div className="cma-logo">
              <Link to="/" className="cma-navlink">
                <img alt="logo" src="/logomp-1500h.png" className="cma-image" />
              </Link>
            </div>
            <div className="cma-summary">
              <Link to="/home-summary" className="cma-navlink1">
                01  SUMMARY
              </Link>
            </div>
            <div className="cma-market">
              <Link to="/market" className="cma-navlink2">
                02  MARKET
              </Link>
            </div>
            <div className="cma-solution">
              <Link to="/solution-overview" className="cma-navlink3">
                03  SOLUTION
              </Link>
            </div>
            <div className="cma-cma">
              <span className="cma-text">04  CMA</span>
            </div>
            <div className="cma-financial">
              <Link to="/financial" className="cma-navlink4">
                05  FINANCIAL
              </Link>
            </div>
            <div className="cma-timeline">
              <Link to="/timeline" className="cma-navlink5">
                06  TIMELINE
              </Link>
            </div>
            <div className="cma-team">
              <Link to="/team" className="cma-navlink6">
                07  TEAM
              </Link>
            </div>
            <div className="cma-contact-us">
              <a
                href="mailto:hey@matchpointglobal.com?subject=Investment contact"
                className="cma-link button"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="cma-container2">
            <div className="cma-container3">
              <div className="cma-container4"></div>
              <div className="cma-container5">
                <span className="cma-text1">CMA</span>
              </div>
            </div>
            <div className="cma-container6">
              <div className="cma-container7">
                <img
                  alt="image"
                  src="/cma-700h.png"
                  loading="lazy"
                  className="cma-image1"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default CMA
