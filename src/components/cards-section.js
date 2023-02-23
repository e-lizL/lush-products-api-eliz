import styled from 'styled-components';

const StyledCards = styled.div`
  border: 1px solid var(--black);
  margin: 0 auto 50px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  img {
    margin: 0 auto;
  } 
`;

const Card = styled.div`
  margin: 20px auto;
  border: 1px solid green;
`;

const Text = styled.div`
  margin: 10px;
`;

export default function CardsSection({ sortedData }) {
  return (
    <StyledCards>
      {sortedData?.map(item => (
        <Card key={item.node.id}>
          <Text>{item.node.name}</Text>
          <Text>{item.node.rating}</Text>
        </Card>
      ))}
    </StyledCards>
  )
}