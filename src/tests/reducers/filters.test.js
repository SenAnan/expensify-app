import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
    
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };

    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
})

test('should set text filter', () => {
    const text = 'test'
    const state = filtersReducer(undefined, {type:'SET_TEXT_FILTER', text: text});
    expect(state.text).toBe(text);
})

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, {type: "SET_START_DATE", startDate: moment('2016-01-01').format('MM-DD-YY')});
    expect(state.startDate).toBe('01-01-16');
});

test('should set endDate filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment('2019-01-01').format('MM-DD-YY') });
    expect(state.endDate).toBe('01-01-19');
})