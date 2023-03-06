import { useState } from 'react';
import { ISortedData, IProduct } from '../interfaces';
import {
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
} from './cards-section-styles';

export default function CardsSection({ sortedData }: ISortedData) {
  const [featuredCard, setFeaturedCard] = useState<IProduct>();
  const [viewDetails, setViewDetails] = useState({
    id: 0,
    isOpened: false,
  });

  //function to select featured card
  const selectCard = (id: number) => {
    setViewDetails({
      id: id,
      isOpened: true,
    });
    let selection = sortedData.find((item: IProduct) => item.node.id === id);
    setFeaturedCard(selection);
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

            <img src={featuredCard?.node.thumbnail?.url} alt={featuredCard?.node.thumbnail?.alt}></img>

            <Name>{featuredCard?.node?.name}</Name>

            <Category>{featuredCard?.node.category?.name}</Category>

            <Description>{featuredCard?.node?.seoDescription}</Description>
            <PriceWeightWrapper>
              <div>£ {featuredCard?.node.pricing.priceRange.stop.gross?.amount.toFixed(2)}</div>
              <WeightWrapper>
                <Weight>{featuredCard?.node.weight?.value.toFixed(2)}</Weight>
                <Unit>{featuredCard?.node.weight?.unit}</Unit>
              </WeightWrapper>
            </PriceWeightWrapper>

          </FeaturedCard>
        </>
      }

      <Cards>
        {sortedData?.map((item: IProduct) => (
          <Card key={item.node.id} onClick={() => selectCard(item.node.id)}>
            <img src={item.node.thumbnail?.url} alt={item.node.thumbnail?.alt}></img>
            <Name>{item.node.name}</Name>
          </Card>
        ))}
      </Cards>
    </>
  )
}
