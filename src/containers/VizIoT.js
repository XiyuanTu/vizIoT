import React from 'react';
import PropTypes from 'prop-types';
import AppTitle from '../components/AppTitle';
import OverviewTab from './OverviewTab';
import BubbleLocationTab from './BubbleLocationTab';

const Tabs = {
  OVERVIEW: {
    key: 'OVERVIEW',
    background: ''

  },
  LOCATIONS: {
    key: 'LOCATIONS',
    background: 'location-bubble-tab-background'
  },
};

class VizIoT extends React.Component {
  state = {
    currentTab: Tabs.LOCATIONS,
  };

  renderCurrentTab() {
    switch (this.state.currentTab) {
      case Tabs.OVERVIEW:
        return <OverviewTab />;
      case Tabs.LOCATIONS:
        return <BubbleLocationTab />;
    }
    return <OverviewTab />;
  }

  render() {
    const {key, background} = this.state.currentTab;
    return (
      <div className="">
        <AppTitle subtitle={key} />

        <div className={`tint-background ${background}`}>
          <div className="padded-container">
            {this.renderCurrentTab()}

            <div className="large-spacer" />
            <div className="large-spacer" />
            <div className="large-spacer" />
            <div className="large-spacer" />
            <div className="large-spacer" />
            <div className="large-spacer" />
            <div className="large-spacer" />
            <div className="large-spacer" />
          </div>
        </div>
      </div>
    );
  }
}

VizIoT.defaultProps = {
  appConfig: {
    networkId: 42,
  },
};

VizIoT.propTypes = {
  appConfig: PropTypes.object,
};

export default VizIoT;
