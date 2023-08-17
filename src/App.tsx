import React, { useReducer } from 'react';

interface Item {
  option: string;
  date: Date | null |string;
  expense: string;
  amount: any ;
}

interface State {
  formData: Item;
  items: Item[];
}

type Action =
  | { type: 'UPDATE_FORM'; payload: Partial<Item> }
  | { type: 'ADD_ITEM' };

const initialState: State = {
  formData: {
    option: 'cash',
    date: null,
    expense: 'market',
    amount: 0,
  },
  items: [],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'UPDATE_FORM':
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    case 'ADD_ITEM':
      return {
        formData: {
          option: 'cash',
          date: null,
          expense: 'market',
          amount: 0,
        },
        items: [...state.items, state.formData],
      };
    default:
      return state;
  }
}



const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({
      type: 'UPDATE_FORM',
      payload: { [name]: value },
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: 'ADD_ITEM' });
    

  };

   
 
 
  const totalExpense = state.items.reduce((total,kendall)=> total + parseInt(isNaN(kendall.amount) ? 0: kendall.amount, 10),0)


  return (
    <div>
      <h1>Expense Tracker</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor='option'></label>
        <select
        name='option' 
        defaultValue={state.formData.option} 
        onChange={handleChange}>
                <option value='cash'>Cash</option>
                <option value='card'>Card</option>
                <option value='coin'>Coin</option>
                <option value='other'>Other</option>
        </select>
        <label htmlFor='expense'></label>
        <select
        name='expense' 
        defaultValue={state.formData.expense} 
        onChange={handleChange}>
                <option value='market'>Market</option>
                <option value='car'>Car</option>
                <option value='subscription'>Subscription</option>
                <option value='othher'>Other</option>
        </select>
        
        <label htmlFor='amount'></label>
        <input
          type='number'
          name="amount"
          onChange={handleChange}
          placeholder="Amount"
        />
        <label htmlFor='date'></label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          placeholder="Date"

        />


        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>List of Expenses</h2>
      <div>
      <ul>
         {state.items.map((item, index) => (

              <li key={index}>
                <strong>Option:</strong> {item.option},{' '}
                <strong>Expense:</strong> {item.expense},{' '}
                <strong>Amount:</strong> {item.amount},{' '}
                <strong>Date:</strong> {item.date?.toLocaleString()},{' '}
              </li>
          ))}
        </ul>
      </div>
      <div>
        sum : {totalExpense}
      </div>
    </div>
    </div>
  );
};

export default App;
