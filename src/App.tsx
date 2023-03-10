import { useQuery, gql } from '@apollo/client';
import CardsSection from './components/cards-section';
import Layout from './components/layout';

export const allProducts = gql`
  query Products {
    products(first: 10, channel: "uk") {
      edges {
        node {
          id
          thumbnail {
            url
            alt
          }
          media {
            url
            alt
          }
          name
          category {
            name
          }
          pricing {
            priceRange {
              stop {
                gross {
                  amount
                }
              }
            }
          }
          weight {
            value
            unit
          }
          seoDescription
        }
      }
    }
  }
`;


function App() {
  const { loading, error, data } = useQuery(allProducts);

  if(loading) return(<>Loading...</>);
  if(error) return(<>{JSON.stringify(error)}</>)

  const sortedData = data.products.edges;

  console.log(sortedData)

  return (
    <Layout> 
      <CardsSection sortedData={sortedData}/>
    </Layout>
  );
}

export default App;
