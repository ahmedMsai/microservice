package com.esprit.forecasts.controller;

import com.esprit.forecasts.exception.ForecastNotFoundException;
import com.esprit.forecasts.model.Forecast;
import com.esprit.forecasts.service.ForecastService;
import io.swagger.annotations.Api;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@RestController
@RequestMapping(value = "/forecasts")
@Api(value = "Forecast API")
@AllArgsConstructor
public class ForecastController {

    ForecastService forecastService;

    @GetMapping
    public ResponseEntity<List<Forecast>> getAllForecast() {
        List<Forecast> forecasts = this.forecastService.getAllForecasts();
        if (forecasts.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(forecasts, HttpStatus.OK);
        }
    }

    @GetMapping(value ="by/{id}")
    public ResponseEntity<Forecast> getForecastById(@PathVariable("id") String id) {
        Optional<Forecast> forecast = this.forecastService.getForecastById(id);
        if (forecast.isPresent()) {
            return new ResponseEntity<>(forecast.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("by/{city}")
    public Forecast getWeather(@PathVariable String city) {
        Forecast forecast = new Forecast();
        double temperature = generateRandomTemperature();
        int humidity = generateRandomHumidity();
        String description = generateRandomDescription();
        forecast.setTemperature(temperature);
        forecast.setHumidity(humidity);
        forecast.setCity(city);
        forecast.setDescription(description);
        return forecastService.createForecast(forecast);
    }

    private double generateRandomTemperature() {
        // Generate a random temperature between -10 and 40 degrees Celsius
        Random random = new Random();
        return random.nextDouble() * (40 - (-10)) + (-10);
    }

    private int generateRandomHumidity() {
        // Generate a random humidity percentage between 0 and 100
        Random random = new Random();
        return random.nextInt(101);
    }

    private String generateRandomDescription() {
        // Generate a random weather description from a predefined list
        String[] descriptions = {"Sunny", "Cloudy", "Partly Cloudy", "Rainy", "Thunderstorms"};
        Random random = new Random();
        int index = random.nextInt(descriptions.length);
        return descriptions[index];
    }

    @PostMapping
    public ResponseEntity<Forecast> createForecast(@RequestBody Forecast forecastDto) {
        Forecast forecast = this.forecastService.createForecast(forecastDto);
        return new ResponseEntity<>(forecast, HttpStatus.CREATED);

    }

    @PutMapping(value ="/{id}")
    public ResponseEntity<Forecast> updateForecast(@PathVariable("id") String id, @RequestBody Forecast forecastDto) {
        try {
            return new ResponseEntity<>(this.forecastService.updateForecast(forecastDto, id), HttpStatus.OK);
        }catch (ForecastNotFoundException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteForecast(@PathVariable("id") String id) {
        try {
            this.forecastService.deleteForecast(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
