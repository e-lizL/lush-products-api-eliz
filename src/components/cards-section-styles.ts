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
  justify-content: center;
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
  @media (min-width: 800px) {
    padding: 25px 15px;
  }

  display: flex;
  gap: 30px;
  flex-direction: column;
  @media (min-width: ${ breakpoint }) {
    padding: 40px;
  }

  position: fixed;
  z-index: 99;

  width: 80%;
  @media (min-width: 600px) {
    width: 500px;
  }

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

export {
  Cards,
  Card,
  FeaturedCard,
  Name,
  Description,
  PriceWeightWrapper,
  WeightWrapper,
  Weight,
  Category,
  Unit,
  Overlay,
  CloseButton,
}
