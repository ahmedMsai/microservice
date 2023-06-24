package com.esprit.forecasts.service;

import com.esprit.forecasts.exception.ForecastNotFoundException;
import com.esprit.forecasts.repository.ForecastRepository;
import com.esprit.forecasts.model.Forecast;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ForecastServiceImpl implements ForecastService {

    ForecastRepository forecastRepository;

    @Override
    public List<Forecast> getAllForecasts() {
        return forecastRepository.findAll();
    }

    @Override
    public Optional<Forecast> getForecastById(String id) {
        return forecastRepository.findById(id);
    }

    @Override
    public Forecast createForecast(Forecast forecast) {
        return forecastRepository.save(forecast);
    }

    @Override
    public Forecast updateForecast(Forecast forecastDto, String id) throws ForecastNotFoundException {
        Optional<Forecast> forecast = this.forecastRepository.findById(id);
        if (forecast.isPresent()) {
            return this.forecastRepository.save(forecastDto);
        } else {
            throw new ForecastNotFoundException(id);
        }
    }

    @Override
    public void deleteForecast(String id) {
        forecastRepository.deleteById(id);
    }
}
