import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home-features.css'

const HomeFeatures = (props) => {
  return (
    <div className="home-features-container">
      <Helmet>
        <title>Home-features - Match Point Group</title>
        <meta property="og:title" content="Home-features - Match Point Group" />
      </Helmet>
      <header data-role="Header" className="home-features-header">
        <div className="home-features-container01">
          <div className="home-features-menu">
            <div className="home-features-logo">
              <Link to="/" className="home-features-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="home-features-image"
                />
              </Link>
            </div>
            <div className="home-features-summary">
              <Link to="/home-summary" className="home-features-navlink01">
                01  SUMMARY
              </Link>
            </div>
            <div className="home-features-market">
              <Link to="/market" className="home-features-navlink02">
                02  MARKET
              </Link>
            </div>
            <div className="home-features-solution">
              <span className="home-features-text">03  SOLUTION</span>
            </div>
            <div className="home-features-cma">
              <span className="home-features-text001">04  CMA</span>
            </div>
            <div className="home-features-financial">
              <Link to="/financial" className="home-features-navlink03">
                05  FINANCIAL
              </Link>
            </div>
            <div className="home-features-timeline">
              <Link to="/timeline" className="home-features-navlink04">
                06  TIMELINE
              </Link>
            </div>
            <div className="home-features-team">
              <Link to="/team" className="home-features-navlink05">
                07  TEAM
              </Link>
            </div>
            <div className="home-features-contact-us">
              <button className="home-features-button button">
                CONTACT US
              </button>
            </div>
          </div>
          <div className="home-features-container02">
            <div className="home-features-container03">
              <div className="home-features-container04">
                <span className="home-features-text002">MAIN FEATURES</span>
              </div>
              <div className="home-features-container05">
                <span className="home-features-text003">Summary</span>
              </div>
            </div>
            <div className="home-features-container06">
              <div className="home-features-container07">
                <span className="home-features-players">Players</span>
                <span className="home-features-text004">
                  <span>
                    1. Login/Registration
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    2. Password recovery
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    3. Downloading the app for pitch reservation in the club
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    4. Player Profile: Personal data | Contact details | Billing
                    and collection data (PM profile)
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    5. Search, reserve and pay pitch (MP)
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    6. Search and select coach: By name | By location |
                    Individual lesson | Group class
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    7. Search and select opponent (Singles and Doubles)
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    8. Contact between players
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    9. Classification in the ranking (Singles and Doubles)
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    10. Entry and confirmation of results
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    11. Registration in tournaments: Closed tournaments: by
                    invitation of the organizer | Open tournaments: without
                    previous invitation
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>12. Geolocation</span>
                  <br></br>
                </span>
                <span className="home-features-players1">Coaches</span>
                <span className="home-features-text029">
                  <span>1. Login/Register</span>
                  <br></br>
                  <span>2. Recover password</span>
                  <br></br>
                  <span>3. Trainer profile</span>
                  <br></br>
                  <span>4. Personal data</span>
                  <br></br>
                  <span>5. Specific data - background / CV</span>
                  <br></br>
                  <span>6. Billing and collection data (PM profile)</span>
                  <br></br>
                  <span>7. Contact with the coach</span>
                  <br></br>
                  <span>8. Geolocation</span>
                  <br></br>
                  <span>9. Classes in clubs: Individual rate | group rate</span>
                  <br></br>
                  <span>10. Class charge (MP)</span>
                  <br></br>
                  <span>11. Class management</span>
                  <br></br>
                  <span>12. Management and set up of tournaments</span>
                  <br></br>
                  <span>13. Invitation to users</span>
                  <br></br>
                  <span>14. Tournaments: Find, reserve and pay pitch (MP)</span>
                </span>
                <span className="home-features-players2">Clubs</span>
                <span className="home-features-text057">
                  <span>
                    1.Login
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>2. Password recovery</span>
                  <br></br>
                  <span>3.Club profile</span>
                  <br></br>
                  <span>4.Club &amp; contact info</span>
                  <br></br>
                  <span>5.Courts management</span>
                  <br></br>
                  <span>6.Price management (morning/afternoon/evening)</span>
                  <br></br>
                  <span>7.Members management</span>
                  <br></br>
                  <span>8.Tennis lessons management</span>
                  <br></br>
                  <span>9.Coaches management</span>
                  <br></br>
                  <span>10.Reservations and payments</span>
                  <br></br>
                  <span>11.Users &amp; invitations management</span>
                  <br></br>
                  <span>12.Tournaments</span>
                  <br></br>
                  <br></br>
                </span>
                <span className="home-features-players3">MP Brand</span>
                <span className="home-features-text083">
                  <span>1.Landing page</span>
                  <br></br>
                  <span>2.Login &amp; password recovery</span>
                  <br></br>
                  <span>3.Brand profile</span>
                  <br></br>
                  <span>4.Campaigns management</span>
                  <br></br>
                  <span>
                    5.Campaigns performance: status, reach, frequency, click
                    ratio, cost model, budget, usage, statistics
                  </span>
                  <br></br>
                  <span>6.Advertisement reach</span>
                  <br></br>
                  <span>7.Brand Awareness</span>
                  <br></br>
                  <span>8.Invesment</span>
                  <br></br>
                  <span>9.Inbox</span>
                  <br></br>
                  <span>10.Campaign schedules</span>
                  <br></br>
                  <span>11.Contacts information</span>
                </span>
              </div>
            </div>
            <div className="home-features-container08">
              <div className="home-features-container09">
                <Link to="/home-summary" className="home-features-navlink06">
                  INTRO
                </Link>
              </div>
              <div className="home-features-container10">
                <Link to="/home-project" className="home-features-navlink07">
                  | PROJECT
                </Link>
              </div>
              <div className="home-features-container11">
                <Link to="/home-overview" className="home-features-navlink08">
                  | PRODUCT OVERVIEW |
                </Link>
              </div>
              <div className="home-features-container12">
                <Link to="/home-features" className="home-features-navlink09">
                  {' '}
                  FEATURES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default HomeFeatures