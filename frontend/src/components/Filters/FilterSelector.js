import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function FilterSelector({ filters, onFilterChange }) {
  const [title, setTitle] = useState("Seleccionar Filtro");

  const handleFilterChange = (eventKey) => {
    setTitle(eventKey); // Actualizar el título con la opción seleccionada
    onFilterChange(eventKey);
  }

  return (
    <div>
      <DropdownButton
        title={title}
        id="filter-dropdown"
        onSelect={handleFilterChange}
      >
        {filters.map((filter) => (
          <Dropdown.Item key={filter} eventKey={filter}>
            {filter}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}

export default FilterSelector;
