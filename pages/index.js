import React from 'react';
import { Page,
  IndexTable,
  Navigation,
  DataTable,
  ResourceItem,Avatar,ResourceList,
  TextStyle, Icon, TextField, Card, 
  Button,useIndexResourceState,
  ButtonGroup 
} from "@shopify/polaris";
import {HomeMajor, ImagesMajor,ThemesMajor, SearchMajor, ProductsMajor, FilterMajor, MobilePlusMajor} from '@shopify/polaris-icons';



const SidebarMarkup=(      
  <div className='left--col'>  
  <Navigation location="/">
  <Navigation.Section
    items={[
      {
        url: '/nav/builder',
        label: 'Dashboard',
        icon: HomeMajor,
      },
      {
        url: '/',
        label: 'Sectional Product builder',
        icon: ThemesMajor
      },
      {
        label: 'Product Sections',
        icon: ProductsMajor,
        onClick: ()=>{
          alert('clicked');
        }
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
function TitleHead(props){
  return(
    <h1 className='main-title'>{props.text}</h1>
  );
}

const rows = [
  ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
  ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
  [
    'Navy Merino Wool Blazer with khaki chinos and yellow belt',
    '$445.00',
    124518,
    32,
    '$14,240.00',
  ],
];

class Index extends React.Component {

  state = { open: false ,SearchVal: ''};
  render() {
    return (
    <Page fullWidth>  
      {SidebarMarkup}
      <div className='right--col'>
        <div style={{ width: '100%',float:'left' }} className='Header-cust'>
          <TitleHead text="Sectional Product builder"/>
          <div className='search-input-wrapper'>
            <TextField
              type="Search"
              value={this.state.SearchVal}
              onChange={(value)=>{
                this.setState({SearchVal: value})
              }}
              placeholder="Search for products"
              autoComplete="off"
            />
            <Icon
              source={SearchMajor}
              color="base" />
          </div>
          <Button icon={FilterMajor} className="test-class" onClick={()=>{alert('clicked')}}></Button>
          <span className="new-sectional-btn"><Button icon={MobilePlusMajor} primary>New Sectional Product</Button></span>

        </div>

        <div style={{ width: '100%',float:'left' }}>
          <Card>
            <DataTable
              columnContentTypes={[
                'text',
                'numeric',
                'numeric',
                'numeric',
                'numeric',
              ]}
              headings={[
                'Product',
                'Price',
                'SKU Number',
                'Net quantity',
                'Net sales',
              ]}
              rows={rows}
              totals={['', '', '', 255, '$155,830.00']}
            />
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


      </div>

    </Page>
    )
  }
};


export default Index;
