package com.anmoltravels.YatraSathi.repository.primary;

import com.anmoltravels.YatraSathi.domain.primary.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Login, String> {
}
