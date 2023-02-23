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
  padding: 40px 55px;
  border-radius: 8px;
  background: var(--light-grey);
`;

const Name = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  font-family: 'Covered By Your Grace', cursive;
`;

const PriceWeightWrapper = styled.div`
  display: flex;
  gap: 80px;
`;

const WeightWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const Weight = styled.div`
  font-size: 0.9rem;
`;

const Category = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
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

        <img src={item.node.thumbnail?.url} alt={item.node.thumbnail?.alt}></img> 
         
         <Name>{item.node.name}</Name>

         <Category>{item.node.category?.name}</Category>

        <PriceWeightWrapper>
          <div>£{item.node.pricing.priceRange.stop.gross?.amount.toFixed(2)}</div>

          <WeightWrapper>
            <Weight>{item.node.weight?.value.toFixed(2)}</Weight>
            <Unit>{item.node.weight?.unit}</Unit>
          </WeightWrapper>
        </PriceWeightWrapper>
         
        </Card>
      ))}
    </Cards>
  )
}