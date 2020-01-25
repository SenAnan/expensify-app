const selectExpensesTotal = expenses => {
	return expenses.reduce((prev, current) => (prev += current.amount), 0);
};

export default selectExpensesTotal;
