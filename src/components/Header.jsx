import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Header extends Component {
  // This is where i write my logic


  
  render() {
    return (
      <div style={styles.headerContainer}>
        <div>Logo</div>
        <div style={styles.nav}>
          <span style={styles.spn}><Link to="/">Home</Link></span>
          <span style={styles.spn}><Link to="/tictak">Tic tack</Link></span>
          <span style={styles.spn}><Link to="/callapi">Call api</Link></span>
          <span style={styles.spn}>Login</span>
        </div>
      </div>
    );
  }
}

const styles = {
  headerContainer: {
    backgroundColor: "red",
    height: 50,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav: {
    paddingRight: 15,
  },
  spn: {
    marginLeft: 15
  }
};
