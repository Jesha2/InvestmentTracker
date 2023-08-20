// import logo from './assets/investment-calculator-logo.png';
import {useState} from "react";
import Header from './components/Header';
import Form from './components/Form';
import ResultsTable from './components/ResultsTable';


function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {//first time when app is called userimput is null, so this check
    let currentSavings = +userInput['current-savings'];//+ is used to convert to number but since we already  put + in the forms.js before making the usereobject ,its already a number and i dont think we need to do it here again
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />

      <Form onCalculate={calculateHandler} />

      {!userInput && <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}
      {userInput && <ResultsTable data={yearlyData} initialInvestment={userInput['current-savings']} />}
    </div>
  );
}

export default App;


// function App() {
  
//   const calculateHandler = (userInput) => {
//     // Should be triggered when form is submitted
//     // You might not directly want to bind it to the submit event on the form though...

//     const yearlyData = []; // per-year results

//     let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
//     const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
//     const expectedReturn = +userInput['expected-return'] / 100;
//     const duration = +userInput['duration'];

//     // The below code calculates yearly results (total savings, interest etc)
//     for (let i = 0; i < duration; i++) {
//       const yearlyInterest = currentSavings * expectedReturn;
//       currentSavings += yearlyInterest + yearlyContribution;
//       yearlyData.push({
//         // feel free to change the shape of the data pushed to the array!
//         year: i + 1,
//         yearlyInterest: yearlyInterest,
//         savingsEndOfYear: currentSavings,
//         yearlyContribution: yearlyContribution,
//       });
//     }

//     // do something with yearlyData ...
//   };

//   return (
//     <div>
//       {/* <header className="header">
//         <img src={logo} alt="logo" />
//         <h1>Investment Calculator</h1>
//       </header> */}
//       <Header />
//       <Form  onCalculate={calculateHandler}/>

//       {/* Todo: Show below table conditionally (only once result data is available) */}
//       {/* Show fallback text if no data is available */}

//       <Table onCalculate={calculateHandler}/>
//     </div>
//   );
// }

// export default App;
