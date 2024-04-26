export const getSummaryStats = () => {
  return Promise.resolve({
    promotions: 420,
    categories: 8,
    newCompanies: 28,
    activeCompanies: 670,
  });
};

export const getSummarySales = () => {
  const items = [];

  for (let index = 0; index < 6; index++) {
    items.push({
      companyId: index + 1,
      companyTitle: 'Costco Wholesale',
      sold: 459,
      income: 600,
    });
  }

  return Promise.resolve(items);
};

export const getCategories = () => {
  return Promise.resolve([
    { categoriesId: 1, categoryTitle: 'Products', count: 4 },
    { categoriesId: 2, categoryTitle: 'Products', count: 8 },
    { categoriesId: 3, categoryTitle: 'Products', count: 26 },
    { categoriesId: 4, categoryTitle: 'Products', count: 5 },
    { categoriesId: 5, categoryTitle: 'Products', count: 20 },
    { categoriesId: 6, categoryTitle: 'Products', count: 14 },
    { categoriesId: 7, categoryTitle: 'Products', count: 7 },
    { categoriesId: 8, categoryTitle: 'Products', count: 9 },
  ]);
};

export const getCountries = () => {
  return Promise.resolve([
    { countryId: 1, country: 'Canada', count: 4 },
    { countryId: 2, country: 'USA', count: 4 },
    { countryId: 3, country: 'Italia', count: 2 },
    { countryId: 4, country: 'Ukraine', count: 2 },
    { countryId: 5, country: 'Spain', count: 2 },
  ]);
};

export const getPromotion = () => {
  let item = [];

  for (let index = 0; index < 7; index++) {
    item.push({
      id: index + 1,
      companyName: 'Costco Wholesale',
      promotionName: 'Lorem ms akfkv',
      discount: 40,
    });
  }
  return Promise.resolve(item);
};
