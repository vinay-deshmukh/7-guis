import React from "react";
import PropTypes from "prop-types";

function TemperatureConverter(props) {
  const {
    celsius,
    fahrenheit,
    handleChangeCelsius,
    handleChangeFahrenheit,
  } = useTemperature();
  return (
    <article>
      <h2>{"TemperatureConverter"}</h2>
      <input
        value={celsius}
        onChange={(event) => {
          handleChangeCelsius(event.target.value);
        }}
      />{" "}
      {"Celsius = "}
      <input
        value={fahrenheit}
        onChange={(event) => {
          handleChangeFahrenheit(event.target.value);
        }}
      />{" "}
      {"Fahrenheit"}
    </article>
  );
}

TemperatureConverter.propTypes = {};

export default TemperatureConverter;

function useTemperature() {
  const [
    { celsius, fahrenheit },
    dispatch,
  ] = React.useReducer(temperatureReducer, { celsius: 0, fahrenheit: 32 });
  const handleChangeCelsius = React.useCallback(
    (newCelsius) =>
      dispatch({
        type: UPDATE_CELSIUS,
        payload: {
          celsius: newCelsius,
        },
      }),
    [dispatch]
  );
  const handleChangeFahrenheit = React.useCallback(
    (newFahrenheit) =>
      dispatch({
        type: UPDATE_FAHRENHEIT,
        payload: {
          fahrenheit: newFahrenheit,
        },
      }),
    [dispatch]
  );
  return {
    celsius,
    handleChangeCelsius,
    fahrenheit,
    handleChangeFahrenheit,
  };
}

function temperatureReducer(state, action) {
  switch (action.type) {
    case UPDATE_CELSIUS:
      {
        const celsius = action.payload.celsius;
        const fahrenheit = !isNaN(celsius)
          ? convertToFahrenheit(celsius)
          : state.fahrenheit;
        return {
          ...state,
          celsius,
          fahrenheit,
        };
      }
    case UPDATE_FAHRENHEIT:
      {
        const fahrenheit = action.payload.fahrenheit;
        const celsius = !isNaN(fahrenheit)
          ? convertToCelsius(fahrenheit)
          : state.celsius;
        return {
          ...state,
          celsius,
          fahrenheit,
        };
      }
    default: {
      throw new Error("Invalid action type");
    }
  }
}
const UPDATE_CELSIUS = "updateCelsius";
const UPDATE_FAHRENHEIT = "updateFahrenheit";

function convertToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}
