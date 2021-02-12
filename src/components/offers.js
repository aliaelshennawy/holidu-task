import  React from "react";
import { OffersCard , OffersWrapper} from "./styles";
import { Rate } from 'antd';

const Offers = ({ offersList }) => {

  return (
    <OffersWrapper>
      <h1>Offers</h1>
      {offersList && <ul>
        {offersList.map((offer) => (
          <OffersCard key={offer.id}>
              <a>
                <img src={offer.photos[0].t} alt={offer.shortName}/>
                <div className="card-details">
                  <div className="offer-details-wrapper">
                    <p className="offer-name">{offer.details.name}</p>
                    {/* <a className="location-link" href={`http://maps.google.com/?q=${offer.location.lat},${offer.location.lng}`}>{offer.location.name}</a> */}
                    <span className="location-link">{offer.location.name}</span>
                    <div className="appartment-details-wrapper">
                      <span>{offer.details.bedroomsCount} bedroom ,{offer.details.guestsCount} pers.</span>
                    </div>
                    <Rate disabled defaultValue={offer.rating.count} />
                    <p className="check-more">More Details</p>
                  </div>
                  <div className="offer-reseservations-wrapper"> 
                    <div className="price-wrapper">
                      <span className="total-price">{offer.price.total} {offer.price.currency} </span>
                      <span>{offer.price.daily} / night</span>
                      <div className="call-to-action">
                        <button>View Offer</button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
          </OffersCard>
        ))}
      </ul>}
    </OffersWrapper>
  );
};

export default Offers;

