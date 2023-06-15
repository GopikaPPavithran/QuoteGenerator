import React, { useState, useEffect } from 'react';

const DropdownMenu = ({ onSelectTag }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://api.quotable.io/tags');
      const data = await response.json();
      setItems(data.map((tag) => tag.name));
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    onSelectTag(selectedValue); // Pass selected tag back to parent component
  };

  return (
    <div>
      <div>
        <select className="dropdown" onChange={handleSelectChange}>
          {items.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownMenu;
