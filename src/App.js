import React from 'react';
import './App.css';
import Header from './app/components/Header'
import Sidebar from './app/components/Sidebar'
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <>
      <Header  />
      <AppBody>
        <Sidebar  />
        <Switch>
          <Route path="/" exact>
            {/* Chat */}

          </Route>
        </Switch>
      </AppBody>
      </>
  </Router>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;

`;
