import React from 'react';
import PropTypes from 'prop-types';

function BrewDetail(props) {
  const { brew, onClickingDelete, onClickingSell, onClickingEdit } = props;
  return(
    <React.Fragment>
      <h2>{brew.name} Details</h2>
      <h4>Brand: {brew.brand}</h4>
      <p>${brew.price}</p>
      <p>{brew.alcoholContent}%</p>
      <p>Pints: {brew.pints}</p>
      <button onClick = {() => onClickingSell(brew.id)}>Sell Pint</button>
      <button onClick = {onClickingEdit}>Edit Brew</button>
      <button onClick = {() => onClickingDelete(brew.id)}>Remove Brew</button>
      <hr />
    </React.Fragment>
  );
}

BrewDetail.propTypes = {
  brew: PropTypes.object,
  onClickingSell: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default BrewDetail;