import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

test('Should set up remove expense action object', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({ type: 'REMOVE_EXPENSE', id: '123abc' });
});

test('Should set up edit expense action', () => {
	const action = editExpense('123abc', { note: 'New note value' });
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: { note: 'New note value' },
	});
});

test('Should set up add expense action with provided values', () => {
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2],
	});
});

// test('Should add expense to db and store', (done) => {
// 	jest.setTimeout(30000);
// 	const store = createMockStore({});
// 	const expenseData = {
// 		description: 'Mouse',
// 		amount: 3000,
// 		note: 'This one is better',
// 		createdAt: 1000,
// 	};
// 	store.dispatch(startAddExpense(expenseData)).then(() => {
// 		expect(1).toBe(2);
// 		done();
// 		// const actions = store.getActions();
// 		// expect(actions[0]).toEqual({
// 		// 	type: 'ADD_EXPENSE',
// 		// 	expense: {
// 		// 		id: expect.any(String),
// 		// 		...expenseData,
// 		// 	},
// 		// });
// 	});
// });

test('Should add expense with default values', () => {});

// test('Should set up add expense action with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     });
// })
