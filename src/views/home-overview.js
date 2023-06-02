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
              <span className="home-overview-text1">04  CMA</span>
            </div>
            <div className="home-overview-financial">
              <Link to="/financial" className="home-overview-navlink03">
                05  FINANCIAL
              </Link>
            </div>
            <div className="home-overview-timeline">
              <Link to="/timeline" className="home-overview-navlink04">
                06  TIMELINE
              </Link>
            </div>
            <div className="home-overview-team">
              <Link to="/team" className="home-overview-navlink05">
                07  TEAM
              </Link>
            </div>
            <div className="home-overview-contact-us">
              <button className="home-overview-button button">
                CONTACT US
              </button>
            </div>
          </div>
          <div className="home-overview-container02">
            <div className="home-overview-container03">
              <div className="home-overview-container04">
                <span className="home-overview-text2">PRODUCT OVERVIEW</span>
              </div>
              <div className="home-overview-container05">
                <span className="home-overview-text3">Summary</span>
              </div>
            </div>
            <div className="home-overview-container06">
              <img
                alt="image"
                src="/summary1-600h.png"
                className="home-overview-image1"
              />
            </div>
            <div className="home-overview-container07">
              <div className="home-overview-container08">
                <Link to="/home-summary" className="home-overview-navlink06">
                  INTRO
                </Link>
              </div>
              <div className="home-overview-container09">
                <Link to="/home-project" className="home-overview-navlink07">
                  | PROJECT |
                </Link>
              </div>
              <div className="home-overview-container10">
                <Link to="/home-overview" className="home-overview-navlink08">
                  PRODUCT OVERVIEW
                </Link>
              </div>
              <div className="home-overview-container11">
                <Link to="/home-features" className="home-overview-navlink09">
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
