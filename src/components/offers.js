import React from "react";
import { OffersCard, OffersWrapper } from "./styles";
import { Rate } from "antd";
import SwiperCore, { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Offers = ({ offersList }) => {
  SwiperCore.use([Navigation]);
  return (
    <OffersWrapper>
      {offersList && (
        <ul>
          {offersList.map((offer) => (
            <OffersCard key={offer.id}>
              <div className="offer-wrapper">
                <Swiper navigation slidesPerView={1}>
                  {offer?.photos.map((photo) => (
                    <SwiperSlide>
                      <img
                        src={photo.t}
                        srcSet={photo.m}
                        alt={offer.shortName}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="card-details">
                  <div className="offer-details-wrapper">
                    <p className="offer-name">{offer?.details?.name}</p>
                    <a
                      href={`http://maps.google.com/?q=${offer?.location?.lat},${offer?.location?.lng}`}
                      target="_blank"
                      rel="noreferrer"
                      className="location-link"
                    >
                      {offer?.location?.name}
                    </a>
                    <div className="appartment-details-wrapper">
                      <span>
                        {offer?.details?.bedroomsCount} bedroom.,{" "}
                        {offer?.details?.guestsCount} pers.
                      </span>
                    </div>
                    <Rate disabled defaultValue={offer.rating.value} />
                  </div>
                  <div className="offer-reseservations-wrapper">
                    <div className="price-wrapper">
                      <span className="total-price">
                        {offer?.price?.total} {offer?.price?.currency}{" "}
                      </span>
                      <span>{offer?.price?.daily} / night</span>
                      <div className="call-to-action">
                        <a
                          href={
                            offer.outboundLink
                              ? `https://holidu.com${offer.outboundLink}`
                              : `https://holidu.com${offer.internalLink}`
                          }
                          target="blank"
                        >
                          View Offer
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OffersCard>
          ))}
        </ul>
      )}
    </OffersWrapper>
  );
};

export default Offers;
