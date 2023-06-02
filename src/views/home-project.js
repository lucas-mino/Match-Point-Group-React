import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home-project.css'

const HomeProject = (props) => {
  return (
    <div className="home-project-container">
      <Helmet>
        <title>Home-project - Match Point Group</title>
        <meta property="og:title" content="Home-project - Match Point Group" />
      </Helmet>
      <header data-role="Header" className="home-project-header">
        <div className="home-project-container01">
          <div className="home-project-menu">
            <div className="home-project-logo">
              <Link to="/" className="home-project-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="home-project-image"
                />
              </Link>
            </div>
            <div className="home-project-summary">
              <Link to="/home-summary" className="home-project-navlink01">
                01  SUMMARY
              </Link>
            </div>
            <div className="home-project-market">
              <Link to="/market" className="home-project-navlink02">
                02  MARKET
              </Link>
            </div>
            <div className="home-project-solution">
              <span className="home-project-text">03  SOLUTION</span>
            </div>
            <div className="home-project-cma">
              <span className="home-project-text01">04  CMA</span>
            </div>
            <div className="home-project-financial">
              <Link to="/financial" className="home-project-navlink03">
                05  FINANCIAL
              </Link>
            </div>
            <div className="home-project-timeline">
              <Link to="/timeline" className="home-project-navlink04">
                06  TIMELINE
              </Link>
            </div>
            <div className="home-project-team">
              <Link to="/team" className="home-project-navlink05">
                07  TEAM
              </Link>
            </div>
            <div className="home-project-contact-us">
              <button className="home-project-button button">CONTACT US</button>
            </div>
          </div>
          <div className="home-project-container02">
            <div className="home-project-container03">
              <div className="home-project-container04">
                <span className="home-project-text02">PROJECT</span>
              </div>
              <div className="home-project-container05">
                <span className="home-project-text03">Summary</span>
              </div>
            </div>
            <div className="home-project-container06">
              <div className="home-project-container07">
                <span className="home-project-text04">Welcome to MP</span>
                <span className="home-project-text05">
                  We are the first platform in the market developed by tennis
                  players for tennis fans, with the ambition of being the first
                  user-managed global association.
                </span>
                <span className="home-project-text06">What is MP?</span>
                <span className="home-project-text07">
                  MP is much more than a management and activity administration
                  platform for sports entities, and an app to challenge other
                  players. It is a digital community with physical support in
                  the contact and interaction between users, which allows all
                  members of the tennis ecosystem to come together in one
                  platform.e are the first platform in the market developed by
                  tennis players for tennis fans.
                </span>
                <span className="home-project-text08">How does MP work?</span>
                <span className="home-project-text09">
                  <span>
                    Through a strong investment in technological development, we
                    have created the necessary structure to host a large number
                    of users and data allow them to create profiles, challenge
                    each other, rise in different rankings, organize
                    tournaments, make purchases, participate for prizes
                    according to their results and qualify for the Masters
                    tournament. In summary, they can manage their fandom and
                    weekly sports activity from the app.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
                <span className="home-project-text12">MP Brand</span>
                <span className="home-project-text13">
                  <span>
                    Brands can also reach our community through the &quot;MP
                    Brand&quot; user. We understand the power of advertising in
                    a pre-qualified environment, making this revenue stream the
                    vertical of the business.
                  </span>
                  <br></br>
                </span>
                <span className="home-project-text16">Market</span>
                <span className="home-project-text17">
                  <span>
                    Tennis is a sport with millions of followers worldwide, and
                    the trend towards self-management and digitization is on the
                    rise. MP is well positioned to capitalize on this market
                    opportunity.
                  </span>
                  <br></br>
                </span>
                <span className="home-project-text20">Team</span>
                <span className="home-project-text21">
                  <span>
                    Our team is made up of experts in tennis, technology, and
                    business, committed to the success of MP.
                  </span>
                  <br></br>
                </span>
                <span className="home-project-text24">Growth Strategy</span>
                <span className="home-project-text25">
                  <span>
                    In order to continue our growth, we plan to expand our reach
                    globally, constantly improving our technology and increasing
                    our partnerships with brands.
                  </span>
                  <br></br>
                </span>
                <span className="home-project-text28">Funding</span>
                <span className="home-project-text29">
                  <span>
                    We are seeking investors who believe in our vision and are
                    willing to help us reach our potential. The funding will be
                    used to develop, expand our user base, improve our
                    technology, and increase our partnerships.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-project-container08">
              <div className="home-project-container09">
                <Link to="/home-summary" className="home-project-navlink06">
                  INTRO |
                </Link>
              </div>
              <div className="home-project-container10">
                <Link to="/home-project" className="home-project-navlink07">
                  PROJECT
                </Link>
              </div>
              <div className="home-project-container11">
                <Link to="/home-overview" className="home-project-navlink08">
                  | PRODUCT OVERVIEW
                </Link>
              </div>
              <div className="home-project-container12">
                <Link to="/home-features" className="home-project-navlink09">
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

export default HomeProject
