FROM maven:3.9.6-eclipse-temurin-21-jammy AS build

WORKDIR /app

COPY . .

RUN mvn clean install


FROM openjdk:21-jdk-slim AS deploy

WORKDIR /app

COPY --from=build /app/target/agenda-flow-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
