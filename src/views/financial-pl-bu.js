import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './financial-pl-bu.css'

const FinancialPlBu = (props) => {
  return (
    <div className="financial-pl-bu-container">
      <Helmet>
        <title>Financial-pl-bu - Match Point Group</title>
        <meta
          property="og:title"
          content="Financial-pl-bu - Match Point Group"
        />
      </Helmet>
      <header data-role="Header" className="financial-pl-bu-header">
        <div className="financial-pl-bu-container01">
          <div className="financial-pl-bu-menu">
            <div className="financial-pl-bu-logo">
              <Link to="/" className="financial-pl-bu-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="financial-pl-bu-image"
                />
              </Link>
            </div>
            <div className="financial-pl-bu-summary">
              <Link to="/home-summary" className="financial-pl-bu-navlink1">
                01  SUMMARY
              </Link>
            </div>
            <div className="financial-pl-bu-market">
              <Link to="/market" className="financial-pl-bu-navlink2">
                02  MARKET
              </Link>
            </div>
            <div className="financial-pl-bu-solution">
              <Link
                to="/solution-overview"
                className="financial-pl-bu-navlink3"
              >
                03  SOLUTION
              </Link>
            </div>
            <div className="financial-pl-bu-cma">
              <Link to="/cma" className="financial-pl-bu-navlink4">
                04  CMA
              </Link>
            </div>
            <div className="financial-pl-bu-financial">
              <span className="financial-pl-bu-text">05  FINANCIAL</span>
            </div>
            <div className="financial-pl-bu-timeline">
              <Link to="/timeline" className="financial-pl-bu-navlink5">
                06  TIMELINE
              </Link>
            </div>
            <div className="financial-pl-bu-team">
              <Link to="/team" className="financial-pl-bu-navlink6">
                07  TEAM
              </Link>
            </div>
            <div className="financial-pl-bu-contact-us">
              <a
                href="mailto:hey@matchpointglobal.com?subject=Investment contact"
                className="financial-pl-bu-link button"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="financial-pl-bu-container02">
            <div className="financial-pl-bu-container03">
              <div className="financial-pl-bu-container04">
                <span className="financial-pl-bu-text01">
                  <span>P&amp;L </span>
                  <br></br>
                </span>
              </div>
              <div className="financial-pl-bu-container05">
                <span className="financial-pl-bu-text04">Financial</span>
              </div>
            </div>
            <div className="financial-pl-bu-container06">
              <img
                alt="image"
                src="/pyl-1000w.png"
                className="financial-pl-bu-image1"
              />
            </div>
            <div className="financial-pl-bu-container07">
              <div className="financial-pl-bu-container08">
                <span className="financial-pl-bu-text05">P&amp;L</span>
              </div>
              <div className="financial-pl-bu-container09">
                <Link
                  to="/financial-investment"
                  className="financial-pl-bu-navlink7"
                >
                  <span>I  INVESTMENT</span>
                  <br></br>
                </Link>
              </div>
              <div className="financial-pl-bu-container10">
                <Link
                  to="/financial-cash-flow"
                  className="financial-pl-bu-navlink8"
                >
                  <span>|   CASH FLOW</span>
                  <br></br>
                </Link>
              </div>
              <div className="financial-pl-bu-container11"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default FinancialPlBu
