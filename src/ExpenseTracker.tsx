import React from 'react';
interface Props{
  expense:string,
  amount:number | null,
  date:Date | null
  option:string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    formData: {
    option: string;
    date: Date | undefined;
    expense: string;
    amount: number;
  };
}


export const ExpenseTracker: React.FC<Props> = (props) =>{  
    return(
        <div>
            <form onSubmit={props.handleSubmit} >
            <label htmlFor='type'> Type</label>
            <select name='option' defaultValue={props.formData.option} onChange={props.handleChange}>
                <option value='cash'>Cash</option>
                <option value='card'>Card</option>
                <option value='coin'>Coin</option>
                <option value='other'>Other</option>
            </select>
            <label htmlFor='date'>Date</label>
            <input name='date'onChange={props.handleChange}type='date'></input>
            <label htmlFor='expense'> Expense</label>
            <input name='expense' value={props.formData.expense} placeholder='Expense' onChange={props.handleChange }></input>
            <label htmlFor='amount'> Amount</label>
            <input name='amount' value={props.formData.amount} placeholder='Amount' onChange={props.handleChange}></input>
            <button type='submit'>Add Expense</button>
            </form>
        </div>
    )
}