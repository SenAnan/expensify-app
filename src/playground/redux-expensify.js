import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// EXPENSES
const expensesDefaultState = [];

// Expenses Actions
const addExpense = ({description = "", note = "", amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})

const removeExpense = ({id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

// Expenses Reducer
const expensesReducer = (state = expensesDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(el => 
                el.id != action.id
            );
        case 'EDIT_EXPENSE':
            return state.map(el => {
                if (el.id == action.id) {
                    return {
                        ...el,
                        ...action.updates
                    }
                } else {
                    return el
                }
            })
        default:
            return state;
    }
}

// FILTERS
const filtersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

// Filters Actions
const setTextFilter = (text = "") => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// Filters Reducer
const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.endDate
        }
        default:
            return state
    }
}

// GET EXPENSES
const getVisibleExpenses =(expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch  = typeof endDate !== 'number' || expense.createdAt < endDate;
        const textMatch = text == '' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy == 'date') {
            return a.createdAt > b.createdAt ? -1 : 1
        } else {
            return a.amount > b.amount ? -1 : 1
        }
    })
}

// STORE
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }));

store.subscribe(() => {
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters));
})

// STATE MANIPULATION
const rent = store.dispatch(addExpense({description: 'Rent', amount: 1000}));
const coffee = store.dispatch(addExpense({description: 'Coffee', amount: 200, createdAt: 200}));

// store.dispatch(removeExpense({id: rent.expense.id}));

// store.dispatch(editExpense(coffee.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('FEE'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(200));
// store.dispatch(setEndDate());