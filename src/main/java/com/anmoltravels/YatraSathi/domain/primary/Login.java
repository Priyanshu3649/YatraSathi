package com.anmoltravels.YatraSathi.domain.primary;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "lgXlogin")
@Data
public class Login {

    @Id
    private String lgEmail;

    private String lgAlias;
    private String lgPasswd;
    private String lgRand;
    private Integer lgIsreg;
    private Integer lgMntn;
    private Integer lgLock;
    private Integer lgFrset;
    private Integer lgTwofa;
}
