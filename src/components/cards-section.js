import { useState } from 'react';
import styled from 'styled-components';

const breakpoint = "600px";

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
  padding: 20px 40px 45px;
  border-radius: 8px;
  background: var(--light-grey);
  &:hover, &:active, &:focus {
    background: var(--pink);
    color: var(--white);
  }
`;

const FeaturedCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  @media (min-width: ${ breakpoint }) {
    padding: 40px;
  }
  position: fixed;
  z-index: 99;
  /* to center card */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  div {
    &:hover, &:active, &:focus {
      background: var(--white);
      color: var(--black);
    }
  }
`;

const Name = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  font-family: 'Covered By Your Grace', cursive;
`;

const Description = styled.div`
  /* border: 1px solid red; */
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
  text-transform: lowercase;
`;

const Category = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
`;

const Unit = styled.div`
  font-size: 0.9rem;
  text-transform: lowercase;
`;


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.8;
  height: 100%;
  width: 100%;
  z-index: 90;
`;

const CloseButton = styled.button`
  padding: 8px;
  font-size: 1.1rem;
  width: 40px;
`;

export default function CardsSection({ sortedData }) {

  const [featuredCard, setFeaturedCard] = useState();

  const [viewDetails, setViewDetails] = useState({
    id: 0,
    isOpened: false,
  });

  const selectCard = (id) => {
    if (!viewDetails.isOpened) {
      setViewDetails({
        id: id,
        isOpened: true,
      });
    }
    let selection = sortedData.find(item => item.node.id === id);
    selection && setFeaturedCard(selection);
  };

  return (
    <>
      {viewDetails.isOpened && 
        <>
          <Overlay/>
          <FeaturedCard>
            <CloseButton onClick={() => setViewDetails({id: 0, isOpened: false})}>
              X
            </CloseButton>

           
              <img src={featuredCard.node.thumbnail?.url} alt={featuredCard.node.thumbnail?.alt}></img>

              <Name>{featuredCard.node?.name}</Name>

              <Category>{featuredCard.node.category?.name}</Category>
              <Description>{featuredCard.node?.seoDescription}</Description>
              <PriceWeightWrapper>
                <div>£{featuredCard.node.pricing.priceRange.stop.gross?.amount.toFixed(2)}</div>
               <WeightWrapper>
                  <Weight>{featuredCard.node.weight?.value.toFixed(2)}</Weight>
                  <Unit>{featuredCard.node.weight?.unit}</Unit>
                </WeightWrapper>
              </PriceWeightWrapper>
              

            <div>Test</div>
          </FeaturedCard>
        </>
      }

      <Cards>
        {sortedData?.map(item => (
          <Card key={item.node.id} onClick={() => selectCard(item.node.id)}>
            <img src={item.node.thumbnail?.url} alt={item.node.thumbnail?.alt}></img>
            <Name>{item.node.name}</Name>
          </Card>
        ))}
      </Cards>
    </>
  )
}
   

         
     