package com.esprit.forecasts.service;

import com.esprit.forecasts.exception.ForecastNotFoundException;
import com.esprit.forecasts.model.Forecast;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ForecastService {
     List<Forecast> getAllForecasts();
     Optional<Forecast> getForecastById(String id);
     Forecast createForecast(Forecast forecast);
     Forecast updateForecast(Forecast forecast, String id) throws ForecastNotFoundException;
     void deleteForecast(String id);
}
