package com.yatrasathi.auth.dto;

import com.yatrasathi.common.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class AuthDtos {
    @Data
    public static class SignupRequest {
        @NotBlank @Email
        private String email;
        @NotBlank
        private String phone;
        @NotBlank @Size(min = 12, max = 12)
        private String aadhaar;
        @NotBlank
        private String password;
        @NotNull
        private Role role; // CUSTOMER by default; ADMIN can create EMPLOYEE
    }

    @Data
    public static class LoginRequest {
        @NotBlank
        private String username; // email or phone
        @NotBlank
        private String password;
    }

    @Data
    public static class AuthResponse {
        private String token;
        private String role;
        private Long userId;
        private String email;
    }
}


