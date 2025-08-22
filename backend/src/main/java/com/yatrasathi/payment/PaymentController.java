package com.yatrasathi.payment;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/ticket/{ticketId}")
    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('ADMIN')")
    public ResponseEntity<Payment> add(@PathVariable Long ticketId, @Valid @RequestBody Payment payment) {
        return ResponseEntity.ok(paymentService.addPayment(ticketId, payment));
    }

    @GetMapping("/ticket/{ticketId}")
    public ResponseEntity<List<Payment>> list(@PathVariable Long ticketId) {
        return ResponseEntity.ok(paymentService.listPayments(ticketId));
    }

    @PostMapping("/{paymentId}/complete")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> complete(@PathVariable Long paymentId) {
        paymentService.markCompleted(paymentId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/ticket/{ticketId}/total")
    public ResponseEntity<BigDecimal> total(@PathVariable Long ticketId) {
        return ResponseEntity.ok(paymentService.totalPaid(ticketId));
    }
}



