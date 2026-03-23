import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  const { name, nameMarathi, icon, color, bgColor, serviceCount } = category;

  return (
    <button
      className="vc-catcard card-hover"
      onClick={() => navigate(`/services?category=${encodeURIComponent(name)}`)}
      aria-label={`Browse ${name} services`}
    >
      <div className="vc-catcard__icon" style={{ background: bgColor, color }}>
        <i className={`bi ${icon}`}></i>
      </div>
      <h6 className="vc-catcard__name">{name}</h6>
      <span className="vc-catcard__marathi">{nameMarathi}</span>
      <span className="vc-catcard__count">
        <i className="bi bi-people-fill me-1"></i>{serviceCount} providers
      </span>
    </button>
  );
};

export default React.memo(CategoryCard);