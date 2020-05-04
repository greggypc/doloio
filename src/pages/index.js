import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Section from '../components/Section';
import Promo from '../components/Promo';
import Card from '../components/Card';
import TrioPromo from '../components/TrioPromo';
import Newsletter from '../components/Newsletter';
import orgs from '../assets/images/orgs.json';

let flexContainer = {
  padding: '10px',
  margin: '6px',
  listStyle: 'none',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around'
};

class Homepage extends React.Component {
  state = {
    orgs
  };

  render() {
    const siteTitle = 'Donation Location';

    return (
      <Layout>
        <Helmet title={siteTitle} />
        <Section />
        <Promo />
        {/* <div class="container">
          <div className="row gtr-150" style={flexContainer}>
            <div className="col-4 col-12-medium"> */}
            <section id="three" className="main style1 special">
        <div className="grid-wrapper">
          <div className="col-12">
            <header className="major">
              <h2>Community news and contacts</h2>
            </header>
            <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
          </div>
              {this.state.orgs.map(org => (
                <Card
                  //   style={cardContainer}
                  id={org.id}
                  name={org.name}
                  key={org.id}
                  description={org.description}
                  url={org.url}
                  logoUrl={org.logoUrl}
                  currentNeeds={org.currentNeeds}
                  facebook={org.facebook}
                  instagram={org.instagram}
                  twitter={org.twitter}
                  linkedin={org.linkedin}
                />
              ))}
            </div>
      </section>
          {/* </div>
        </div> */}
        <TrioPromo />
        <Newsletter />
      </Layout>
    );
  }
}

export default Homepage;
