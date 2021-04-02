import React from "react";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";

function Timer(props) {
  const {
    elapsedTimeMs,
    maxTimeMs,
    doTick,
    resetElapsed,
    updateMaxTime,
  } = useTimer({
    initialMaxTimeMs: 5_000,
  });
  const highLimitMs = 10_000;
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
      <div>{convertMsToPrettySeconds(elapsedTimeMs)}</div>
      <div>
        {"Duration: "}
        <div>
          {`Low: ${convertMsToPrettySeconds(0)}`}
          <input
            type="range"
            value={maxTimeMs}
            max={highLimitMs}
            onChange={(event) => {
              updateMaxTime({ maxTimeMs: event.target.value });
            }}
          />
          {`High: ${convertMsToPrettySeconds(highLimitMs)}`}
        </div>
        <div>{`Selected: ${convertMsToPrettySeconds(maxTimeMs)}`}</div>
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

  const resetElapsed = () => {
    dispatch({
      type: RESET_ELAPSED,
    });
  };

  const updateMaxTime = ({ maxTimeMs }) => {
    dispatch({
      type: UPDATE_MAX_TIME,
      payload: {
        maxTimeMs,
      },
    });
  };

  return {
    elapsedTimeMs,
    maxTimeMs,

    doTick,
    resetElapsed,
    updateMaxTime,
  };
}
const DO_TICK = "doTick";
const RESET_ELAPSED = "resetElapsed";
const UPDATE_MAX_TIME = "updateMaxTime";

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
    case UPDATE_MAX_TIME: {
      return {
        ...state,
        maxTimeMs: payload.maxTimeMs,
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

function convertMsToPrettySeconds(ms) {
  return `${ms / 1000}s`;
}
