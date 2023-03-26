import React, { Component } from 'react';
import { Buttons } from '../Buttons/Buttons';
const options = ['good', 'neutral', 'bad'];

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  const getStat = evt => {
    const name = evt.currentTarget.name;
    onLeaveFeedback(name);
  };

  return <Buttons options={options} getStat={getStat} />;
};
