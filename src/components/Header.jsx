import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div style={styles.headerContainer}>
        <div>Logo</div>
        <div style={styles.link}>
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <span>Login</span>
        </div>
      </div>
    )
  }
}

const styles = {
  headerContainer: {
    backgroundColor: 'dodgerblue',
    height: 50,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    paddingRight: 15,
  }
}
