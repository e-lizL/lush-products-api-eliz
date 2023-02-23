import { useQuery, gql } from '@apollo/client';
import CardsSection from './components/cards-section';
import Header from './components/header';
import Container from './components/container';

export const allProducts = gql`
  query Products {
    products(first: 20, channel: "uk") {
      edges {
        node {
          name
          id
          weight {
            value
            unit
          }            
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
