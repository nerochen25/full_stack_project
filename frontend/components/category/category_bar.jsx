import React from 'react';
import { Link } from 'react-router-dom';


class CategoryBar extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    let categories = Object.values(this.props.categories).map((category) => {
      return (
        <Link key={`${category.id}`} to={`/categories/${category.id}`}>
        <li className="category-list">
          <p className="category-a">{category.name}</p>
        </li>
      </Link>
    );
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
