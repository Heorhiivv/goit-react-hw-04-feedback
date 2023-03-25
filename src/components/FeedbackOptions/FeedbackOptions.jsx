import React, { Component } from 'react'
import { Buttons } from '../Buttons/Buttons'
export class FeedbackOptions extends Component {
  getStat = (evt) => {
    const name = evt.currentTarget.name
    this.props.onLeaveFeedback(name)
  }
  render() {
    const { options } = this.props
    return <Buttons options={options} getStat={this.getStat} />
  }
}
