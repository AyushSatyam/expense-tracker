import React, { useContext } from "react";

const Balance = () => {
  const { transactions } = useContext(contextValue);
  const amounts = transactions.map((transactions) => transactions.amounts);
  const total = amounts.reduce((acc, item) => acc + item, 0);
  return (
    <div>
      <h1>Balance Page</h1>
      <h1>Total: {total}</h1>
    </div>
  );
};

export default Balance;
