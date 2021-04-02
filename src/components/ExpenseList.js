import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const expenses = [
        {id: 12, name: 'shopping', cost: 40},
        {id: 13, name: 'shopping', cost: 40},
        {id: 14, name: 'shopping', cost: 40}
    ];
    return ( 
        <ul className="list-group">
            {expenses.map((expense)=>(
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}/>
            ))}
        </ul>
     );
}
 
export default ExpenseList;