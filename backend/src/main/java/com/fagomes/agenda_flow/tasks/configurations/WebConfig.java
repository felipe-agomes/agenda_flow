package com.fagomes.agenda_flow.tasks.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {
    @Bean
    WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            /* TODO: Configurar corretamente em producao */
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Permite CORS para todos os endpoints
                        .allowedOrigins("*") // Permite todas as origens
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Permite esses métodos
                        .allowedHeaders("*") // Permite todos os cabeçalhos
                        .allowCredentials(false); // Credenciais são desabilitadas
            }
        };
    }
}
