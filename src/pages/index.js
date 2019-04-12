import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Section from '../components/Section';
import Promo from '../components/Promo';
import Card from '../components/Card';
import TrioPromo from '../components/TrioPromo';
import Newsletter from '../components/Newsletter';
import orgs from '../assets/images/orgs.json';

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
        <div>
          {this.state.orgs.map(org => (
            <Card
              id={org.id}
              name={org.name}
              key={org.id}
              description={org.description}
              logoURL={org.url}
              currentNeeds={org.currentNeeds}
              facebook={org.facebook}
              instagram={org.instagram}
              twitter={org.twitter}
              linkedin={org.linkedin}
            />
          ))}
        </div>
        <TrioPromo />
        <Newsletter />
      </Layout>
    );
  }
}

export default Homepage;
