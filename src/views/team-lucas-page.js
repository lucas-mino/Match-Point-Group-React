import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './team-lucas-page.css'

const TeamLucasPage = (props) => {
  return (
    <div className="team-lucas-page-container">
      <Helmet>
        <title>Team-Lucas-page - Match Point Group</title>
        <meta
          property="og:title"
          content="Team-Lucas-page - Match Point Group"
        />
      </Helmet>
      <header data-role="Header" className="team-lucas-page-header">
        <div className="team-lucas-page-container1">
          <div className="team-lucas-page-menu">
            <div className="team-lucas-page-logo">
              <Link to="/" className="team-lucas-page-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="team-lucas-page-image"
                />
              </Link>
            </div>
            <div className="team-lucas-page-summary">
              <Link to="/home-summary" className="team-lucas-page-link">
                01  SUMMARY
              </Link>
            </div>
            <div className="team-lucas-page-market">
              <Link to="/market" className="team-lucas-page-navlink1">
                02  MARKET
              </Link>
            </div>
            <div className="team-lucas-page-solution">
              <Link
                to="/solution-overview"
                className="team-lucas-page-navlink2"
              >
                03  SOLUTION
              </Link>
            </div>
            <div className="team-lucas-page-cma">
              <span className="team-lucas-page-text">04  CMA</span>
            </div>
            <div className="team-lucas-page-financial">
              <Link to="/financial" className="team-lucas-page-navlink3">
                05  FINANCIAL
              </Link>
            </div>
            <div className="team-lucas-page-timeline">
              <Link to="/timeline" className="team-lucas-page-navlink4">
                06  TIMELINE
              </Link>
            </div>
            <div className="team-lucas-page-team">
              <Link to="/team" className="team-lucas-page-navlink5">
                07  TEAM
              </Link>
            </div>
            <div className="team-lucas-page-contact-us">
              <button className="team-lucas-page-button button">
                CONTACT US
              </button>
            </div>
          </div>
          <div className="team-lucas-page-container2">
            <div className="team-lucas-page-container3">
              <div className="team-lucas-page-container4"></div>
              <div className="team-lucas-page-container5">
                <span className="team-lucas-page-text01">Team</span>
              </div>
            </div>
            <div className="team-lucas-page-container6">
              <div className="team-lucas-page-foto">
                <img
                  alt="image"
                  src="/lucas-200h.png"
                  className="team-lucas-page-image1"
                />
              </div>
              <div className="team-lucas-page-nombre">
                <div className="team-lucas-page-nombre1">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="team-lucas-page-link1"
                  >
                    <span>Lucas Miño</span>
                    <br></br>
                  </a>
                </div>
                <div className="team-lucas-page-cargo">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="team-lucas-page-link2"
                  >
                    CCO
                  </a>
                </div>
              </div>
            </div>
            <div className="team-lucas-page-container7">
              <span className="team-lucas-page-text04">
                <span>
                  At ultrices mi tempus imperdiet nulla malesuada. Sed
                  adipiscing diam donec adipiscing tristique risus nec feugiat
                  in. Adipiscing tristique risus nec feugiat in. Vel fringilla
                  est ullamcorper eget nulla facilisi etiam dignissim. Duis at
                  tellus at urna. Mattis vulputate enim nulla aliquet porttitor
                  lacus luctus. Malesuada nunc vel risus commodo viverra.
                  Tincidunt lobortis feugiat vivamus at augue eget arcu.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Donec adipiscing tristique risus nec feugiat in fermentum. Leo
                  vel orci porta non pulvinar neque. Diam ut venenatis tellus in
                  metus vulputate eu scelerisque. In mollis nunc sed id. Euismod
                  lacinia at quis risus sed vulputate. Ut consequat semper
                  viverra nam libero justo laoreet sit. Gravida dictum fusce ut
                  placerat orci nulla pellentesque dignissim. Sed augue lacus
                  viverra vitae congue eu. Nunc non blandit massa enim nec dui
                  nunc mattis.
                </span>
                <br></br>
                <br></br>
                <span>
                  At ultrices mi tempus imperdiet nulla malesuada. Sed
                  adipiscing diam donec adipiscing tristique risus nec feugiat
                  in. Adipiscing tristique risus nec feugiat in. Vel fringilla
                  est ullamcorper eget nulla facilisi etiam dignissim. Duis at
                  tellus at urna. Mattis vulputate enim nulla aliquet porttitor
                  lacus luctus.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Malesuada nunc vel risus commodo viverra. Tincidunt lobortis
                  feugiat vivamus at augue eget arcu. Donec adipiscing tristique
                  risus nec feugiat in fermentum. Leo vel orci porta non
                  pulvinar neque. Diam ut venenatis tellus in metus vulputate eu
                  scelerisque. In mollis nunc sed id. Euismod lacinia at quis
                  risus sed vulputate.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default TeamLucasPage
