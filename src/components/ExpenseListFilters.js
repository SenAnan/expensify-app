import React from 'react';
import { connect } from 'react-redux';
import {
	setTextFilter,
	sortByAmount,
	sortByDate,
	setStartDate,
	setEndDate,
} from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
	state = {
		calendarFocused: null,
	};

	onDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};
	onFocusChange = (calendarFocused) => {
		this.setState(() => ({ calendarFocused }));
	};
	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	};
	onSortChange = (e) => {
		if (e.target.value == 'amount') {
			this.props.sortByAmount();
		} else {
			this.props.sortByDate();
		}
	};

	render() {
		return (
			<div className="content-container">
				<div className="input-group">
					<div className="input-group__item">
						<input
							type="text"
							value={this.props.filters.text}
							onChange={this.onTextChange}
							className="text-input"
							placeholder="Search expenses"
						/>
					</div>
					<div className="input-group__item">
						<select
							value={this.props.filters.sortBy}
							name="filter"
							id="filterPicker"
							className="select"
							onChange={this.onSortChange}
						>
							<option value="date">Date</option>
							<option value="amount">Amount</option>
						</select>
					</div>
					<div className="input-group__item">
						<DateRangePicker
							startDate={this.props.filters.startDate}
							startDateId="myStartDate"
							endDate={this.props.filters.endDate}
							endDateId="myEndDate"
							onDatesChange={this.onDatesChange}
							focusedInput={this.state.calendarFocused}
							onFocusChange={this.onFocusChange}
							numberOfMonths={2}
							isOutsideRange={() => false}
							showClearDates={true}
						/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		filters: state.filters,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setTextFilter: (text) => dispatch(setTextFilter(text)),
		sortByDate: () => dispatch(sortByDate()),
		sortByAmount: () => dispatch(sortByAmount()),
		setStartDate: (startDate) => dispatch(setStartDate(startDate)),
		setEndDate: (endDate) => dispatch(setEndDate(endDate)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
