import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  return (
    <div className="expenses">
      {props.dataList.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </div>
  );
}

export default ExpenseList;
