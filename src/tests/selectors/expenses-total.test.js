import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

let total = 0;
expenses.forEach(el => {
	total += el.amount;
});

test('Should return 0 if no expenses', () => {
	const result = selectExpensesTotal([]);
	expect(result).toBe(0);
});

test('Should correctly add up a single expense', () => {
	const result = selectExpensesTotal([expenses[1]]);
	expect(result).toBe(expenses[1].amount);
});

test('Should correctly add up a multple expenses', () => {
	const result = selectExpensesTotal(expenses);
	expect(result).toBe(total);
});
