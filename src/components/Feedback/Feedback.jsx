import css from './feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => {

const buttonsOptions = options.map((button) => {
  return ( 
  <button
          key={button}
          onClick={() => onLeaveFeedback(button)}
          className={css.feedbackBtn}
        >
        {button.charAt(0).toUpperCase() + button.slice(1)}
        </button>
 )
})


  return (
    <div className={css.feedbackSection}>
      {/* <h2 className={css.feedbackTitle}>Please leave feedback</h2> */}
      <div className={css.feedbackButtons}>

        {buttonsOptions}



        {/* <button
          onClick={() => onLeaveFeedback(options[0])}
          className={css.feedbackBtn}
        >
          Good
        </button>
        <button
          onClick={() => onLeaveFeedback(options[1])}
          className={css.feedbackBtn}
        >
          Neutral
        </button>
        <button
          onClick={() => onLeaveFeedback(options[2])}
          className={css.feedbackBtn}
        >
          Bad
        </button> */}
      </div>
    </div>
  );
};

export { Feedback };
