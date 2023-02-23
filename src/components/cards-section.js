import styled from 'styled-components';

const Cards = styled.div`
  margin: 0 auto 50px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
  img {
    margin: 0 auto;
  } 
`;

const Card = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px 20px;
  border-radius: 8px;
  background: var(--light-grey);
`;

const Name = styled.div`
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const WeightWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const Weight = styled.div`
  font-size: 0.9rem;
`;

const Unit = styled.div`
  font-size: 0.9rem;
  text-transform: lowercase;
`;



export default function CardsSection({ sortedData }) {
  return (
    <Cards>
      {sortedData?.map(item => (
        <Card key={item.node.id}>
         
         <Name>{item.node.name}</Name>

         <WeightWrapper>
            <Weight>{item.node.weight?.value}</Weight>
            <Unit>{item.node.weight?.unit}</Unit>
          </WeightWrapper>
          
        </Card>
      ))}
    </Cards>
  )
}