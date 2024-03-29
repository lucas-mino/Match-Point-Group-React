import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './market.css'

const Market = (props) => {
  return (
    <div className="market-container">
      <Helmet>
        <title>Market - Match Point Group</title>
        <meta property="og:title" content="Market - Match Point Group" />
      </Helmet>
      <header data-role="Header" className="market-header">
        <div className="market-container01">
          <div className="market-menu">
            <div className="market-logo">
              <Link to="/" className="market-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="market-image"
                />
              </Link>
            </div>
            <div className="market-summary">
              <Link to="/home-summary" className="market-navlink1">
                01  SUMMARY
              </Link>
            </div>
            <div className="market-market">
              <Link to="/market" className="market-navlink2">
                02  MARKET
              </Link>
            </div>
            <div className="market-solution">
              <Link to="/solution-overview" className="market-navlink3">
                03  SOLUTION
              </Link>
            </div>
            <div className="market-cma">
              <Link to="/cma" className="market-navlink4">
                04  CMA
              </Link>
            </div>
            <div className="market-financial">
              <Link to="/financial" className="market-navlink5">
                05  FINANCIAL
              </Link>
            </div>
            <div className="market-timeline">
              <Link to="/timeline" className="market-navlink6">
                06  TIMELINE
              </Link>
            </div>
            <div className="market-team">
              <Link to="/team" className="market-navlink7">
                07  TEAM
              </Link>
            </div>
            <div className="market-contact-us">
              <a
                href="mailto:hey@matchpointglobal.com?subject=Investment contact"
                className="market-link button"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="market-container02">
            <div className="market-container03">
              <div className="market-container04"></div>
              <div className="market-container05">
                <span className="market-text">Market</span>
              </div>
            </div>
            <div className="market-container06">
              <div className="market-container07">
                <img
                  alt="image"
                  src="/opportunity-1000h.jpg"
                  className="market-image1"
                />
                <span className="market-text01">
                  <span>
                    The tennis market in Latin America has experienced steady
                    growth in recent years, driven by an increase in the
                    sport&apos;s popularity in the region and greater investment
                    in infrastructure and sponsorships. According to data from
                    the International Tennis Federation (ITF), the number of
                    tennis players in the region has increased by 20% over the
                    last five years.
                  </span>
                  <br></br>
                  <span> </span>
                  <br></br>
                  <span>
                    Several countries in the region, including Argentina,
                    Brazil, Chile, and Mexico, have carried out significant
                    construction and renovation projects of sports facilities
                    for tennis, allowing for larger tournaments and attracting
                    elite players to the region.
                  </span>
                </span>
                <img
                  alt="image"
                  src="/map-1000h.jpg"
                  className="market-image2"
                />
                <span className="market-text07">
                  <span>
                    In addition to the aforementioned factors, it is crucial to
                    highlight the practice of amateur tennis in Latin America as
                    a key factor in the region&apos;s tennis market growth.
                  </span>
                  <br></br>
                </span>
                <span className="market-text10">Market Size</span>
                <div className="market-container08">
                  <div className="market-container09">
                    <img
                      alt="image"
                      src="/global-market-400h.png"
                      className="market-image3"
                    />
                    <span className="market-text11">Total Market</span>
                  </div>
                  <div className="market-container10">
                    <img
                      alt="image"
                      src="/mp-market-400h.png"
                      className="market-image4"
                    />
                    <span className="market-text12">MP Market Goals</span>
                  </div>
                </div>
                <span className="market-text13">SES</span>
                <img
                  alt="image"
                  src="/ses-1000h.jpg"
                  className="market-image5"
                />
                <span className="market-text14">
                  <span>
                    Tennis is a popular sport among enthusiasts in Latin
                    America, and more people are becoming interested in
                    practicing it as a form of exercise and entertainment. The
                    practice of amateur tennis has seen an increase in the
                    region, fueled by the availability of sports facilities and
                    qualified coaches, as well as the organization of local and
                    regional tournaments for amateur players.
                  </span>
                  <br></br>
                  <br></br>
                </span>
                <span className="market-text18">
                  Fans purchase intention (next 12 months)
                </span>
                <img
                  alt="image"
                  src="/purchase-intension-1000h.jpg"
                  className="market-image6"
                />
                <span className="market-text19">
                  <span>
                    This rise in amateur tennis has led to an increase in demand
                    for tennis-related products and services such as rackets,
                    balls, clothing, and specialized footwear. Moreover, it has
                    generated new business opportunities for tennis academies,
                    coaches, and other sports service providers.
                  </span>
                  <br></br>
                  <br></br>
                </span>
                <span className="market-text23">
                  Fans media consumption habits
                </span>
                <img
                  alt="image"
                  src="/fans-media-1000h.jpg"
                  className="market-image7"
                />
                <span className="market-text24">
                  In summary, the practice of amateur tennis in Latin America is
                  an essential factor to consider when analyzing the
                  region&apos;s tennis market.
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Market
