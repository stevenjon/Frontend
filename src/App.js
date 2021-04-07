import React, { useState } from "react";
import { Layout } from "antd";
import TopicMenu from "./Components/Sidebar/TopicMenu";
import "./App.css";
import NavBar from "./Components/Sidebar/Navbar";
import SideBar from "./Components/Sidebar/Sidebar";
import { Route, Switch, withRouter} from 'react-router-dom'
function App({location}) {
  const topics = ["/", "/Home", "/Users"];
  const [selectedKey, setSelectedKey] = useState(location.pathname);
  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
  };
  const Menu = (
    <TopicMenu
      topics={topics}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );
  return (
    <div className="App">
      <NavBar menu={Menu} />
      <Layout>
        <SideBar menu={Menu} />
        <Layout.Content className="content">
            <Switch>
            {topics.map(topic => <Route exact path={topic}><h1>Hello {topic.slice(1) }</h1></Route>)}
            </Switch>
        </Layout.Content>
      </Layout>
      </div>
   
  );
}
export default withRouter(App);
