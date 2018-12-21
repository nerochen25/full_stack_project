import {
  connect
}
from 'react-redux';

import CategoryBar from './category_bar';

import { fetchCategories } from '../../actions/category_actions';



const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.entities.categories,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: dispatch(fetchCategories()),
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBar);
