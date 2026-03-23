import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';
import Badge from './Badge';
import './ServiceCard.css';

const renderStars = (rating) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  for (let i = 0; i < full; i++) stars.push(<i key={`f${i}`} className="bi bi-star-fill"></i>);
  if (half) stars.push(<i key="h" className="bi bi-star-half"></i>);
  const empty = 5 - full - (half ? 1 : 0);
  for (let i = 0; i < empty; i++) stars.push(<i key={`e${i}`} className="bi bi-star"></i>);
  return stars;
};

const ServiceCard = ({ service }) => {
  const {
    id, name, category, experience, area, phone, image,
    description, rating, reviewCount, isFeatured, isVerified,
  } = service;

  return (
    <div className="vc-scard card-hover">
      <div className="vc-scard__img-wrap">
        <img src={image} alt={name} loading="lazy" className="vc-scard__img" />
        <div className="vc-scard__badges">
          {isVerified && (
            <Badge variant="verified">
              <i className="bi bi-patch-check-fill"></i> Verified
            </Badge>
          )}
          {isFeatured && (
            <Badge variant="featured">
              <i className="bi bi-star-fill"></i> Featured
            </Badge>
          )}
        </div>
      </div>

      <div className="vc-scard__body">
        <Badge variant="category">{category}</Badge>
        <h5 className="vc-scard__name mt-2 mb-1">{name}</h5>

        <div className="vc-scard__rating stars mb-2">
          {renderStars(rating)}
          <span className="vc-scard__rating-text">
            {rating} ({reviewCount})
          </span>
        </div>

        <div className="vc-scard__meta">
          <span><i className="bi bi-geo-alt"></i> {area}</span>
          <span><i className="bi bi-briefcase"></i> {experience}</span>
        </div>

        <p className="vc-scard__desc">{description}</p>

        <div className="vc-scard__actions">
          <WhatsAppButton phone={phone} size="sm" label="WhatsApp" />
          <Link to={`/service/${id}`} className="btn btn-outline-custom btn-sm btn-animate">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ServiceCard);