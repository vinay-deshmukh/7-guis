import React from "react";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";

function Timer(props) {
  const { elapsedTimeMs, maxTimeMs, doTick, resetElapsed } = useTimer({
    initialMaxTimeMs: 5_000,
  });
  React.useEffect(() => {
    // TODO: maybe stop ticking if elapsed has reached max time?
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
      <button onClick={() => resetElapsed()}>{"Reset"}</button>
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
  const resetElapsed = React.useCallback(() => {
    dispatch({
      type: RESET_ELAPSED,
    });
  });

  return {
    elapsedTimeMs,
    maxTimeMs,

    doTick,
    resetElapsed,
  };
}
const DO_TICK = "doTick";
const RESET_ELAPSED = "resetElapsed";

function timerReducer(state, { type, payload }) {
  switch (type) {
    case DO_TICK: {
      const elapsedTimeMs = state.elapsedTimeMs + payload.byMs;
      if (elapsedTimeMs > state.maxTimeMs) {
        return state;
      }
      return {
        ...state,
        elapsedTimeMs,
      };
    }
    case RESET_ELAPSED: {
      return {
        ...state,
        elapsedTimeMs: 0,
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
