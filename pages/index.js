import React from 'react';
import { Page, Navigation,ResourceItem,Avatar,ResourceList,TextStyle, Heading, Layout, Card } from "@shopify/polaris";
import {HomeMajor, ImagesMajor,ThemesMajor, ProductsMajor} from '@shopify/polaris-icons';
import {Provider, ResourcePicker} from '@shopify/app-bridge-react';

class Index extends React.Component {
  state = { open: false };
  render() {
    return (
    <Page>  
      <div style={{ width: '33.33%', float: 'left' }}>  <Navigation location="/">
      <Navigation.Section style={{ background: 'red' }}
        items={[
          {
            url: '/path/to/place',
            label: 'Dashboard',
            icon: HomeMajor,
          },
          {
            url: '/path/to/place',
            label: 'Sectional Product builder',
            icon: ThemesMajor
          },
          {
            url: '/path/to/place',
            label: 'Product Sections',
            icon: ProductsMajor,
          },
          {
            url: '/path/to/place',
            label: 'Ideas gallery',
            icon: ImagesMajor,
            badge: '3',
          }
        ]}
      />
      </Navigation></div>
      <div style={{ width: '66.66%',float:'left' }}>
        <Card title="Online store dashboard" sectioned>
          <p>View a summary of your online store’s performance.</p>
        </Card>
        <Card>
          <ResourceList
            resourceName={{singular: 'customer', plural: 'customers'}}
            items={[
              {
                id: 100,
                url: 'customers/341',
                name: 'Mae Jemison',
                location: 'Decatur, USA',
              },
              {
                id: 200,
                url: 'customers/256',
                name: 'Ellen Ochoa',
                location: 'Los Angeles, USA',
              },
            ]}
            renderItem={(item) => {
              const {id, url, name, location} = item;
              const media = <Avatar customer size="medium" name={name} />;

              return (
                <ResourceItem
                  id={id}
                  url={url}
                  media={media}
                  accessibilityLabel={`View details for ${name}`}
                >
                  <h3>
                    <TextStyle variation="strong">{name}</TextStyle>
                  </h3>
                  <div>{location}</div>
                </ResourceItem>
              );
            }}
          />
        </Card>
      </div>

    </Page>
    )
  }
};


export default Index;
