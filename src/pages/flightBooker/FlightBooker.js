import React from "react";
import cx from "classnames";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import DateInput, { getNumberFromDate, isValidDate } from "./DateInput";
import styles from "./FlightBooker.module.scss";

function FlightBooker(props) {
  const {
    fromDate,
    handleChangeFrom,

    toDate,
    handleChangeTo,
    isToDateEnabled,

    typeOfFlight,
    handleChangeDropdown,

    isBookingAllowed,
    isBookingMessageVisible,
    showBookingMessage,
    bookingConfirmMessage,
  } = useFlightBooker();
  const enableToDate =
    isToDateEnabled && (!isValidDate(toDate) || isBookingAllowed);
  return (
    <PageContainer>
      <PageTitle>{"Flight Booker"}</PageTitle>
      <select
        className={cx(styles.flightTypeDropdown, styles.bottomSpace)}
        value={typeOfFlight}
        onChange={handleChangeDropdown}
      >
        <option value={FlightType.ONEWAY}>{"One-way flight"}</option>
        <option value={FlightType.RETURN}>{"Return flight"}</option>
      </select>
      <DateInput
        className={styles.bottomSpace}
        value={fromDate}
        onChange={handleChangeFrom}
      />
      <DateInput
        className={styles.bottomSpace}
        value={toDate}
        onChange={handleChangeTo}
        disabled={!enableToDate}
      />
      <Button disabled={!isBookingAllowed} onClick={() => showBookingMessage()}>
        {"Book"}
      </Button>
      {isBookingMessageVisible ? <p>{bookingConfirmMessage}</p> : null}
    </PageContainer>
  );
}

FlightBooker.propTypes = {};

export default FlightBooker;

function useFlightBooker() {
  const [
    {
      fromDate,
      toDate,
      typeOfFlight,
      isToDateEnabled,

      isBookingMessageVisible,
      isBookingAllowed,
      bookingConfirmMessage,
    },
    dispatch,
  ] = React.useReducer(
    (state, action) => {
      const flightState = flightBookerReducer(state, action);
      const afterBookingMessageState = bookingMessageReducer(flightState);
      return afterBookingMessageState;
    },
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

  const showBookingMessage = () =>
    dispatch({
      type: SHOW_BOOKING_MESSAGE,
    });

  return {
    fromDate,
    handleChangeFrom,

    toDate,
    isToDateEnabled,
    handleChangeTo,

    typeOfFlight,
    handleChangeDropdown,

    isBookingAllowed,
    isBookingMessageVisible,
    showBookingMessage,
    bookingConfirmMessage,
  };
}

function flightBookerReducer(state, action) {
  if (action.type !== SHOW_BOOKING_MESSAGE) {
    state = {
      ...state,
      isBookingMessageVisible: false,
    };
  }

  switch (action.type) {
    case UPDATE_DROPDOWN: {
      const typeOfFlight = action.payload.typeOfFlight;
      const isToDateEnabled = typeOfFlight === FlightType.ONEWAY ? false : true;
      return {
        ...state,
        typeOfFlight,
        isToDateEnabled,
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
    case SHOW_BOOKING_MESSAGE: {
      return {
        ...state,
        isBookingMessageVisible: true,
      };
    }
    default:
      throw new Error("Invalid action");
  }
}
const UPDATE_DROPDOWN = "updateDropdown";
const UPDATE_FROM = "updateFrom";
const UPDATE_TO = "updateTo";
const SHOW_BOOKING_MESSAGE = "showBookingMessage";

const FlightType = {
  ONEWAY: "oneway",
  RETURN: "return",
};

function bookingMessageReducer(state) {
  const bookingConfirmMessage = getBookingMessage({
    typeOfFlight: state.typeOfFlight,
    fromDate: state.fromDate,
    toDate: state.toDate,
  });

  return {
    ...state,
    bookingConfirmMessage,
    isBookingAllowed: getIsBookingAllowed(bookingConfirmMessage),
  };
}

// function bookingMessageVisibilityReducer(state, action) {

//   switch(action.type)
// }

function initFlightBookerState() {
  let fromDate;
  let toDate;
  fromDate = toDate = getTodayValidDateString();

  let typeOfFlight = FlightType.ONEWAY;
  let bookingConfirmMessage = getBookingMessage({
    typeOfFlight,
    fromDate,
    toDate,
  });
  let isBookingAllowed = getIsBookingAllowed(bookingConfirmMessage);
  let isBookingMessageVisible = false;
  let isToDateEnabled = false;

  return {
    fromDate,
    toDate,
    typeOfFlight,
    isToDateEnabled,
    isBookingAllowed,
    bookingConfirmMessage,
    isBookingMessageVisible,
  };
}

/**
 * Returns booking message, or null is dates are not valid.
 * @param {} param0
 * @returns
 */
function getBookingMessage({ typeOfFlight, fromDate, toDate }) {
  const INVALID = null;
  if (typeOfFlight === FlightType.ONEWAY) {
    if (!isValidDate(fromDate)) {
      return INVALID;
    }
    return `You have booked a one-way flight on ${fromDate}`;
  } else if (typeOfFlight === FlightType.RETURN) {
    if (!isValidDate(fromDate) || !isValidDate(toDate)) {
      return INVALID;
    }
    if (isDateBeforeOther(toDate, fromDate)) {
      return INVALID;
    }
    return `You have booked a flight on ${fromDate} and return on ${toDate}`;
  } else {
    throw new Error("Invalid flight type");
  }
}

function getIsBookingAllowed(bookingMessage) {
  return bookingMessage !== null;
}

function getTodayValidDateString() {
  const today = new Date();
  const date = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear().toString().padStart(4, "0");

  return `${date}.${month}.${year}`;
}

function isDateBeforeOther(dateOne, dateTwo) {
  if (!isValidDate(dateOne) || !isValidDate(dateTwo)) {
    throw new Error("ill formatted date");
  }

  const [numDateOne, numDateTwo] = [dateOne, dateTwo].map(getNumberFromDate);

  return numDateOne < numDateTwo;
}
