import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import GenericForm from './GenericForm';

function NewBrewForm(props) {

  function handleSubmission(event) {
    event.preventDefault();
    props.onNewBrewCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: parseInt(event.target.price.value),
      alcoholContent: parseInt(event.target.alcoholContent.value),
      pints: parseInt(event.target.pints.value),
      id: v4()
    });
  }

  return(
    <React.Fragment>
      <GenericForm
        formSubmissionHandler = {handleSubmission}
        buttonText = "Add Brew" />
    </React.Fragment>
  );
}

NewBrewForm.propTypes = {
  onNewBrewCreation: PropTypes.func
};

export default NewBrewForm;