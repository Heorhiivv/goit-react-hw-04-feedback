import React from 'react'
export const Buttons = ({ options, getStat }) => {
  return options.map((option, i) => (
    <button key={i} type="button" name={option} onClick={getStat}>
      {option[0].toUpperCase() + option.slice(1)}
    </button>
  ))
}
