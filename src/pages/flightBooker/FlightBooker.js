import React from "react";
import PropTypes from "prop-types";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";
import DateInput from "./DateInput";

function FlightBooker(props) {
  const {
    fromDate,
    handleChangeFrom,

    toDate,
    handleChangeTo,

    typeOfFlight,
    handleChangeDropdown,
  } = useFlightBooker();
  return (
    <PageContainer>
      <PageTitle>{"Flight Booker"}</PageTitle>
      <select value={typeOfFlight} onChange={handleChangeDropdown}>
        <option value={FlightType.ONEWAY}>{"One-way flight"}</option>
        <option value={FlightType.RETURN}>{"Return flight"}</option>
      </select>
      <DateInput value={fromDate} onChange={handleChangeFrom} />
      <DateInput value={toDate} onChange={handleChangeTo} />
    </PageContainer>
  );
}

FlightBooker.propTypes = {};

export default FlightBooker;

function useFlightBooker() {
  const [{ fromDate, toDate, typeOfFlight }, dispatch] = React.useReducer(
    flightBookerReducer,
    undefined,
    initFlightBookerState
  );

  const handleChangeFrom = (event) =>
    dispatch({
      type: UPDATE_FROM,
      payload: {
        from: event.target.value,
      },
    });

  const handleChangeTo = (event) =>
    dispatch({
      type: UPDATE_TO,
      payload: {
        to: event.target.value,
      },
    });

  const handleChangeDropdown = (event) =>
    dispatch({
      type: UPDATE_DROPDOWN,
      payload: {
        typeOfFlight: event.target.value,
      },
    });

  return {
    fromDate,
    handleChangeFrom,

    toDate,
    handleChangeTo,

    typeOfFlight,
    handleChangeDropdown,
  };
}

function flightBookerReducer(state, action) {
  switch (action.type) {
    case UPDATE_DROPDOWN: {
      return {
        ...state,
        typeOfFlight: action.payload.typeOfFlight,
      };
    }
    case UPDATE_FROM: {
      return {
        ...state,
        fromDate: action.payload.from,
      };
    }
    case UPDATE_TO: {
      return {
        ...state,
        toDate: action.payload.to,
      };
    }
    default:
      throw new Error("Invalid action");
  }
}
const UPDATE_DROPDOWN = "updateDropdown";
const UPDATE_FROM = "updateFrom";
const UPDATE_TO = "updateTo";

const FlightType = {
  ONEWAY: "oneway",
  RETURN: "return",
};

function initFlightBookerState() {
  let fromDate;
  let toDate;
  let typeOfFlight;
  return {
    fromDate,
    toDate,
    typeOfFlight,
  };
}
