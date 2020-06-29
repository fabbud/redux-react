import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  counter: state,
});

const mapDispatchToProps = (dispatch) => ({
  onAdd: () => dispatch({ type: 'ADD' }),
  onRemove: () => dispatch({ type: 'REMOVE' }),
  onAdd10: () => dispatch({ type: 'ADD10' }),
  onRemove10: () => dispatch({ type: 'REMOVE10' }),
  onReset: () => dispatch({ type: 'RESET' }),
});

const LightComponent = ({
  counter,
  onAdd,
  onRemove,
  onAdd10,
  onRemove10,
  onReset,
}) => (
  <div>
    <p>{counter}</p>
    <button onClick={onAdd}>+ 1</button>
    <button onClick={onRemove}>- 1</button>
    <button onClick={onAdd10}>+ 10</button>
    <button onClick={onRemove10}>- 10</button>
    <button onClick={onReset}>Reset</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(LightComponent);
