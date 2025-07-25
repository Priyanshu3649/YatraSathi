package com.anmoltravels.YatraSathi.domain.secondary;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "olXoplist")
public class OperationList {

    @Id
    @Column(name = "ol_olid")
    @JsonProperty("id")
    private String id;

    @Column(name = "ol_code")
    @JsonProperty("code")
    private String code;

    @Column(name = "ol_olshort")
    @JsonProperty("shortName")
    private String shortName;

    @Column(name = "ol_html")
    @JsonProperty("html")
    private String html;

    @Column(name = "ol_active")
    @JsonProperty("active")
    private boolean active;

    @Column(name = "ol_order")
    @JsonProperty("order")
    private Integer order;

    @Column(name = "ol_kbsc")
    @JsonProperty("kbsc")
    private String kbsc;

    // Getters and setters below (or use Lombok @Data to generate)

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }

    public String getShortName() { return shortName; }
    public void setShortName(String shortName) { this.shortName = shortName; }

    public String getHtml() { return html; }
    public void setHtml(String html) { this.html = html; }

    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }

    public Integer getOrder() { return order; }
    public void setOrder(Integer order) { this.order = order; }

    public String getKbsc() { return kbsc; }
    public void setKbsc(String kbsc) { this.kbsc = kbsc; }
}
