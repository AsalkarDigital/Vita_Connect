export const filterServices = (services, { search, category, area, sortBy } = {}) => {
  let filtered = [...services];

  if (search && search.trim()) {
    const term = search.toLowerCase().trim();
    filtered = filtered.filter(
      (s) =>
        s.name.toLowerCase().includes(term) ||
        s.category.toLowerCase().includes(term) ||
        s.description.toLowerCase().includes(term) ||
        s.area.toLowerCase().includes(term) ||
        s.specialties.some((sp) => sp.toLowerCase().includes(term))
    );
  }

  if (category && category !== 'all') {
    filtered = filtered.filter((s) => s.category === category);
  }

  if (area && area !== 'all') {
    filtered = filtered.filter((s) => s.area === area);
  }

  if (sortBy === 'experience') {
    filtered.sort((a, b) => b.experienceYears - a.experienceYears);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else {
    filtered.sort((a, b) => {
      if (a.isFeatured === b.isFeatured) return b.rating - a.rating;
      return a.isFeatured ? -1 : 1;
    });
  }

  return filtered;
};