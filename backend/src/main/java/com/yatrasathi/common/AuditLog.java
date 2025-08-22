package com.yatrasathi.common;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "audit_logs")
public class AuditLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String actor; // email or system

    @Column(nullable = false)
    private String action; // e.g., APPROVE_REQUEST, ADD_PAYMENT

    @Column(length = 1000)
    private String details;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
}



