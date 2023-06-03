import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import TeamMarianoPage from './views/team-mariano-page'
import Blank from './views/blank'
import FinancialCashFlow from './views/financial-cash-flow'
import HomeSummary from './views/home-summary'
import Home from './views/home'
import SolutionStack from './views/solution-stack'
import SolutionPrototypes from './views/solution-prototypes'
import FinancialPl from './views/financial-pl'
import HomeFeatures from './views/home-features'
import TeamSilvanaPage from './views/team-silvana-page'
import SolutionOverview from './views/solution-overview'
import Team from './views/team'
import TeamLucasPage from './views/team-lucas-page'
import HomeProject from './views/home-project'
import Market from './views/market'
import Timeline from './views/timeline'
import TeamDanielPage from './views/team-daniel-page'
import HomeOverview from './views/home-overview'
import FinancialInvestment from './views/financial-investment'
import CMA from './views/cma'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={TeamMarianoPage} exact path="/team-mariano-page" />
        <Route component={Blank} exact path="/blank" />
        <Route
          component={FinancialCashFlow}
          exact
          path="/financial-cash-flow"
        />
        <Route component={HomeSummary} exact path="/home-summary" />
        <Route component={Home} exact path="/" />
        <Route component={SolutionStack} exact path="/solution-stack" />
        <Route
          component={SolutionPrototypes}
          exact
          path="/solution-prototypes"
        />
        <Route component={FinancialPl} exact path="/financial" />
        <Route component={HomeFeatures} exact path="/home-features" />
        <Route component={TeamSilvanaPage} exact path="/team-silvana-page" />
        <Route component={SolutionOverview} exact path="/solution-overview" />
        <Route component={Team} exact path="/team" />
        <Route component={TeamLucasPage} exact path="/team-lucas-page" />
        <Route component={HomeProject} exact path="/home-project" />
        <Route component={Market} exact path="/market" />
        <Route component={Timeline} exact path="/timeline" />
        <Route component={TeamDanielPage} exact path="/team-daniel-page" />
        <Route component={HomeOverview} exact path="/home-overview" />
        <Route
          component={FinancialInvestment}
          exact
          path="/financial-investment"
        />
        <Route component={CMA} exact path="/cma" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
