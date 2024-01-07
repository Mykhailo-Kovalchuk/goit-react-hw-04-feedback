// import { Component } from 'react';
import { useState } from 'react';

import { Statistics } from './Statistics/Statistics';
import { Feedback } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {

  ////////////// Хук useState - Задаємо стани через Хуки
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Statistics section handler - сумування всіх відгуків
  const countTotalFeedback = () => {
    const sum = good + neutral + bad;
    return sum;
  };

  // Функція підрахунку питомої ваги позитивних відгуків
  const countPositiveFeedbackPercentage = (good, total) => {
    const positive = (good / total) * 100;
    if (isNaN(positive)) {
      return 0;
    }
    return positive.toFixed(0);
  };

  // Feedback buttons section ///////////// переробив логіку кнопки, щоб виконувала умови.
  const btnHandler = (currentKeyState) => {
    if (currentKeyState === 'good') {
    setGood(prevState => prevState + 1 );
    } else if (currentKeyState === 'neutral') {
      setNeutral(prevState => prevState + 1 );
    } else if (currentKeyState === 'bad') {
      setBad(prevState => prevState + 1 );
    }
  };

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
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={btnHandler}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() < 1 && (
          <Notification message="There is no feedback" />
        )}

        {countTotalFeedback() > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage(
              good,
              countTotalFeedback()
            )}
          />
        )}
      </Section>
    </div>
  );
};
