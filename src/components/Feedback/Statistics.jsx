export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul className="">
        <li className="">
          <p className="">Good:{good}</p>
        </li>
        <li className="">
          <p className="">Neutral:{neutral}</p>
        </li>
        <li className="">
          <p className="">Bad:{bad}</p>
        </li>

        <li className="">
          <p className="">Total:{total}</p>
        </li>
        <li className="">
          <p className="">Positive Feedback:{positivePercentage || 0}%</p>
        </li>
      </ul>
    </>
  );
};
