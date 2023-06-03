import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home-overview.css'

const HomeOverview = (props) => {
  return (
    <div className="home-overview-container">
      <Helmet>
        <title>Home-overview - Match Point Group</title>
        <meta property="og:title" content="Home-overview - Match Point Group" />
      </Helmet>
      <header data-role="Header" className="home-overview-header">
        <div className="home-overview-container01">
          <div className="home-overview-menu">
            <div className="home-overview-logo">
              <Link to="/" className="home-overview-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="home-overview-image"
                />
              </Link>
            </div>
            <div className="home-overview-summary">
              <Link to="/home-summary" className="home-overview-navlink01">
                01  SUMMARY
              </Link>
            </div>
            <div className="home-overview-market">
              <Link to="/market" className="home-overview-navlink02">
                02  MARKET
              </Link>
            </div>
            <div className="home-overview-solution">
              <span className="home-overview-text">03  SOLUTION</span>
            </div>
            <div className="home-overview-cma">
              <Link to="/cma" className="home-overview-navlink03">
                04  CMA
              </Link>
            </div>
            <div className="home-overview-financial">
              <Link to="/financial" className="home-overview-navlink04">
                05  FINANCIAL
              </Link>
            </div>
            <div className="home-overview-timeline">
              <Link to="/timeline" className="home-overview-navlink05">
                06  TIMELINE
              </Link>
            </div>
            <div className="home-overview-team">
              <Link to="/team" className="home-overview-navlink06">
                07  TEAM
              </Link>
            </div>
            <div className="home-overview-contact-us">
              <a
                href="mailto:hey@matchpointglobal.com?subject=Investment contact"
                className="home-overview-link button"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="home-overview-container02">
            <div className="home-overview-container03">
              <div className="home-overview-container04">
                <span className="home-overview-text1">PRODUCT OVERVIEW</span>
              </div>
              <div className="home-overview-container05">
                <span className="home-overview-text2">Summary</span>
              </div>
            </div>
            <div className="home-overview-container06">
              <img
                alt="image"
                src="/summary-1000w.png"
                className="home-overview-image1"
              />
            </div>
            <div className="home-overview-container07">
              <div className="home-overview-container08">
                <Link to="/home-summary" className="home-overview-navlink07">
                  INTRO
                </Link>
              </div>
              <div className="home-overview-container09">
                <Link to="/home-project" className="home-overview-navlink08">
                  | PROJECT |
                </Link>
              </div>
              <div className="home-overview-container10">
                <Link to="/home-overview" className="home-overview-navlink09">
                  PRODUCT OVERVIEW
                </Link>
              </div>
              <div className="home-overview-container11">
                <Link to="/home-features" className="home-overview-navlink10">
                  | FEATURES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default HomeOverview
