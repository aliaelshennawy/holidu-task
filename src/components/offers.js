import  React from "react";
import { OffersCard , OffersWrapper} from "./styles";
import { Rate , Pagination} from 'antd';
import SwiperCore, { Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';



const Offers = ({ offersList }) => {
  SwiperCore.use([Navigation]);
  return (
    <OffersWrapper>
      {offersList && <ul> 
        {offersList.map((offer) => (
          <OffersCard key={offer.id}>
              <div className="offer-wrapper">
              <Swiper
                navigation
                slidesPerView={1}
              >
                <SwiperSlide><img src={offer.photos[0].t} alt={offer.shortName}/></SwiperSlide>
                <SwiperSlide><img src={offer.photos[1].t} alt={offer.shortName}/></SwiperSlide>
                <SwiperSlide><img src={offer.photos[2].t} alt={offer.shortName}/></SwiperSlide>
                <SwiperSlide><img src={offer.photos[3].t} alt={offer.shortName}/></SwiperSlide>
              </Swiper>
                <div className="card-details">
                  <div className="offer-details-wrapper">
                    <p className="offer-name">{offer?.details?.name}</p>
                    {/* <a className="location-link" href={`http://maps.google.com/?q=${offer.location.lat},${offer.location.lng}`}>{offer.location.name}</a> */}
                    <span className="location-link">{offer?.location?.name}</span>
                    <div className="appartment-details-wrapper">
                      <span>{offer?.details?.bedroomsCount} bedroom ,{offer?.details?.guestsCount} pers.</span>
                    </div>
                    <Rate disabled defaultValue={offer.rating.count} />
                  </div>
                  <div className="offer-reseservations-wrapper"> 
                    <div className="price-wrapper">
                      <span className="total-price">{offer?.price?.total} {offer?.price?.currency} </span>
                      <span>{offer?.price?.daily} / night</span>
                      <div className="call-to-action">
                        <a href={`http://maps.google.com/?q=${offer?.location?.lat},${offer?.location?.lng}`} target="_blank">View Location</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </OffersCard>
        ))}
      </ul>}
    </OffersWrapper>
  );
};

export default Offers;

