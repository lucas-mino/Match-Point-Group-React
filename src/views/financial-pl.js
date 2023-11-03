import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './financial-pl.css'

const FinancialPl = (props) => {
  return (
    <div className="financial-pl-container">
      <Helmet>
        <title>Financial-pl - Match Point Group</title>
        <meta property="og:title" content="Financial-pl - Match Point Group" />
      </Helmet>
      <header data-role="Header" className="financial-pl-header">
        <div className="financial-pl-container1">
          <div className="financial-pl-menu">
            <div className="financial-pl-logo">
              <Link to="/" className="financial-pl-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="financial-pl-image"
                />
              </Link>
            </div>
            <div className="financial-pl-summary">
              <Link to="/home-summary" className="financial-pl-navlink1">
                01  SUMMARY
              </Link>
            </div>
            <div className="financial-pl-market">
              <Link to="/market" className="financial-pl-navlink2">
                02  MARKET
              </Link>
            </div>
            <div className="financial-pl-solution">
              <Link to="/solution-overview" className="financial-pl-navlink3">
                03  SOLUTION
              </Link>
            </div>
            <div className="financial-pl-cma">
              <Link to="/cma" className="financial-pl-navlink4">
                04  CMA
              </Link>
            </div>
            <div className="financial-pl-financial">
              <span className="financial-pl-text">05  FINANCIAL</span>
            </div>
            <div className="financial-pl-timeline">
              <Link to="/timeline" className="financial-pl-navlink5">
                06  TIMELINE
              </Link>
            </div>
            <div className="financial-pl-team">
              <Link to="/team" className="financial-pl-navlink6">
                07  TEAM
              </Link>
            </div>
            <div className="financial-pl-contact-us">
              <a
                href="mailto:hey@matchpointglobal.com?subject=Investment contact"
                className="financial-pl-link button"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="financial-pl-container2">
            <div className="financial-pl-container3">
              <div className="financial-pl-container4">
                <span className="financial-pl-text1">
                  <span>P&amp;L </span>
                  <br></br>
                </span>
              </div>
              <div className="financial-pl-container5">
                <span className="financial-pl-text4">Financial</span>
              </div>
            </div>
            <div className="financial-pl-container6">
              <img
                alt="image"
                src="/p-l-1000w.png"
                className="financial-pl-image1"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default FinancialPl
