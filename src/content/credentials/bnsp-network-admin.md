---
id: "cred-bnsp-network-admin"
title: "BNSP Certified Network Administrator Muda"
slug: "bnsp-network-administrator-muda"
institution_logo: "/logos/bnsp.png"
summary: "Indonesian national professional competency license (SKKNI No. 321/2016) certifying Layer 1–4 network operations, IP addressing, switching, WLAN, and routing across Autonomous Systems."
role: "Licensed Certificant"
period:
  start: "2021-06"
  end: "2024-06"
tech_stack:
  - "IP Addressing & Subnetting (VLSM)"
  - "Switching & VLANs (802.1Q)"
  - "WLAN & Wireless Security"
  - "Interior Routing (Static & IGP)"
  - "Inter-AS Routing Concepts"
  - "MikroTik RouterOS / Cisco CLI"
metrics:
  - label: "Issuing Authority"
    value: "Badan Nasional Sertifikasi Profesi (BNSP) / LSP UNY"
    provenance: "BNSP Certificate No. 61100 2522 4 0000106 2021"
  - label: "Standardized Framework"
    value: "SKKNI No. 321 Tahun 2016 (Area J.611000: Telecommunications)"
    provenance: "SKKNI No. 321/2016 occupational qualification standard"
  - label: "Tested Competencies"
    value: "5 core units covering addressing, switching, wireless, and inter-AS routing"
    provenance: "List of Units of Competency on Certificate Back Side"
  - label: "Industry Alignment"
    value: "Direct national curriculum equivalent to MikroTik MTCNA / Cisco CCNA fundamentals"
    provenance: "SKKNI 321/2016 curriculum mapping to RouterOS/CCNA syllabus"
live_url: null
archive_status: "archived"
credential_type: "license"
issuing_body: "Badan Nasional Sertifikasi Profesi (BNSP) / LSP UNY"
validity: "2021-06 to 2024-06 (3-year earned national professional license)"
provenance_source: "BNSP Certificate of Competence No. 61100 2522 4 0000106 2021"
privacy_level: "public"
epistemic_status: "verified-fact"
verification_notes: "Earned Indonesian National Professional Competency License (Network Administrator Muda) issued under SKKNI standards by BNSP via LSP UNY on 26 June 2021. Valid 2021–2024; retained in career records as a permanent verified foundational credential."
evidence:
  - type: "internal-pdf"
    label: "BNSP National Competency Certificate (Verified Credential)"
    url: "#"
    is_internal: true
    status: "restricted"
---

## 1. National Licensing Framework & Overview

The **Network Administrator Muda (Junior Network Administrator)** certification is a state-recognized professional competency license issued by the **Badan Nasional Sertifikasi Profesi (BNSP)** through the **Lembaga Sertifikasi Profesi Universitas Negeri Yogyakarta (LSP UNY)**.

Administered under the **Indonesian National Work Competency Standards (SKKNI No. 321 Tahun 2016)** for the Information and Communication Technology / Telecommunications sector (Category J, Area `J.611000`), the license certifies proven, hands-on mastery in deploying, configuring, and operating local and wide area network infrastructure across Layers 1 through 4 of the OSI model.

Unlike academic course completion certificates or attendance records, this credential represents an independently assessed occupational license confirming verified practical competence under national industry standards.

---

## 2. Tested Units of Competency (Daftar Unit Kompetensi)

The practical assessment evaluated five standardized units of competency specified on the official certificate registry:

| No. | Unit Code | Competency Unit Title | Assessed Engineering Capabilities |
| :--- | :--- | :--- | :--- |
| **1** | `J.611000.004.01` | **Designing Network Addressing**<br>*(Merancang Pengalamatan Jaringan)* | Designing IPv4/IPv6 allocation schemes, Variable Length Subnet Masking (VLSM), Classless Inter-Domain Routing (CIDR), DHCP server pool configuration, and Network Address Translation (Source NAT, Destination NAT, Masquerade). |
| **2** | `J.611000.010.02` | **Setting Up a Wireless Network**<br>*(Memasang Jaringan Nirkabel)* | Deploying IEEE 802.11 infrastructure, RF channel planning, configuring Access Point (AP), Station/Client, and Bridge modes, and enforcing wireless security protocols (WPA2-PSK/Enterprise, MAC address access control lists). |
| **3** | `J.611000.012.02` | **Configuring Switch on the Network**<br>*(Mengkonfigurasi Switch pada Jaringan)* | Managing Layer 2 bridging and switching hardware, segmenting broadcast domains using Virtual Local Area Networks (VLANs), configuring 802.1Q trunking, access ports, and Inter-VLAN routing handoffs. |
| **4** | `J.611000.013.02` | **Configuring Routing in One Autonomous System**<br>*(Mengkonfigurasi Routing pada Perangkat Jaringan dalam Satu Autonomous System)* | Routing table architecture, static routing, default gateway setup, recursive lookups, floating backup routes, and dynamic Interior Gateway Protocol (IGP) deployment (single-area OSPF). |
| **5** | `J.611000.014.02` | **Configuring Routing antar Autonomous System**<br>*(Mengkonfigurasi Routing pada Perangkat Jaringan antar Autonomous System)* | Inter-network boundary routing, external gateway routing policies, perimeter traffic forwarding, and foundational concepts governing data exchange across distinct Autonomous Systems. |

---

## 3. Industry Vendor Alignment: Equivalence to MikroTik MTCNA

In Indonesian professional and technical vocational practice, the **SKKNI Network Administrator Muda** syllabus directly mirrors the curriculum of the international **MikroTik Certified Network Associate (MTCNA)** and entry-level **Cisco CCNA (Network Fundamentals & Routing/Switching)** tracks:

* **Addressing & Subnetting (`J.611000.004.01`):** Maps to MTCNA Modules 1 & 2 (IP addressing, DHCP server/client setup, ARP tables, and basic firewall NAT/Masquerade rules in RouterOS).
* **Wireless Networking (`J.611000.010.02`):** Maps to MTCNA Module 6 (802.11a/b/g/n wireless interfaces, frequency scans, registration tables, AP-bridge configurations, and WPA2 security profiles).
* **Switching & VLANs (`J.611000.012.02`):** Maps to MTCNA Module 3 & 4 (Bridging, switch-chip hardware offloading, and IEEE 802.1Q VLAN trunking).
* **Intra-AS Routing (`J.611000.013.02`):** Maps to MTCNA Module 5 (IP routing tables, static routes, distance/metric weights, default gateway paths, and single-area OSPF configuration).
* **Inter-AS Routing (`J.611000.014.02`):** Maps to MTCNA / MTCRE boundary routing concepts (multi-homed gateway routing, failover routes, and upstream peering interfaces).

While vendor-specific credentials test syntax within proprietary operating systems (such as MikroTik RouterOS or Cisco IOS), this BNSP certification validates **vendor-neutral foundational competence**. The assessed principles apply universally across enterprise hardware, Linux server networking (`iptables`, `nftables`, `iproute2`), and production gateway environments.

---

## 4. Operational Application Across Portfolio Systems

This standardized networking baseline directly underpinned several major engineering initiatives documented across this portfolio:

1. **Campus Network Support & Internship (UPT Telematika):** Terminating optical fiber lines, configuring Cisco Catalyst 3850 series switches, and resolving VLAN and subnet routing conflicts across university facilities.
2. **Server Administration & Security (UKM Rekayasa Teknologi / RESTek):** Configuring internal Linux staging servers, segmenting subnets across five engineering research divisions, and securing network perimeter access.
3. **High-Concurrency Campus E-Voting Platform (Pemilwa):** Designing the network topology, on-premise server reverse proxy routing, and isolated database subnets that handled 39,725 student voters with zero downtime.

---

## 5. Credential Verification & Privacy Notice

* **Issuing Body:** Badan Nasional Sertifikasi Profesi (BNSP) / Lembaga Sertifikasi Profesi Universitas Negeri Yogyakarta (LSP UNY).
* **Certificate Registry:** No. 61100 2522 4 0000106 2021.
* **Issuance Date:** 26 June 2021 (Yogyakarta, Indonesia).
* **Validity Period:** 26 June 2021 – 26 June 2024 (Earned 3-year national license; permanently preserved in career archives as verified foundational competency).
* **Privacy Assurance:** In accordance with personal data privacy practices, personal registration serial numbers, signatures, and unredacted identity scans are withheld from public display. Authentic physical credentials and institutional registry records are available for background check verification upon formal request.
