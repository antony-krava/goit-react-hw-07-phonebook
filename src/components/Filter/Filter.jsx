import React from 'react';
import { connect } from 'react-redux';
import { chengeFilter } from '../../redux/contact/contact-action';
import { getFilter } from '../../redux/contact/contact-selectors';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, onHandlerChenge }) => {
  return (
    <div>
      <h3 className={styles.title}>Find contact by name</h3>
      <input
        type="text"
        className={styles.input}
        name="filter"
        value={filter}
        onChange={onHandlerChenge}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onHandleChenge: PropTypes.func,
};

const mapStateToProps = state => ({
  filter: getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  onHandlerChenge: event =>
    dispatch(chengeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);