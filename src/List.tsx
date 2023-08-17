import React from 'react';

interface Props {
  formData: {
    option: string;
    date: Date | undefined;
    expense: string;
    amount: number;
  };
}

export const List: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>Expenses</h1>
      <ul>
        {Object.entries(props.formData).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value instanceof Date ? value.toDateString() : value}
          </li>
        ))}
      </ul>
    </div>
  );
};
