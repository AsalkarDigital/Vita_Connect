import React from 'react';
import { categories } from '../../data/categories';
import CategoryCard from '../ui/CategoryCard';
import SectionHeader from '../ui/SectionHeader';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const CategoriesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding" style={{ background: 'var(--bg-white)' }} ref={ref}>
      <div className="container">
        <div className="fade-in-up">
          <SectionHeader
            title="Browse by Category"
            subtitle="Explore our popular service categories to find exactly what you need"
          />
        </div>
        <div className="row g-3 g-md-4 stagger-children">
          {categories.map((cat) => (
            <div key={cat.id} className="col-6 col-md-4 col-lg-3 fade-in-up">
              <CategoryCard category={cat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;