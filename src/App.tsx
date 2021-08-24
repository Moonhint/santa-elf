import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { isMobile } from 'react-device-detect';

const ProfessionalList = React.lazy(() => import('./pages/ProfessionalList'));
const ProfessionalDetail = React.lazy(() => import('./pages/ProfessionalDetail'));
const ProfessionalArea = React.lazy(() => import('./pages/ProfessionalArea'));

const renderTopNavigation = (
  isMobile ? <MobileNavbar/> : <Navbar/>
)

function App() {
  return (
    <div className="App">
      <Router>
        {renderTopNavigation}
        <Switch>
          <Route path="/professional">
            <Suspense fallback={<div>Loading...</div>}>
              <ProfessionalList />
            </Suspense>
          </Route>
          <Route path="/professional-detail">
            <Suspense fallback={<div>Loading...</div>}>
              <ProfessionalDetail />
            </Suspense>
          </Route>
          <Route path="/professional-area">
            <Suspense fallback={<div>Loading...</div>}>
              <ProfessionalArea />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
