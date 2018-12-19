export const fetchCategory = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/categories/${id}`,
  });
};

export const fetchCategories = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/categories',
  });
};
