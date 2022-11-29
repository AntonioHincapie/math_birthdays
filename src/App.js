import { useState } from 'react';
import './App.css';
import logOfTen from './helpers/helper';
import logo from './helpers/images/bd.png';

const App = () => {
  const HOY = new Date();
  const CONVERT = 1000 * 60 * 60 * 24;
  const [NACIMIENTO, setNACIMIENTO] = useState('');
  const [style, setStyle] = useState('');

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
    <div className={`App ${style}`}>
      <div className="selector">
        <select onChange={(e) => changeStyle(e)}>
          <option value="">Select your style</option>
          <option value="dark">Dark</option>
          <option value="ligth">Ligth</option>
          <option value="minimal">Minimal</option>
        </select>
      </div>
      <header className="App-header">
        <img className="logo" src={logo} alt="logo" />
        <h1>Math Birthdays!!!</h1>
        <input
          className="date"
          type="date"
          onChange={handleChange}
          required
        />
        <p className={NACIMIENTO.length !== 0 ? 'hide' : 'block'}>Please enter your date of birth</p>
        <p className={NACIMIENTO.length !== 0 ? 'block' : 'hide'}>
          On
          {' '}
          {mathBirthdayDate.getDate()}
          /
          {mathBirthdayDate.getMonth()}
          /
          {mathBirthdayDate.getFullYear()}
          <br />
          Is your
          {' '}
          {mathBirthday()}
          {' '}
          next Math Birthday!
          {' '}
          <br />
          Congrats!!!
        </p>
      </header>
      <a className="App-link" href="https://github.com/AntonioHincapie/math_birthdays" target="_blanck">Go to the source code</a>
    </div>
  );
};

export default App;
