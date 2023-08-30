function ExpenseDate(props) {
  var date = props.date;
  var month = date.toLocaleString('en-us', {month: 'long'});
  var day = date.toLocaleString('en-us', {day: '2-digit'});
  var year = date.getFullYear();


  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
