package com.yatrasathi.ticket;

import com.yatrasathi.common.TicketEnums.BerthPreference;
import com.yatrasathi.common.TicketEnums.TicketStatus;
import com.yatrasathi.common.TicketEnums.TravelClass;
import com.yatrasathi.user.User;
import com.yatrasathi.employee.Employee;
import jakarta.persistence.*;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "ticket_requests")
public class TicketRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    private User customer;

    @NotBlank
    private String origin;

    @NotBlank
    private String destination;

    @NotNull
    @FutureOrPresent
    private LocalDate travelDate;

    @Enumerated(EnumType.STRING)
    private TravelClass travelClass;

    @Enumerated(EnumType.STRING)
    private BerthPreference berthPreference;

    private String specialRequirements;

    @Enumerated(EnumType.STRING)
    private TicketStatus status = TicketStatus.PENDING;

    private Integer approvedTicketCount;

    private String assignedPnr;

    @ManyToOne
    private Employee assignedEmployee;
}


