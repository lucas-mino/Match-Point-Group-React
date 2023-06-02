import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home-summary.css'

const HomeSummary = (props) => {
  return (
    <div className="home-summary-container">
      <Helmet>
        <title>Home-summary - Match Point Group</title>
        <meta property="og:title" content="Home-summary - Match Point Group" />
      </Helmet>
      <header data-role="Header" className="home-summary-header">
        <div className="home-summary-container01">
          <div className="home-summary-menu">
            <div className="home-summary-logo">
              <Link to="/" className="home-summary-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="home-summary-image"
                />
              </Link>
            </div>
            <div className="home-summary-summary">
              <Link to="/home-summary" className="home-summary-navlink01">
                01  SUMMARY
              </Link>
            </div>
            <div className="home-summary-market">
              <Link to="/market" className="home-summary-navlink02">
                02  MARKET
              </Link>
            </div>
            <div className="home-summary-solution">
              <Link to="/solution-overview" className="home-summary-navlink03">
                03  SOLUTION
              </Link>
            </div>
            <div className="home-summary-cma">
              <span className="home-summary-text">04  CMA</span>
            </div>
            <div className="home-summary-financial">
              <Link to="/financial" className="home-summary-navlink04">
                05  FINANCIAL
              </Link>
            </div>
            <div className="home-summary-timeline">
              <Link to="/timeline" className="home-summary-navlink05">
                06  TIMELINE
              </Link>
            </div>
            <div className="home-summary-team">
              <Link to="/team" className="home-summary-navlink06">
                07  TEAM
              </Link>
            </div>
            <div className="home-summary-contact-us">
              <button className="home-summary-button button">CONTACT US</button>
            </div>
          </div>
          <div className="home-summary-container02">
            <div className="home-summary-container03">
              <div className="home-summary-container04">
                <span className="home-summary-text01">
                  <span>INTRO</span>
                  <br></br>
                </span>
              </div>
              <div className="home-summary-container05">
                <span className="home-summary-text04">Summary</span>
              </div>
            </div>
            <div className="home-summary-container06">
              <span>
                <span className="home-summary-text06">
                  We are excited to introduce our Uruguayan Healthtech project,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-summary-text07">Match Point</span>
                <span className="home-summary-text08">
                  , which we are developing in partnership with Xoolix. Match
                  Point is already making waves in Argentina and we believe it
                  has tremendous potential to disrupt the global tennis
                  ecosystem.
                </span>
                <br className="home-summary-text09"></br>
                <br className="home-summary-text10"></br>
                <span className="home-summary-text11">
                  Our project offers a range of revenue streams including
                  membership (with four user profiles: player, club, coach and
                  MP Brand), sponsorship and every transaction made on the
                  platform. We are also planning to introduce a new feature that
                  will allow semi-professional players to acquire tokens that
                  vary in value according to their performance. This will help
                  these players afford their career and give them a chance to
                  earn more recognition and opportunities.
                </span>
                <br className="home-summary-text12"></br>
                <br className="home-summary-text13"></br>
                <span className="home-summary-text14">
                  The sponsor is looking to increase its equity participation in
                  the &quot;MP&quot; project by offering a
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-summary-text15">20%</span>
                <span className="home-summary-text16">
                  {' '}
                  equity stake valued at
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-summary-text17">$526,208</span>
                <span className="home-summary-text18">
                  {' '}
                  in order to become part of this new global tennis community.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-summary-text19"></br>
                <br className="home-summary-text20"></br>
                <span className="home-summary-text21">
                  The capital contribution will be applied to development
                  expenses, carrying costs, and marketing and sales expenses.
                  This investment will help drive the growth of the project and
                  provide opportunities for both amateur and professional tennis
                  players, as well as other members of the tennis ecosystem. We
                  believe that this project has the potential to create
                  significant value and we welcome the opportunity to partner
                  with you as a venture capital fund to help bring it to
                  fruition.
                </span>
                <br></br>
                <br></br>
              </span>
            </div>
            <div className="home-summary-container07">
              <div className="home-summary-container08">
                <Link to="/home-summary" className="home-summary-navlink07">
                  INTRO
                </Link>
              </div>
              <div className="home-summary-container09">
                <Link to="/home-project" className="home-summary-navlink08">
                  <span>|</span>
                  <span> PROJECT</span>
                </Link>
              </div>
              <div className="home-summary-container10">
                <Link to="/home-overview" className="home-summary-navlink09">
                  | PRODUCT OVERVIEW
                </Link>
              </div>
              <div className="home-summary-container11">
                <Link to="/home-features" className="home-summary-navlink10">
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

export default HomeSummary
