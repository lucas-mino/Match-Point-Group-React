import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './solution-prototypes.css'

const SolutionPrototypes = (props) => {
  return (
    <div className="solution-prototypes-container">
      <Helmet>
        <title>Solution-prototypes - Match Point Group</title>
        <meta
          property="og:title"
          content="Solution-prototypes - Match Point Group"
        />
      </Helmet>
      <header data-role="Header" className="solution-prototypes-header">
        <div className="solution-prototypes-container01">
          <div className="solution-prototypes-menu">
            <div className="solution-prototypes-logo">
              <Link to="/" className="solution-prototypes-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="solution-prototypes-image"
                />
              </Link>
            </div>
            <div className="solution-prototypes-summary">
              <Link to="/home-summary" className="solution-prototypes-navlink1">
                01  SUMMARY
              </Link>
            </div>
            <div className="solution-prototypes-market">
              <Link to="/market" className="solution-prototypes-navlink2">
                02  MARKET
              </Link>
            </div>
            <div className="solution-prototypes-solution">
              <span className="solution-prototypes-text">03  SOLUTION</span>
            </div>
            <div className="solution-prototypes-cma">
              <span className="solution-prototypes-text1">04  CMA</span>
            </div>
            <div className="solution-prototypes-financial">
              <Link to="/financial" className="solution-prototypes-navlink3">
                05  FINANCIAL
              </Link>
            </div>
            <div className="solution-prototypes-timeline">
              <Link to="/timeline" className="solution-prototypes-navlink4">
                06  TIMELINE
              </Link>
            </div>
            <div className="solution-prototypes-team">
              <Link to="/team" className="solution-prototypes-navlink5">
                07  TEAM
              </Link>
            </div>
            <div className="solution-prototypes-contact-us">
              <button className="solution-prototypes-button button">
                CONTACT US
              </button>
            </div>
          </div>
          <div className="solution-prototypes-container02">
            <div className="solution-prototypes-container03">
              <div className="solution-prototypes-container04">
                <span className="solution-prototypes-text2">
                  <span>PROTOTYPES</span>
                  <br></br>
                </span>
              </div>
              <div className="solution-prototypes-container05">
                <span className="solution-prototypes-text5">Summary</span>
              </div>
            </div>
            <div className="solution-prototypes-container06">
              <img
                alt="image"
                src="/mock_1-600h.jpg"
                className="solution-prototypes-image1"
              />
              <img
                alt="image"
                src="/mock_2-600h.jpg"
                className="solution-prototypes-image2"
              />
              <img
                alt="image"
                src="/mock_3-600h.jpg"
                className="solution-prototypes-image3"
              />
              <img
                alt="image"
                src="/mock_4-600h.jpg"
                className="solution-prototypes-image4"
              />
            </div>
            <div className="solution-prototypes-container07">
              <div className="solution-prototypes-container08">
                <Link
                  to="/solution-overview"
                  className="solution-prototypes-navlink6"
                >
                  OVERVIEW |
                </Link>
              </div>
              <div className="solution-prototypes-container09">
                <span className="solution-prototypes-text6"> PROTOTYPES </span>
              </div>
              <div className="solution-prototypes-container10">
                <Link
                  to="/solution-stack"
                  className="solution-prototypes-navlink7"
                >
                  |  STACK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default SolutionPrototypes
