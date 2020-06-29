const expensesDefaultState = [];

const expensesReducer = (state = expensesDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter((el) => el.id != action.id);
		case 'EDIT_EXPENSE':
			return state.map((el) => {
				if (el.id == action.id) {
					return {
						...el,
						...action.updates,
					};
				} else {
					return el;
				}
			});
		case 'SET_EXPENSES':
			return action.expenses;
		default:
			return state;
	}
};

export default expensesReducer;
