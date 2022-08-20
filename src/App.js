import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const BMI = () =>{
  const [height, setHeight] = useState(1.70)
  const [weight, setWeight] = useState(65)
  const [submitted, setSubmitted] = useState(false)
  let bmindex = weight / (height) ** 2
  return(
    <>
    {!submitted &&(
      <>
      <input type="text" placeholder='Height m' onChange={(e) => setHeight(e.target.value)}/>
      <input type="text" placeholder='Weight kg' onChange={(e) => setWeight(e.target.value)}/>
      <button onClick={() => setSubmitted(true)}>Submit</button>
      </>
      )}
      {submitted &&(
      <>
      <h2>Your BMI is {bmindex}</h2>
      <button onClick={() => setSubmitted(false)}>Edit</button>
      </>
      )}
    </>

  )
}

const CalorieCalc = () =>{
  return(
    <>
      <input type="text" placeholder='Height cm'/>
      <input type="text" placeholder='Weight kg'/>
      <input type="radio" value="male" id="male"></input>
      <label for="male">Male</label>
      <input type="radio" value="female" id="female"></input>
      <label for="female">Female</label>
      <select id="cars" name="cars">
        <option value="sedentary">Sedentary(No exercise)</option>
        <option value="light">Lightly active(1-3 times per week)</option>
        <option value="moderate">Moderatly active(3-5 times per week)</option>
        <option value="very">Very Active(6-7 days per week)</option>
        <option value="extreme">Extremely Active(hard labour job)</option>
    </select>
    </>

  )
}



function App() {

  const [calculator, setCalculator] = useState("BMI")

  return (
    <>
    {calculator === "BMI" &&(<BMI/>)}
    {calculator === "CC" &&(<CalorieCalc/>)}
    

    <ul>
      <li><button onClick={() =>{setCalculator("BMI")}}>BMI Calculator</button></li>
      <li><button onClick={() =>{setCalculator("CC")}}>Calorie Calculator</button></li>


    </ul>
    
    </>
    
  );
}

export default App;
