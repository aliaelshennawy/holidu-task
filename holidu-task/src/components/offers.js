import  React from "react";
import { OffersCard } from "./styles";

const Offers = ({ offersList }) => {

  return (
    <section>
      <h2>Offers</h2>
      {offersList && <ul>
        {offersList.map((offer) => (
          <OffersCard key={offer.id}>
            <h1>{offer.details.name}</h1>
          </OffersCard>
        ))}
      </ul>}
    </section>
  );
};

export default Offers;

