import React from "react";
import PropTypes from "prop-types";

import styles from "./Counter.module.scss";

function Counter(props) {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <article className={styles.container}>
      <h2>{"Counter"}</h2>
      <input className={styles.count} readOnly value={count} />
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => increment()}>
          {"Increment"}
        </button>
        <button className={styles.button} onClick={() => decrement()}>
          {"Decrement"}
        </button>
        <button className={styles.button} onClick={() => reset()}>
          {"Reset"}
        </button>
      </div>
    </article>
  );
}

Counter.propTypes = {};

export default Counter;

function useCounter() {
  const [count, setCount] = React.useState(0);

  const increment = React.useCallback(() => setCount((c) => c + 1), [setCount]);
  const decrement = React.useCallback(() => setCount((c) => c - 1), [setCount]);
  const reset = React.useCallback(() => setCount(0), [setCount]);

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
