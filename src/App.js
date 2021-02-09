import React, { useState } from 'react';
import style from './App.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendar } from 'react-icons/fa';

export default function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formattedDate, setFormattedDate] = useState('');

  const setDate = date => {
    setSelectedDate(date);
    setFormattedDate(`${ ('0' + date.getDate()).slice(-2) }.${ ('0' + (date.getMonth() + 1)).slice(-2) }.${ date.getFullYear() }`);
  }

  return (
    <div className = { style.app }>
      <p>{ formattedDate }</p>
      <label>
        <FaCalendar/>
        <DatePicker popperPlacement = 'center' showPopperArrow = { false } selected = { selectedDate } onChange = { setDate } minDate = { new Date() }/>
      </label>
    </div>
  );
}
