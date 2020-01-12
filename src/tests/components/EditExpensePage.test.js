import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let historySpy, editExpenseSpy, removeExpenseSpy, wrapper;

beforeEach(() => {
	historySpy = { push: jest.fn() };
	editExpenseSpy = jest.fn();
	removeExpenseSpy = jest.fn();
	wrapper = shallow(
		<EditExpensePage
			onSubmit={editExpenseSpy}
			removeExpense={removeExpenseSpy}
			history={historySpy}
			expense={expenses[0]}
		/>
	);
});
test('should render EditExpensePage correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense correctly', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
	expect(historySpy.push).toHaveBeenLastCalledWith('/');
	expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[0]);
});

test('should handle removeExpense correctly', () => {
	wrapper.find('button').simulate('click');
	expect(historySpy.push).toHaveBeenLastCalledWith('/');
	expect(removeExpenseSpy).toHaveBeenCalledTimes(1);
});
