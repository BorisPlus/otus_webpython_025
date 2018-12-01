import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
import WhatIsTheTimeNow from "./WhatIsTheTimeNow";
const App = () => (
  <React.Fragment>
    <DataProvider endpoint="api/v0/messages/"
                render={data => <Table data={data} />} />
    <Form endpoint="api/v0/messages/" />
    <WhatIsTheTimeNow />
  </React.Fragment>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;