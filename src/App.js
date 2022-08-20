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
      <input type="text" placeholder='Height m' onChange={(e) => setHeight(e.target.value)}/>
      <input type="text" placeholder='Weight kg' onChange={(e) => setWeight(e.target.value)}/>
      <button onClick={() => setSubmitted(true)}>Submit</button>
    {submitted &&(
      <>
        <h2>Your BMI is: {bmindex}</h2> 
      </>
      )}
      
    </>

  )
}

const CalorieCalc = () =>{
  const [gender, setGender] = useState("male")
  const [activity, setActivity] = useState(1.2)
  const [age, setAge] = useState(18)
  const [height, setHeight] = useState(1.70)
  const [weight, setWeight] = useState(65)
  const [calories, setCalories] = useState(2000)


  function calculate(){
    let clacCalories = 0
    if(gender === "male"){
       clacCalories = activity * (10 * (weight) + 6.25 * (height) - 5 * (age) + 5)
       setCalories(clacCalories)
    }
  }

  return(
    <>
      <input type="text" placeholder='Height cm' onChange={(e) => setHeight(e.target.value)} />
      <input type="text" placeholder='Weight kg' onChange={(e) => setWeight(e.target.value)}/>
      <input type="number" onChange={(e) => setAge(e.target.value)}></input>
      <input type="radio" value="male" name='gender' id="male" checked="checked" onClick={(e) => setGender(e.target.value)}></input>
      <label for="male">Male</label>
      <input type="radio" value="female" name='gender' id="female" onClick={(e) => setGender(e.target.value)}></input>
      <label for="female">Female</label>
      <select id="activity" name="activity" onChange={(e) => setActivity(e.target.value)}>
        <option value={1.2}>Sedentary(No exercise)</option>
        <option value={1.375}>Lightly active(1-3 times per week)</option>
        <option value={1.55}>Moderatly active(3-5 times per week)</option>
        <option value={1.725}>Very Active(6-7 days per week)</option>
        <option value={1.9}>Extremely Active(hard labour job)</option>
      </select>
      <button onClick={calculate}>Calculate</button>

      <p>{calories}</p>
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
