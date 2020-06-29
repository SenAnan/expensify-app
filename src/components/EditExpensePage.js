import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
	onSubmit = (expense) => {
		this.props.onSubmit(expense);
		this.props.history.push('/');
	};
	onRemove = () => {
		this.props.startRemoveExpense();
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}></ExpenseForm>
				<button onClick={this.onRemove}>Remove</button>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((el) => el.id == props.match.params.id),
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onSubmit: (expense) => dispatch(startEditExpense(props.match.params.id, expense)),
		startRemoveExpense: () => dispatch(startRemoveExpense({ id: props.match.params.id })),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
