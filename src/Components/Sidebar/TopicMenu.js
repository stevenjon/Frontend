import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const TopicMenu = ({ topics, selectedKey, changeSelectedKey }) => {
  const styledTopics = [];
  topics.forEach(topic =>
    styledTopics.push(
      <Menu.Item key={topic} onClick={changeSelectedKey}>
        <Link to={topic}>{topic.slice(1)}</Link>
      </Menu.Item>
    )
  );

  return (
    <Menu mode="inline" selectedKeys={[selectedKey]}>
      {styledTopics}
    </Menu>
  );
};
export default TopicMenu;
