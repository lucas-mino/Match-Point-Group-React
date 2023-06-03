import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './blank.css'

const Blank = (props) => {
  return (
    <div className="blank-container">
      <Helmet>
        <title>blank - Match Point Group</title>
        <meta property="og:title" content="blank - Match Point Group" />
      </Helmet>
      <header data-role="Header" className="blank-header">
        <div className="blank-container1">
          <div className="blank-menu">
            <div className="blank-logo">
              <img alt="logo" src="/logomp-1500h.png" className="blank-image" />
            </div>
            <div className="blank-summary">
              <span className="blank-text">01  SUMMARY</span>
            </div>
            <div className="blank-market">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="blank-link"
              >
                02  MARKET
              </a>
            </div>
            <div className="blank-solution">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="blank-link1"
              >
                03  SOLUTION
              </a>
            </div>
            <div className="blank-cma">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="blank-link2"
              >
                04  CMA
              </a>
            </div>
            <div className="blank-financial">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="blank-link3"
              >
                05  FINANCIAL
              </a>
            </div>
            <div className="blank-timeline">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="blank-link4"
              >
                06  TIMELINE
              </a>
            </div>
            <div className="blank-team">
              <Link to="/team" className="blank-navlink">
                07  TEAM
              </Link>
            </div>
            <div className="blank-contact-us">
              <button className="blank-button button">CONTACT US</button>
            </div>
          </div>
          <div className="blank-container2">
            <div className="blank-container3">
              <div className="blank-container4"></div>
              <div className="blank-container5">
                <span className="blank-text1">Team</span>
              </div>
            </div>
            <div className="blank-container6"></div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Blank
