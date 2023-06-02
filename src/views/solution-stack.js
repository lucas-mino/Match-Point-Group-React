import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './solution-stack.css'

const SolutionStack = (props) => {
  return (
    <div className="solution-stack-container">
      <Helmet>
        <title>Solution-stack - Match Point Group</title>
        <meta
          property="og:title"
          content="Solution-stack - Match Point Group"
        />
      </Helmet>
      <header data-role="Header" className="solution-stack-header">
        <div className="solution-stack-container01">
          <div className="solution-stack-menu">
            <div className="solution-stack-logo">
              <Link to="/" className="solution-stack-navlink">
                <img
                  alt="logo"
                  src="/logomp-1500h.png"
                  className="solution-stack-image"
                />
              </Link>
            </div>
            <div className="solution-stack-summary">
              <Link to="/home-summary" className="solution-stack-navlink1">
                01  SUMMARY
              </Link>
            </div>
            <div className="solution-stack-market">
              <Link to="/market" className="solution-stack-navlink2">
                02  MARKET
              </Link>
            </div>
            <div className="solution-stack-solution">
              <span className="solution-stack-text">03  SOLUTION</span>
            </div>
            <div className="solution-stack-cma">
              <span className="solution-stack-text01">04  CMA</span>
            </div>
            <div className="solution-stack-financial">
              <Link to="/financial" className="solution-stack-navlink3">
                05  FINANCIAL
              </Link>
            </div>
            <div className="solution-stack-timeline">
              <Link to="/timeline" className="solution-stack-navlink4">
                06  TIMELINE
              </Link>
            </div>
            <div className="solution-stack-team">
              <Link to="/team" className="solution-stack-navlink5">
                07  TEAM
              </Link>
            </div>
            <div className="solution-stack-contact-us">
              <a
                href="mailto:hey@matchpointglobal.com?subject=Investment contact"
                className="solution-stack-link button"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="solution-stack-container02">
            <div className="solution-stack-container03">
              <div className="solution-stack-container04">
                <span className="solution-stack-text02">
                  <span>TECHNICAL STACK</span>
                  <br></br>
                </span>
              </div>
              <div className="solution-stack-container05">
                <span className="solution-stack-text05">Summary</span>
              </div>
            </div>
            <div className="solution-stack-container06">
              <img
                alt="image"
                src="/stack-1-600h.jpg"
                className="solution-stack-image1"
              />
              <span className="solution-stack-text06">
                <span>
                  The web frontend will be developed in
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="solution-stack-text08">React</span>
                <span>
                  {' '}
                  and
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="solution-stack-text10">NextJs</span>
                <span>
                  , the apps will be built in
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="solution-stack-text12">React Native</span>
                <span>
                  {' '}
                  compiled in native language, all integrated with a backend
                  that will handle the business logic, orchestrate the
                  connections, make it possible to scale the platform and allow
                  the management of
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="solution-stack-text14">ERC20 tokens</span>
                <span>.</span>
                <br></br>
                <br></br>
                <span>
                  In the core of the backend we will use
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="solution-stack-text19">JavaEE</span>
                <span>
                  {' '}
                  accompanied by
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="solution-stack-text21">Spring,</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="solution-stack-text23">Firebase</span>
                <span>
                  {' '}
                  and
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="solution-stack-text25">PostgreSQL</span>
                <span> among others.</span>
                <br></br>
                <br></br>
                <span>
                  The management of the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="solution-stack-text30">ERC20 tokens</span>
                <span>
                  {' '}
                  will be carried out through the Uniswap protocol in a
                  decentralized manner using the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="solution-stack-text32">Ethereum</span>
                <span> network.</span>
              </span>
            </div>
            <div className="solution-stack-container07">
              <div className="solution-stack-container08">
                <Link
                  to="/solution-overview"
                  className="solution-stack-navlink6"
                >
                  OVERVIEW |
                </Link>
              </div>
              <div className="solution-stack-container09">
                <Link
                  to="/solution-prototypes"
                  className="solution-stack-navlink7"
                >
                  PROTOTYPES  | 
                </Link>
              </div>
              <div className="solution-stack-container10">
                <span className="solution-stack-text34"> STACK </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default SolutionStack
