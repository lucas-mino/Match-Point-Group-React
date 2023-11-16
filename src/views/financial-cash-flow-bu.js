import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './financial-cash-flow-bu.css'

const FinancialCashFlowBU = (props) => {
  return (
    <div className="financial-cash-flow-bu-container">
      <Helmet>
        <title>Financial-cash-flowBU - Match Point Group</title>
        <meta
          property="og:title"
          content="Financial-cash-flowBU - Match Point Group"
        />
      </Helmet>
      <header data-role="Header" className="financial-cash-flow-bu-header">
        <div className="financial-cash-flow-bu-container01">
          <div className="financial-cash-flow-bu-menu">
            <div className="financial-cash-flow-bu-logo">
              <Link to="/" className="financial-cash-flow-bu-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="financial-cash-flow-bu-image"
                />
              </Link>
            </div>
            <div className="financial-cash-flow-bu-summary">
              <Link
                to="/home-summary"
                className="financial-cash-flow-bu-navlink1"
              >
                01  SUMMARY
              </Link>
            </div>
            <div className="financial-cash-flow-bu-market">
              <Link to="/market" className="financial-cash-flow-bu-navlink2">
                02  MARKET
              </Link>
            </div>
            <div className="financial-cash-flow-bu-solution">
              <Link
                to="/solution-overview"
                className="financial-cash-flow-bu-navlink3"
              >
                03  SOLUTION
              </Link>
            </div>
            <div className="financial-cash-flow-bu-cma">
              <Link to="/cma" className="financial-cash-flow-bu-navlink4">
                04  CMA
              </Link>
            </div>
            <div className="financial-cash-flow-bu-financial">
              <span className="financial-cash-flow-bu-text">05  FINANCIAL</span>
            </div>
            <div className="financial-cash-flow-bu-timeline">
              <Link to="/timeline" className="financial-cash-flow-bu-navlink5">
                06  TIMELINE
              </Link>
            </div>
            <div className="financial-cash-flow-bu-team">
              <Link to="/team" className="financial-cash-flow-bu-navlink6">
                07  TEAM
              </Link>
            </div>
            <div className="financial-cash-flow-bu-contact-us">
              <a
                href="mailto:hey@matchpointglobal.com?subject=Investment contact"
                className="financial-cash-flow-bu-link button"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="financial-cash-flow-bu-container02">
            <div className="financial-cash-flow-bu-container03">
              <div className="financial-cash-flow-bu-container04">
                <span className="financial-cash-flow-bu-text01">
                  <span>Cash Flow</span>
                  <br></br>
                </span>
              </div>
              <div className="financial-cash-flow-bu-container05">
                <span className="financial-cash-flow-bu-text04">Financial</span>
              </div>
            </div>
            <div className="financial-cash-flow-bu-container06">
              <img
                alt="image"
                src="/cashflow-600h.png"
                className="financial-cash-flow-bu-image1"
              />
            </div>
            <div className="financial-cash-flow-bu-container07">
              <div className="financial-cash-flow-bu-container08">
                <Link
                  to="/financial"
                  className="financial-cash-flow-bu-navlink7"
                >
                  P&amp;L  |
                </Link>
              </div>
              <div className="financial-cash-flow-bu-container09">
                <Link
                  to="/financial-investment"
                  className="financial-cash-flow-bu-navlink8"
                >
                  <span className="financial-cash-flow-bu-text05">
                    INVESTMENT   |
                  </span>
                  <br className="financial-cash-flow-bu-text06"></br>
                </Link>
              </div>
              <div className="financial-cash-flow-bu-container10">
                <span className="financial-cash-flow-bu-text07">
                  <span>CASH FLOW</span>
                  <br></br>
                </span>
              </div>
              <div className="financial-cash-flow-bu-container11"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default FinancialCashFlowBU
