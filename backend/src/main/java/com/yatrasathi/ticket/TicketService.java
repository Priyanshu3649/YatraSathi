package com.yatrasathi.ticket;

import com.yatrasathi.common.AuditService;
import com.yatrasathi.common.TicketEnums.TicketStatus;
import com.yatrasathi.user.User;
import com.yatrasathi.user.UserRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TicketService {
    private final TicketRequestRepository ticketRepo;
    private final UserRepository userRepository;
    private final AuditService auditService;

    public TicketService(TicketRequestRepository ticketRepo, UserRepository userRepository, AuditService auditService) {
        this.ticketRepo = ticketRepo;
        this.userRepository = userRepository;
        this.auditService = auditService;
    }

    public TicketRequest createRequest(Long userId, TicketRequest request) {
        User customer = userRepository.findById(userId).orElseThrow();
        request.setCustomer(customer);
        request.setStatus(TicketStatus.PENDING);
        TicketRequest saved = ticketRepo.save(request);
        auditService.log(customer.getEmail(), "CREATE_TICKET_REQUEST", "RequestId=" + saved.getId());
        return saved;
    }

    public List<TicketRequest> getMyRequests(Long userId) {
        User customer = userRepository.findById(userId).orElseThrow();
        return ticketRepo.findByCustomer(customer);
    }

    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('ADMIN')")
    public List<TicketRequest> getPending() {
        return ticketRepo.findByStatus(TicketStatus.PENDING);
    }

    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('ADMIN')")
    public TicketRequest approve(Long requestId, int count) {
        TicketRequest tr = ticketRepo.findById(requestId).orElseThrow();
        tr.setApprovedTicketCount(count);
        tr.setStatus(TicketStatus.APPROVED);
        TicketRequest saved = ticketRepo.save(tr);
        auditService.log("system", "APPROVE_TICKET_REQUEST", "RequestId=" + saved.getId() + ", count=" + count);
        return saved;
    }

    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('ADMIN')")
    public TicketRequest confirm(Long requestId, String pnr) {
        TicketRequest tr = ticketRepo.findById(requestId).orElseThrow();
        tr.setAssignedPnr(pnr);
        tr.setStatus(TicketStatus.CONFIRMED);
        TicketRequest saved = ticketRepo.save(tr);
        auditService.log("system", "CONFIRM_TICKET_REQUEST", "RequestId=" + saved.getId() + ", PNR=" + pnr);
        return saved;
    }

    public List<TicketRequest> filter(LocalDate date) {
        return ticketRepo.findByTravelDate(date);
    }
}


