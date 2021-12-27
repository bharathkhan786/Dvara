import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className='app'>
        <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
          <Link to="/adduser">Add User</Link> |{' '}
          <Link to="/finduser">Find User</Link>
        </nav>
        <Outlet />
      </div>

    )
  }
}
export default App;
