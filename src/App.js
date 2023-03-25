import React, { Component } from 'react'
import './App.css'
import { Statistics } from './components/Statistics/Statistics'
import { Section } from './components/Section/Section'
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions'
import { Notification } from './components/Notification/Notification'
const options = ['good', 'neutral', 'bad']

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  onLeaveFeedback = (name) => {
    this.setState((prevState) => ({
      [name]: prevState[name] + 1
    }))
    console.log(this.state)
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }
  countPositiveFeedbackPercentage = () => {
    return this.state.good > 0
      ? (this.state.good / this.countTotalFeedback()) * 100
      : 0
  }
  render() {
    const { good, neutral, bad } = this.state
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback yet..." />
          )}
        </Section>
      </div>
    )
  }
}
export default App
