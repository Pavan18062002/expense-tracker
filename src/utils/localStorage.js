export const getExpensesFromLocalStorage = () => {
    const data = localStorage.getItem('expenses');
    return data ? JSON.parse(data) : [];
  };
  
  export const saveExpensesToLocalStorage = (expenses) => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  };
  