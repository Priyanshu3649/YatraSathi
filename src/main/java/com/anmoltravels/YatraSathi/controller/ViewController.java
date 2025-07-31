package com.anmoltravels.YatraSathi.controller;

import com.anmoltravels.YatraSathi.domain.secondary.OperationList;
import com.anmoltravels.YatraSathi.repository.secondary.OperationListRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class ViewController {

    private final OperationListRepository operationRepo;

    public ViewController(OperationListRepository operationRepo) {
        this.operationRepo = operationRepo;
    }

    @GetMapping("/home")
    public String home(Model model) {
        List<OperationList> menuItems = operationRepo.findAll();
        model.addAttribute("menuItems", menuItems);
        return "index";
    }
}
