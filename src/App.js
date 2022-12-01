/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import './App.css';
import logOfTen from './helpers/helper';

const App = () => {
  const HOY = new Date();
  const CONVERT = 1000 * 60 * 60 * 24;
  const [NACIMIENTO, setNACIMIENTO] = useState('');
  const [style, setStyle] = useState('dark');

  const diffDays = () => {
    const days = Math.trunc((HOY - new Date(NACIMIENTO)) / CONVERT);
    return days;
  };

  const nextDate = () => {
    const date2 = HOY.getTime() + ((logOfTen(diffDays()) - diffDays()) * CONVERT);
    return date2;
  };

  const mathBirthday = () => Math.ceil(Math.log10(diffDays()));

  const handleChange = (event) => {
    setNACIMIENTO(event.target.value);
    mathBirthday();
  };

  const mathBirthdayDate = new Date(nextDate());

  const changeStyle = (e) => {
    const newStyle = e.target.value;
    if (newStyle !== '') setStyle(newStyle);
  };

  return (
    <div className={`App App-${style}`}>
      <div className={`selector selector-${style}`}>
        <label htmlFor="style">Select a style:</label>
        <select name="style" onChange={(e) => changeStyle(e)}>
          <option value="dark">Dark</option>
          <option value="light">Light Red</option>
          <option value="minimal">Minimal</option>
        </select>
      </div>
      <header className={`App-header header-${style}`}>
        <h1>
          Hi you there!!!
          <br />
          When is your next
          <br />
          Math Birthday?
        </h1>
        <span className={`span-${style}`} style={NACIMIENTO.length !== 0 ? { display: 'none' } : { display: 'block' }}>Please enter your date of birth!</span>
        <input
          className={`date date-${style}`}
          type="date"
          onChange={handleChange}
          required
        />
        <p style={NACIMIENTO.length !== 0 ? { display: 'block' } : { display: 'none' }}>
          Your next Math Birthday is:
          {' '}
          {mathBirthdayDate.getDate()}
          {' - '}
          {mathBirthdayDate.getMonth()}
          {' - '}
          {mathBirthdayDate.getFullYear()}
          <br />
          And is your
          {' '}
          {mathBirthday()}
          {' '}
          Math Birthday!
        </p>
      </header>
      <a className={`App-link link-${style}`} href="https://github.com/AntonioHincapie/math_birthdays" target="_blanck">Go to the source code</a>
    </div>
  );
};

export default App;
