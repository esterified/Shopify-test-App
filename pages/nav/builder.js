import React from 'react';
import { Page, Navigation,ResourceItem,Avatar,ResourceList,TextStyle, Icon, TextField, Card, Button, ButtonGroup } from "@shopify/polaris";
import {HomeMajor, ImagesMajor,ThemesMajor, SearchMajor, ProductsMajor, FilterMajor, MobilePlusMajor} from '@shopify/polaris-icons';
import {Provider, ResourcePicker} from '@shopify/app-bridge-react';


const SidebarMarkup=(      
  <div className='left--col'>  
  <Navigation location="/">
  <Navigation.Section style={{ background: 'red' }}
    items={[
      {
        url: '/',
        label: 'Dashboard',
        icon: HomeMajor,
      },
      {
        url: '/',
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
  </Navigation>
  </div>
  );

const TitleMarkup=(
  <h1 className='main-title'>Dashboard</h1>
);

class Index extends React.Component {

  state = { open: false ,SearchVal: ''};
  render() {
    return (
    <Page fullWidth>  
<h1>Hello</h1>

    </Page>
    )
  }
};


export default Index;
