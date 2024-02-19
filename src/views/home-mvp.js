import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home-mvp.css'

const HomeMvp = (props) => {
  return (
    <div className="home-mvp-container">
      <Helmet>
        <title>Home-mvp - Match Point Group</title>
        <meta property="og:title" content="Home-mvp - Match Point Group" />
      </Helmet>
      <header data-role="Header" className="home-mvp-header">
        <div className="home-mvp-container01">
          <div className="home-mvp-menu">
            <div className="home-mvp-logo">
              <Link to="/" className="home-mvp-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="home-mvp-image"
                />
              </Link>
            </div>
            <div className="home-mvp-summary">
              <Link to="/home-summary" className="home-mvp-navlink01">
                01  SUMMARY
              </Link>
            </div>
            <div className="home-mvp-market">
              <Link to="/market" className="home-mvp-navlink02">
                02  MARKET
              </Link>
            </div>
            <div className="home-mvp-solution">
              <Link to="/solution-overview" className="home-mvp-navlink03">
                03  SOLUTION
              </Link>
            </div>
            <div className="home-mvp-cma">
              <Link to="/cma" className="home-mvp-navlink04">
                04  CMA
              </Link>
            </div>
            <div className="home-mvp-financial">
              <Link to="/financial" className="home-mvp-navlink05">
                05  FINANCIAL
              </Link>
            </div>
            <div className="home-mvp-timeline">
              <Link to="/timeline" className="home-mvp-navlink06">
                06  TIMELINE
              </Link>
            </div>
            <div className="home-mvp-team">
              <Link to="/team" className="home-mvp-navlink07">
                07  TEAM
              </Link>
            </div>
            <div className="home-mvp-contact-us">
              <a
                href="mailto:hey@matchpointglobal.com?subject=Investment contact"
                className="home-mvp-link button"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="home-mvp-container02">
            <div className="home-mvp-container03">
              <div className="home-mvp-container04">
                <span className="home-mvp-text">MVP</span>
              </div>
              <div className="home-mvp-container05">
                <span className="home-mvp-text1">Summary</span>
              </div>
            </div>
            <div className="home-mvp-container06">
              <div className="home-mvp-container07">
                <img
                  alt="image"
                  src="/mvp-1000w.png"
                  className="home-mvp-image1"
                />
              </div>
            </div>
            <div className="home-mvp-container08">
              <div className="home-mvp-container09">
                <Link to="/home-summary" className="home-mvp-navlink08">
                  INTRO
                </Link>
              </div>
              <div className="home-mvp-container10">
                <Link to="/home-project" className="home-mvp-navlink09">
                  <span>|</span>
                  <span> PROJECT</span>
                </Link>
              </div>
              <div className="home-mvp-container11">
                <Link to="/home-overview" className="home-mvp-navlink10">
                  | PRODUCT OVERVIEW
                </Link>
              </div>
              <div className="home-mvp-container12">
                <Link to="/home-features" className="home-mvp-navlink11">
                  | FEATURES |
                </Link>
              </div>
              <div className="home-mvp-container13">
                <Link to="/home-mvp" className="home-mvp-navlink12">
                  MVP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default HomeMvp
