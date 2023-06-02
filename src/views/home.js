import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Match Point Group</title>
        <meta property="og:title" content="Match Point Group" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <div className="home-container1">
          <div className="home-menu">
            <div className="home-logo">
              <Link to="/" className="home-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="home-image"
                />
              </Link>
            </div>
            <div className="home-summary">
              <Link to="/home-summary" className="home-navlink1">
                01  SUMMARY
              </Link>
            </div>
            <div className="home-market">
              <Link to="/market" className="home-navlink2">
                02  MARKET
              </Link>
            </div>
            <div className="home-solution">
              <Link to="/solution-overview" className="home-navlink3">
                03  SOLUTION
              </Link>
            </div>
            <div className="home-cma">
              <span className="home-text">04  CMA</span>
            </div>
            <div className="home-financial">
              <Link to="/financial" className="home-navlink4">
                05  FINANCIAL
              </Link>
            </div>
            <div className="home-timeline">
              <Link to="/timeline" className="home-navlink5">
                06  TIMELINE
              </Link>
            </div>
            <div className="home-team">
              <Link to="/team" className="home-navlink6">
                07  TEAM
              </Link>
            </div>
            <div className="home-contact-us">
              <a
                href="mailto:hey@matchpointglobal.com?subject=Investment contact"
                className="home-link button"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="home-container2">
            <div className="home-container3">
              <Link to="/home-summary" className="home-navlink7">
                <img
                  alt="image"
                  src="/logomp-1500h.png"
                  loading="lazy"
                  className="home-image1"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Home
