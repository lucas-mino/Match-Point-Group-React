import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './financial-cash-flow.css'

const FinancialCashFlow = (props) => {
  return (
    <div className="financial-cash-flow-container">
      <Helmet>
        <title>Financial-cash-flow - Match Point Group</title>
        <meta
          property="og:title"
          content="Financial-cash-flow - Match Point Group"
        />
      </Helmet>
      <header data-role="Header" className="financial-cash-flow-header">
        <div className="financial-cash-flow-container01">
          <div className="financial-cash-flow-menu">
            <div className="financial-cash-flow-logo">
              <Link to="/" className="financial-cash-flow-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="financial-cash-flow-image"
                />
              </Link>
            </div>
            <div className="financial-cash-flow-summary">
              <Link to="/home-summary" className="financial-cash-flow-navlink1">
                01  SUMMARY
              </Link>
            </div>
            <div className="financial-cash-flow-market">
              <Link to="/market" className="financial-cash-flow-navlink2">
                02  MARKET
              </Link>
            </div>
            <div className="financial-cash-flow-solution">
              <Link
                to="/solution-overview"
                className="financial-cash-flow-navlink3"
              >
                03  SOLUTION
              </Link>
            </div>
            <div className="financial-cash-flow-cma">
              <Link to="/cma" className="financial-cash-flow-navlink4">
                04  CMA
              </Link>
            </div>
            <div className="financial-cash-flow-financial">
              <span className="financial-cash-flow-text">05  FINANCIAL</span>
            </div>
            <div className="financial-cash-flow-timeline">
              <Link to="/timeline" className="financial-cash-flow-navlink5">
                06  TIMELINE
              </Link>
            </div>
            <div className="financial-cash-flow-team">
              <Link to="/team" className="financial-cash-flow-navlink6">
                07  TEAM
              </Link>
            </div>
            <div className="financial-cash-flow-contact-us">
              <a
                href="mailto:hey@matchpointglobal.com?subject=Investment contact"
                className="financial-cash-flow-link button"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="financial-cash-flow-container02">
            <div className="financial-cash-flow-container03">
              <div className="financial-cash-flow-container04">
                <span className="financial-cash-flow-text01">
                  <span>Cash Flow</span>
                  <br></br>
                </span>
              </div>
              <div className="financial-cash-flow-container05">
                <span className="financial-cash-flow-text04">Financial</span>
              </div>
            </div>
            <div className="financial-cash-flow-container06">
              <img
                alt="image"
                src="/cashflow-600h.png"
                className="financial-cash-flow-image1"
              />
            </div>
            <div className="financial-cash-flow-container07">
              <div className="financial-cash-flow-container08">
                <Link to="/financial" className="financial-cash-flow-navlink7">
                  P&amp;L  |
                </Link>
              </div>
              <div className="financial-cash-flow-container09">
                <Link
                  to="/financial-investment"
                  className="financial-cash-flow-navlink8"
                >
                  <span className="financial-cash-flow-text05">
                    INVESTMENT   |
                  </span>
                  <br className="financial-cash-flow-text06"></br>
                </Link>
              </div>
              <div className="financial-cash-flow-container10">
                <span className="financial-cash-flow-text07">
                  <span>CASH FLOW</span>
                  <br></br>
                </span>
              </div>
              <div className="financial-cash-flow-container11"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default FinancialCashFlow
