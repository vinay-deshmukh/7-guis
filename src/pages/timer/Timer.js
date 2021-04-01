import React from "react";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";

function Timer(props) {
  return (
    <PageContainer>
      <PageTitle>{"Timer"}</PageTitle>

      <div>
        {"Elapsed Time: "}
        <progress value={40} max={100} />
      </div>
      <div>{"11.8s"}</div>
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
