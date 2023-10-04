export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul className="">
      {options.map(option => (
        <li className="" key={option}>
          <button
            className=""
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
