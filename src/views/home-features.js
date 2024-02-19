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
              <Link to="/solution-overview" className="home-features-navlink03">
                03  SOLUTION
              </Link>
            </div>
            <div className="home-features-cma">
              <Link to="/cma" className="home-features-navlink04">
                04  CMA
              </Link>
            </div>
            <div className="home-features-financial">
              <Link to="/financial" className="home-features-navlink05">
                05  FINANCIAL
              </Link>
            </div>
            <div className="home-features-timeline">
              <Link to="/timeline" className="home-features-navlink06">
                06  TIMELINE
              </Link>
            </div>
            <div className="home-features-team">
              <Link to="/team" className="home-features-navlink07">
                07  TEAM
              </Link>
            </div>
            <div className="home-features-contact-us">
              <a
                href="mailto:hey@matchpointglobal.com?subject=Investment contact"
                className="home-features-link button"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="home-features-container02">
            <div className="home-features-container03">
              <div className="home-features-container04">
                <span className="home-features-text">MAIN FEATURES</span>
              </div>
              <div className="home-features-container05">
                <span className="home-features-text001">Summary</span>
              </div>
            </div>
            <div className="home-features-container06">
              <div className="home-features-container07">
                <span className="home-features-players">Players</span>
                <span className="home-features-text002">
                  <span>1. Login/Registration   </span>
                  <span className="home-features-text004">MVP</span>
                  <br></br>
                  <span>2. Password recovery    </span>
                  <span className="home-features-text007">MVP</span>
                  <br></br>
                  <span>
                    3. Downloading the app for pitch reservation in the club  
                  </span>
                  <br></br>
                  <span>
                    4. Player Profile: Personal data | Contact details | Billing
                    and collection data (PM profile)   
                  </span>
                  <span className="home-features-text012">MVP</span>
                  <br></br>
                  <span>5. Search, reserve and pay pitch (MP).  </span>
                  <span className="home-features-text015">MVP</span>
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
                  </span>
                  <span className="home-features-text020">MVP</span>
                  <br></br>
                  <span>8. Contact between players</span>
                  <br></br>
                  <span>
                    9. Classification in the ranking (Singles and Doubles)   
                  </span>
                  <span className="home-features-text025">MVP</span>
                  <br></br>
                  <span>10. Entry and confirmation of results   </span>
                  <span className="home-features-text028">MVP</span>
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
                  <span>12. Geolocation of opponents, clubs and coaches</span>
                  <br></br>
                  <span>
                    13. Alerts: pre match alert, post booking alert, pre match
                    alert, weather alert   
                  </span>
                  <span className="home-features-text035">MVP</span>
                  <br></br>
                </span>
                <span className="home-features-players1">Coaches</span>
                <span className="home-features-text037">
                  <span>1. Login/Register   </span>
                  <span className="home-features-text039">MVP</span>
                  <br></br>
                  <span>2. Recover password   </span>
                  <span className="home-features-text042">MVP</span>
                  <br></br>
                  <span>3. Trainer profile   </span>
                  <span className="home-features-text045">MVP</span>
                  <br></br>
                  <span>4. Personal data   </span>
                  <span className="home-features-text048">MVP</span>
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
                  <span>11. Class management   </span>
                  <span className="home-features-text063">MVP</span>
                  <br></br>
                  <span>12. Management and set up of tournaments</span>
                  <br></br>
                  <span>13. Invitation to users</span>
                  <br></br>
                  <span>14. Tournaments: Find, reserve and pay pitch (MP)</span>
                </span>
                <span className="home-features-players2">Clubs</span>
                <span className="home-features-text070">
                  <span>1.Login   </span>
                  <span className="home-features-text072">MVP</span>
                  <br></br>
                  <span>2. Password recovery   </span>
                  <span className="home-features-text075">MVP</span>
                  <br></br>
                  <span>3.Club profile   </span>
                  <span className="home-features-text078">MVP</span>
                  <br></br>
                  <span>4.Club &amp; contact info</span>
                  <br></br>
                  <span>5.Courts management   </span>
                  <span className="home-features-text083">MVP</span>
                  <br></br>
                  <span>6.Price management (morning/afternoon/evening)</span>
                  <br></br>
                  <span>7.Members management</span>
                  <br></br>
                  <span>8.Tennis lessons management</span>
                  <br></br>
                  <span>9.Coaches management</span>
                  <br></br>
                  <span>10.Reservations and payments   </span>
                  <span className="home-features-text094">MVP</span>
                  <br></br>
                  <span>11.Users &amp; invitations management</span>
                  <br></br>
                  <span>12.Tournaments</span>
                  <br></br>
                  <br></br>
                </span>
                <span className="home-features-players3">MP Brand</span>
                <span className="home-features-text101">
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
                <Link to="/home-summary" className="home-features-navlink08">
                  INTRO
                </Link>
              </div>
              <div className="home-features-container10">
                <Link to="/home-project" className="home-features-navlink09">
                  <span>|</span>
                  <span> PROJECT</span>
                </Link>
              </div>
              <div className="home-features-container11">
                <Link to="/home-overview" className="home-features-navlink10">
                  | PRODUCT OVERVIEW |
                </Link>
              </div>
              <div className="home-features-container12">
                <Link to="/home-features" className="home-features-navlink11">
                  FEATURES
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </Link>
              </div>
              <div className="home-features-container13">
                <Link to="/home-mvp" className="home-features-navlink12">
                  | MVP
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
