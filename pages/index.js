import { Heading, Page } from "@shopify/polaris";

const Index = () => (
<Page
  fullWidth
  title="Sectional Product Builder"
  primaryAction={{content: 'New Sectional product'}}
  secondaryActions={[{content: 'Export'}]}
  pagination={{
    hasNext: true,
  }}
>
  <p>Wide page content</p>
</Page>
);

export default Index;
