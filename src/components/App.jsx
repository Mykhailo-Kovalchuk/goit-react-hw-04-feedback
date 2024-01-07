import { Component } from 'react';

import { Statistics } from './Statistics/Statistics';
import { Feedback } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Statistics section handler - сумування всіх відгуків
  countTotalFeedback() {
    const sum = this.state.good + this.state.neutral + this.state.bad;
    return sum;
  }

  // Функція підрахунку питомої ваги позитивних відгуків
  countPositiveFeedbackPercentage(good, total) {
    const positive = (good / total) * 100;
    if (isNaN(positive)) {
      return 0;
    }
    return positive.toFixed(0);
  }

  // Feedback buttons section
  btnHandler = currentKeyState => {
    this.setState({ [currentKeyState]: this.state[currentKeyState] + 1 });
  };

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          margin: '0 auto',
          width: '650px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.btnHandler}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() < 1 && (
            <Notification message="There is no feedback" />
          )}

          {this.countTotalFeedback() > 0 && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state.good,
                this.countTotalFeedback()
              )}
            />
          )}
        </Section>
      </div>
    );
  }
}
