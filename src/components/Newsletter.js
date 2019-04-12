import React, { Component } from 'react';

class Newsletter extends Component {
  render() {
    return (
      <section id="four" className="main style2 special">
        <div className="container">
          <header className="major">
            <h2>Donation Location Newsletter</h2>
          </header>
          <p>Get notified when we launch!</p>
          <ul className="actions uniform">
            <li>
              <a href="#" className="button special">
                Sign Up
              </a>
            </li>
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Newsletter;
