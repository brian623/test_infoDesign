import React from 'react';
import DatePicker from 'react-datepicker';

function CommonDatePicker({ selectedDate, onDateChange, placeholder }) {
  const handleDateChange = (date) => {
    onDateChange(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      placeholderText={placeholder}
      closeOnScroll={true}
      dateFormat="dd/MM/yyyy"
      className="rounded-2 border border-primary border-opacity-50"
    />
  );
}

export default CommonDatePicker;

