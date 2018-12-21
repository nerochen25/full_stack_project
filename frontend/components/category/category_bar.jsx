import React from 'react';

class CategoryBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchCategories();
  };

  render() {
    let categories = Object.values(this.props.categories).map((category) => {
      return (
        <li key={`${category.id}`} className="category-list">
          <a className="category-a">{category.name}</a>
        </li>
      )
    });

    return (
      <div className="index-categories-bar">
        <div className="grid-categories-container">
          <div className="grid-categories-box">
            <div className="category-bar">
              <ul className="categories-ul">
                {categories}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryBar;
