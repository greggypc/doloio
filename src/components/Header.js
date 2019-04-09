import React from 'react';
import logo from '../assets/images/dolo.png';

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          {/* <span className="icon major fa-cloud" /> */}
          <img src={logo} width="300px" alt="Donation Location" />
          <h1>We Make Donating Simple</h1>
          <p>
            Welcome to Donation Location. <br />
            We inspire the people to make a difference in their community <br />
            by connecting them with local organizations on one easy-to-use platform where they can donate items to
            charities in their neighborhood.
          </p>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Discover
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Header;
