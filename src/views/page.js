import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Match Point Group</title>
        <meta property="og:title" content="Page - Match Point Group" />
      </Helmet>
      <header data-role="Header" className="page-header">
        <div className="page-container1">
          <div className="page-menu">
            <div className="page-logo">
              <img alt="logo" src="/logomp-1500h.png" className="page-image" />
            </div>
            <div className="page-summary">
              <Link to="/page" className="page-navlink">
                01  SUMMARY
              </Link>
            </div>
            <div className="page-market">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link"
              >
                02  MARKET
              </a>
            </div>
            <div className="page-solution">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link1"
              >
                03  SOLUTION
              </a>
            </div>
            <div className="page-cma">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link2"
              >
                04  CMA
              </a>
            </div>
            <div className="page-financial">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link3"
              >
                05  FINANCIAL
              </a>
            </div>
            <div className="page-timeline">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link4"
              >
                06  TIMELINE
              </a>
            </div>
            <div className="page-team">
              <Link to="/team" className="page-navlink1">
                07  TEAM
              </Link>
            </div>
            <div className="page-contact-us">
              <button className="page-button button">CONTACT US</button>
            </div>
          </div>
          <div className="page-container2">
            <div className="page-container3">
              <div className="page-container4"></div>
              <div className="page-container5">
                <span className="page-text">Team</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Page
