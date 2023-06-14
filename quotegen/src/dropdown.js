import React, { useState, useEffect } from 'react';

const DropdownMenu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://api.quotable.io/tags'); // Replace with your API endpoint
      const data = await response.json();
      console.log(data);
      setItems(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Dropdown Menu</h1>
      <div >
      <select className="button">
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
};

export default DropdownMenu;
