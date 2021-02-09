import  React from "react";

const Offers = ({ offersList }) => {
  console.log('OfferListInComponent', offersList);
  return (
    <section>
      <h2>Offers</h2>
      <ul>
        {offersList.map((offer) => (
          <li key={offer.id}>
            <h1>{offer.details.name}</h1>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Offers;

