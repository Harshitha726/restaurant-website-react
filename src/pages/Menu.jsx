import React, { useState, useMemo } from 'react';
import menuData from '../data/menuData';

const categories = ['all', 'coffee', 'breakfast', 'mains', 'dessert', 'tiffins', 'evening-tiffins', 'lunch', 'chinese', 'milkshakes'];

const categoryLabels = {
  all: 'All',
  coffee: 'Coffee',
  breakfast: 'Breakfast',
  mains: 'Mains',
  dessert: 'Dessert',
  tiffins: 'Tiffins',
  'evening-tiffins': 'Evening Tiffins',
  lunch: 'Lunch',
  chinese: 'Chinese',
  milkshakes: 'Milkshakes',
};

function Menu() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const filtered = useMemo(() => {
    return menuData.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'all' || item.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section>
      <div className="container-narrow">
        <h1>Menu</h1>

        <div className="menu-controls">
          <input
            type="text"
            className="menu-search"
            placeholder="Search the menu..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="filter-pills">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-pill ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 && <p>No dishes match your search.</p>}

        <div className="row">
          {filtered.map(item => (
            <div className="col-lg-6" key={item.id}>
              <div className="menu-item">
                <img src={item.img} alt={item.name} />
                <div className="info">
                  <div className="top-row">
                    <h5>{item.name}</h5>
                    <span className="price">₹{item.price}</span>
                  </div>
                  <p>{item.desc}</p>
                  {item.tag && <span className="tag">{item.tag}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;