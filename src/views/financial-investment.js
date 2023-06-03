import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './financial-investment.css'

const FinancialInvestment = (props) => {
  return (
    <div className="financial-investment-container">
      <Helmet>
        <title>Financial-investment - Match Point Group</title>
        <meta
          property="og:title"
          content="Financial-investment - Match Point Group"
        />
      </Helmet>
      <header data-role="Header" className="financial-investment-header">
        <div className="financial-investment-container01">
          <div className="financial-investment-menu">
            <div className="financial-investment-logo">
              <Link to="/" className="financial-investment-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="financial-investment-image"
                />
              </Link>
            </div>
            <div className="financial-investment-summary">
              <Link
                to="/home-summary"
                className="financial-investment-navlink1"
              >
                01  SUMMARY
              </Link>
            </div>
            <div className="financial-investment-market">
              <Link to="/market" className="financial-investment-navlink2">
                02  MARKET
              </Link>
            </div>
            <div className="financial-investment-solution">
              <Link
                to="/solution-overview"
                className="financial-investment-navlink3"
              >
                03  SOLUTION
              </Link>
            </div>
            <div className="financial-investment-cma">
              <Link to="/cma" className="financial-investment-navlink4">
                04  CMA
              </Link>
            </div>
            <div className="financial-investment-financial">
              <span className="financial-investment-text">05  FINANCIAL</span>
            </div>
            <div className="financial-investment-timeline">
              <Link to="/timeline" className="financial-investment-navlink5">
                06  TIMELINE
              </Link>
            </div>
            <div className="financial-investment-team">
              <Link to="/team" className="financial-investment-navlink6">
                07  TEAM
              </Link>
            </div>
            <div className="financial-investment-contact-us">
              <a
                href="mailto:hey@matchpointglobal.com?subject=Investment contact"
                className="financial-investment-link button"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="financial-investment-container02">
            <div className="financial-investment-container03">
              <div className="financial-investment-container04">
                <span className="financial-investment-text01">
                  <span>Investment</span>
                  <br></br>
                </span>
              </div>
              <div className="financial-investment-container05">
                <span className="financial-investment-text04">Financial</span>
              </div>
            </div>
            <div className="financial-investment-container06">
              <img
                alt="image"
                src="/invest-600h.jpg"
                className="financial-investment-image1"
              />
            </div>
            <div className="financial-investment-container07">
              <div className="financial-investment-container08">
                <Link to="/financial" className="financial-investment-navlink7">
                  P&amp;L  |
                </Link>
              </div>
              <div className="financial-investment-container09">
                <span className="financial-investment-text05">
                  <span>INVESTMENT</span>
                  <br></br>
                </span>
              </div>
              <div className="financial-investment-container10">
                <Link
                  to="/financial-cash-flow"
                  className="financial-investment-navlink8"
                >
                  <span>|   CASH FLOW</span>
                  <br></br>
                </Link>
              </div>
              <div className="financial-investment-container11"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default FinancialInvestment
