import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './timeline.css'

const Timeline = (props) => {
  return (
    <div className="timeline-container">
      <Helmet>
        <title>Timeline - Match Point Group</title>
        <meta property="og:title" content="Timeline - Match Point Group" />
      </Helmet>
      <header data-role="Header" className="timeline-header">
        <div className="timeline-container1">
          <div className="timeline-menu">
            <div className="timeline-logo">
              <Link to="/" className="timeline-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="timeline-image"
                />
              </Link>
            </div>
            <div className="timeline-summary">
              <Link to="/home-summary" className="timeline-navlink1">
                01  SUMMARY
              </Link>
            </div>
            <div className="timeline-market">
              <Link to="/market" className="timeline-navlink2">
                02  MARKET
              </Link>
            </div>
            <div className="timeline-solution">
              <Link to="/solution-overview" className="timeline-navlink3">
                03  SOLUTION
              </Link>
            </div>
            <div className="timeline-cma">
              <span className="timeline-text">04  CMA</span>
            </div>
            <div className="timeline-financial">
              <Link to="/financial" className="timeline-navlink4">
                05  FINANCIAL
              </Link>
            </div>
            <div className="timeline-timeline">
              <Link to="/timeline" className="timeline-navlink5">
                06  TIMELINE
              </Link>
            </div>
            <div className="timeline-team">
              <Link to="/team" className="timeline-navlink6">
                07  TEAM
              </Link>
            </div>
            <div className="timeline-contact-us">
              <button className="timeline-button button">CONTACT US</button>
            </div>
          </div>
          <div className="timeline-container2">
            <div className="timeline-container3">
              <div className="timeline-container4"></div>
              <div className="timeline-container5">
                <span className="timeline-text1">Timeline</span>
              </div>
            </div>
            <div className="timeline-container6">
              <div className="timeline-container7">
                <span className="timeline-text2">
                  Our road will be long, but that&apos;s how it begins 🚀
                </span>
              </div>
              <div className="timeline-container8">
                <img
                  alt="timeline"
                  src="/sin%20ti%CC%81tulo-1-600h.jpg"
                  loading="lazy"
                  className="timeline-image1"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Timeline
