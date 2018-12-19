import * as ApiUtil from '../util/category_api_util';

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const receiveCategory = (category) => {
  return {
    type: RECEIVE_CATEGORY,
    category,
  };
};

export const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  };
};

export const fetchCategory = (id) => {
  return dispatch => {
    return ApiUtil.fetchCategory(id).then((payload) => {
      return dispatch(receiveCategory(payload))
    });
  };
};

export const fetchCategories = () => {
  return dispatch => {
    return ApiUtil.fetchCategories().then((categories) => {
      return dispatch(receiveCategories(categories));
    });
  };
};
