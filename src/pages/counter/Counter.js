import React from "react";

import styles from "./Counter.module.scss";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";

function Counter(props) {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <PageContainer>
      <PageTitle>{"Counter"}</PageTitle>
      <input className={styles.count} readOnly value={count} />
      <div className={styles.buttonsContainer}>
        <Button className={styles.button} onClick={() => increment()}>
          {"Increment"}
        </Button>
        <Button className={styles.button} onClick={() => decrement()}>
          {"Decrement"}
        </Button>
        <Button className={styles.button} onClick={() => reset()}>
          {"Reset"}
        </Button>
      </div>
    </PageContainer>
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
