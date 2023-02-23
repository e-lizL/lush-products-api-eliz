import styled from 'styled-components';

const StyledCard = styled.div`
  border: 1px solid var(--black);
  margin-top: 50px;
`;

const Card = styled.div`
  margin: 20px auto;
`;

const Text = styled.div`
  margin: 10px;
`;

export default function CardsSection({ sortedData }) {
  return (
    <StyledCard>
      {sortedData?.map(item => (
        <Card key={item.node.id}>
          <Text>{item.node.name}</Text>
          <Text>{item.node.rating}</Text>
        </Card>
      ))}
    </StyledCard>
  )
}