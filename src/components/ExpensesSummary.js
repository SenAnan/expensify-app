import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
	const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
	return (
		<div className="page-header">
			<div className="content-container">
				<h2 className="page-header__title">
					Viewing{' '}
					<span>
						{props.expenses.length} {expenseWord}
					</span>{' '}
					totalling{' '}
					<span>
						{numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')}
					</span>
				</h2>
				<div className="page-header__actions">
					<Link className="page-header__link button" to="/create">
						Add Expense
					</Link>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters),
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
