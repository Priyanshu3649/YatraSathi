package com.anmoltravels.YatraSathi.config;

import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

import java.util.LinkedHashMap;

@Configuration
public class JpaBuilderConfig {

    @Bean
    public JpaVendorAdapter jpaVendorAdapter() {
        return new HibernateJpaVendorAdapter();
    }

    @Bean
    public EntityManagerFactoryBuilder entityManagerFactoryBuilder(JpaVendorAdapter jpaVendorAdapter) {

        return new EntityManagerFactoryBuilder(
                jpaVendorAdapter,
                new LinkedHashMap<>(), // <-- IMPORTANT FIX
                null
        );
    }
}
