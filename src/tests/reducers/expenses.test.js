import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual([]);
});

const expense = {
    id: '4',
    description: 'Rent',
    note: 'My rent this month',
    amount: 12000,
    createdAt: 10000
};

test('should add expense', () => {
    const state = expensesReducer(expenses, {type: "ADD_EXPENSE", expense});
    expect(state).toEqual([...expenses, expense]);
});

test('should remove expense by id', () => {
    const state = expensesReducer(expenses, {type: "REMOVE_EXPENSE", id: expenses[0].id});
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove invalid id expense', () => {
    const state =expensesReducer(expenses, {type: "REMOVE_EXPENSE", id: 'invalid'});
    expect(state).toEqual(expenses);
});

test('should edit expense', () => {
    const updates = {description: "Coffee", note: "Starbucks"};
    const state = expensesReducer(expenses, {type: "EDIT_EXPENSE", id: expenses[0].id, updates});
    expect(state[0]).toEqual({
        ...expenses[0],
        ...updates
    });
});

test('should not edit invalid id expense', () => {
    const state = expensesReducer(expenses, {type: "EDIT_EXPENSE", id: 'invalid', updates: {description: "Should not update"}});
    expect(state).toEqual(expenses);
});



