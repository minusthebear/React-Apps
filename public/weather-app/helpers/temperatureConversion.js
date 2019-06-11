import { KELVIN_DIFF, CELSIUS, FAHRENHEIT, KELVIN } from '../../constants/TEMP_CONSTANTS'

function fahrenheitToCelsius(f) {
    return (f - 32) / 1.8;
}

function celsiusToFahrenheit(c) {
    return (c * 1.8) + 32;
}

function fahrenheitToKelvin(f) {
    return fahrenheitToCelsius(f) + KELVIN_DIFF;
}

function celsiusToKelvin(c) {
    return c + KELVIN_DIFF;
}

function kelvinToCelsius(k) {
    return k - KELVIN_DIFF;
}

function kelvinToFahrenheit(k) {
    return celsiusToFahrenheit(kelvinToCelsius(k));
}

export function convertTemp(origMeasure, newMeasure, temp) {
    switch (origMeasure) {
        case CELSIUS:
            switch (newMeasure) {
                case FAHRENHEIT:
                    return celsiusToFahrenheit(temp);
                case KELVIN:
                    return celsiusToKelvin(temp);
            }
            break;
        case FAHRENHEIT:
            switch (newMeasure) {
                case CELSIUS:
                    return fahrenheitToCelsius(temp);
                case KELVIN:
                    return fahrenheitToKelvin(temp);
            }
            break;
        default:
            switch (newMeasure) {
                case CELSIUS:
                    return kelvinToCelsius(temp);
                case FAHRENHEIT:
                    return kelvinToFahrenheit(temp);
            }

    }
    return temp;
}
