import React from 'react';
import Tab from './Tab';
import PropTypes from "prop-types"
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      
      {props.tabs.map(tab =>{
        <Tab tab={tab} key={tab.index}
        selectedTabHandler={props.tab.selectTabHandler}
        selectedTab={props.tab.selectedTab}
        />
      })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes ={
  selectTab: PropTypes.string,
 selectHandler: PropTypes.func,
  tabs: PropTypes.array,
}
export default Tabs;
