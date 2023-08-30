import ExpenseItem from "../ExpenseItem/ExpenseItem";

function ExpenseList(props) {
  return (
    <div>
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
