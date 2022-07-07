import React from "react";
import styled from "styled-components";

import {Route, Switch} from "react-router-dom";

import EveryDay from "./EveryDay";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";



function App() {
  return (
    <div className="App">
      <BoxStyle>
      <Switch>
          <Route path="/" exact>
            <EveryDay/>
          </Route>
          <Route path="/Monday">
            <Monday/>
          </Route>
          <Route path="/Tuesday">
            <Tuesday/>
          </Route>
          <Route path="/Wednesday">
            <Wednesday/>
          </Route>
          <Route path="/Thursday">
            <Thursday/>
          </Route>
          <Route path="/Friday">
            <Friday/>
          </Route>
          <Route path="/Saturday">
            <Saturday/>
          </Route>
          <Route path="/Sunday">
            <Sunday/>
          </Route>
      </Switch>
      </BoxStyle>
    </div>
  );
}

const BoxStyle = styled.div`

  max-width: 315px;
  min-height: 75vh;
  background-color: #fff;

  margin: 40px auto;
  border-radius: 5px;
  border: 1px solid #ddd;

  display: flex;
  justify-content: center;
  align-item: center;
  flex-direction: column;

`;

export default App;
