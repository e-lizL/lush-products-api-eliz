import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';

export const allProducts = gql`
  query Products {
    products(first: 20, channel: "uk") {
      edges {
        node {
          name
          id
          slug
          description
          category {
            name
          }
          rating
        }
      }
    }
  }
`;

const Card = styled.div`
  margin: 20px auto;
`;

const Text = styled.div`
  margin: 10px;
`;

function App() {
  const { loading, error, data } = useQuery(allProducts);

  if(loading) return(<>Loading...</>);
  if(error) return(<>{JSON.stringify(error)}</>)

  const sortedData = data.products.edges;

  console.log(sortedData)

  return (
    <div className="container"> 

      <h1>Products</h1>

      {sortedData?.map(item => (
        <Card key={item.node.id}>
          <Text>{item.node.name}</Text>
          <Text>{item.node.rating}</Text>
        </Card>
      ))}

    </div>
  );
}

export default App;
