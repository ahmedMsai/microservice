FROM  openjdk:11
EXPOSE 27015
ADD /target/forecast-service-0.0.1-SNAPSHOT.jar forecast-service.jar
ENTRYPOINT ["java", "-jar", "forecast-service.jar"]