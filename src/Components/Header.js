import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import data from '../../public/resumeData.json';
import '../Styles/Header.css';

class Header extends Component {

  // https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {

    return (
        <div className="Root">
             <Tabs
                //value={value}
                //onChange={handleChange}
                className="Tabs"
                indicatorColor="primary"
                textColor="white"
                centered
            >
                <Tab label="About Me" />
                <Tab label="Experience" />
                <Tab label="Hobbies" />
            </Tabs>
            <h1 style={{position: "absolute", paddingTop: this.state.height/2, paddingLeft: this.state.width/2,  zIndex: 13}}>{data.main.name}</h1>
            <img className="HeaderImage" src="./header-background.webp" alt="Scenary" style={{width: this.state.width - 2, height: this.state.height, objectFit: "cover"}} />
        </div>
    );
  }
}

export default Header;