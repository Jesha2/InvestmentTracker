import {useState} from 'react';

  const Form = (props) => {
    // we can actaully put this in side the setstate for userinput, but then we have to set it again when we click reset button, so instead of copy paste, we bring it out
//we put quotes on 'current-savings', bcoz we cannot use "-" in declaring a var, so we put as quotes, for duration we don't have to. so while extracting we will need to use bracket notation instead of Dot notation

    const initialUserInput = {
        'current-savings': 10000,
        'yearly-contribution': 1200,
        'expected-return': 7,
        duration: 10,
      };
      
    const [userInput, setUserInput] = useState(initialUserInput);
  
    const submitHandler = (event) => {
      event.preventDefault();
      props.onCalculate(userInput);
    };
  
    const resetHandler = () => {
      setUserInput(initialUserInput);
    };
  // we are using one input change handler for all the 4 entries as all numbers, we can deal it easily
    const inputChangeHandler = (input, value) => {
      setUserInput((prevInput) => {
        return {
          ...prevInput,
          [input]: +value,// since all the values are number we can use +, if one of the value is a String , it will store as NaN
        };
      });
    }
  
    return (
      <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            {/* here in onchange we are not  pssing inputChangeHandler with the args becoz then it will exceute,so we sending it thruu an annonymous A.fn so that we will just point to the function. this is the way to do if we have to pass args to a function when clicked and we have values to pass */}
            <input
              onChange={(event) =>
                inputChangeHandler('current-savings', event.target.value)
              }
              value={userInput['current-savings']}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={(event) =>
                inputChangeHandler('yearly-contribution', event.target.value)
              }
              value={userInput['yearly-contribution']}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(event) =>
                inputChangeHandler('expected-return', event.target.value)
              }
              value={userInput['expected-return']}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={(event) =>
                inputChangeHandler('duration', event.target.value)
              }
              value={userInput['duration']}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <button onClick={resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    );
  };
  
  export default Form;
