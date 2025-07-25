package com.anmoltravels.YatraSathi.controller;

import com.anmoltravels.YatraSathi.domain.primary.Login;
import com.anmoltravels.YatraSathi.domain.secondary.OperationList;
import com.anmoltravels.YatraSathi.repository.primary.LoginRepository;
import com.anmoltravels.YatraSathi.repository.secondary.OperationListRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Test API", description = "Endpoints to test DB connections")
@RestController
public class TestController {

    private final LoginRepository loginRepo;
    private final OperationListRepository operationRepo;

    public TestController(LoginRepository loginRepo, OperationListRepository operationRepo) {
        this.loginRepo = loginRepo;
        this.operationRepo = operationRepo;
    }

    @Operation(summary = "Get all login entries from TVL database")
    @GetMapping("/logins")
    public List<Login> getAllLogins() {
        return loginRepo.findAll();
    }

    @Operation(summary = "Get all menu items from TVL_001 database")
    @GetMapping("/menu")
    public List<OperationList> getAllMenuItems() {
        return operationRepo.findAll();
    }

    @Operation(summary = "Health check endpoint")
    @GetMapping("/")
    public String healthCheck() {
        return "✅ YatraSathi API is running!";
    }
}
