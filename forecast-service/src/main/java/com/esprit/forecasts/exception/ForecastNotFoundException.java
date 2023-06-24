package com.esprit.forecasts.exception;


public class ForecastNotFoundException extends Throwable {
    public ForecastNotFoundException(String id) {
        super("Cannot found forecast number [" + id + "]");
    }
}
