import React from "react";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";

function Timer(props) {
  const { elapsedTimeMs, maxTimeMs, doTick } = useTimer({
    initialMaxTimeMs: 5_000,
  });
  React.useEffect(() => {
    const tickDurationMs = 100;
    const interval = setInterval(() => {
      doTick({ byMs: tickDurationMs });
    }, tickDurationMs);
    return () => {
      clearInterval(interval);
    };
  }, [doTick]);
  return (
    <PageContainer>
      <PageTitle>{"Timer"}</PageTitle>

      <div>
        {"Elapsed Time: "}
        <progress value={elapsedTimeMs} max={maxTimeMs} />
      </div>
      <div>{`${elapsedTimeMs / 1000}s`}</div>
      <div>
        {"Duration: "}
        <input type="range" />
      </div>
      <button>{"Reset"}</button>
    </PageContainer>
  );
}

Timer.propTypes = {};

export default Timer;

function useTimer({ initialMaxTimeMs = 5000 } = {}) {
  const [{ elapsedTimeMs, maxTimeMs }, dispatch] = React.useReducer(
    timerReducer,
    { initialMaxTimeMs },
    initTimerState
  );

  const doTick = React.useCallback(({ byMs = 100 } = {}) => {
    dispatch({ type: DO_TICK, payload: { byMs } });
  }, []);

  return {
    elapsedTimeMs,
    maxTimeMs,
    doTick,
  };
}
const DO_TICK = "doTick";

function timerReducer(state, { type, payload }) {
  switch (type) {
    case DO_TICK: {
      const elapsedTimeMs = state.elapsedTimeMs + payload.byMs;
      return {
        ...state,
        elapsedTimeMs,
      };
    }
    default:
      throw new Error("Invalid action");
  }
}
function initTimerState({ initialMaxTimeMs }) {
  return {
    elapsedTimeMs: 0,
    maxTimeMs: initialMaxTimeMs,
  };
}
