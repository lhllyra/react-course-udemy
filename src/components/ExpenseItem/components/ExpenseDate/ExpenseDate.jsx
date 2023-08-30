import "./ExpenseDate.css";

function ExpenseDate(props) {
  var date = props.date;
  var month = date.toLocaleString("en-us", { month: "long" });
  var day = date.toLocaleString("en-us", { day: "2-digit" });
  var year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
