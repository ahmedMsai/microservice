package com.esprit.forecasts.repository;

import com.esprit.forecasts.model.Forecast;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForecastRepository extends MongoRepository<Forecast, String> {
}
