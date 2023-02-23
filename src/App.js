import { useQuery, gql } from '@apollo/client';
import CardsSection from './components/cards-section';
import Header from './components/header';
import Container from './components/container';

export const allProducts = gql`
  query Products {
    products(first: 1, channel: "uk") {
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
            onSale
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
          isAvailable
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
    <Container> 

      <Header />
      <CardsSection sortedData={sortedData}/>

    </Container>
  );
}

export default App;
