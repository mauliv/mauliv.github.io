---
id: "cred-bnsp-network-admin"
title: "Certified Junior Network Administrator: National Professional Certification Board (BNSP)"
slug: "bnsp-network-administrator-muda"
institution_logo: "/logos/bnsp.png"
summary: "Indonesian national professional competency license (SKKNI No. 321/2016) certifying Layer 1–4 enterprise network operations, IP addressing, switching, WLAN, and routing across Autonomous Systems."
role: "Certified Junior Network Administrator"
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
    value: "National Professional Certification Board (BNSP) / UNY Professional Certification Body (LSP UNY)"
    provenance: "BNSP Certificate No. 61100 2522 4 0000106 2021"
  - label: "Standardized Framework"
    value: "National Work Competency Standards (SKKNI No. 321/2016: Telecommunications Area J.611000)"
    provenance: "SKKNI No. 321/2016 occupational qualification standard"
  - label: "Tested Competencies"
    value: "5 core units covering addressing, switching, wireless, and inter-AS routing"
    provenance: "List of Units of Competency on Certificate Back Side"
  - label: "Competency Scope"
    value: "Enterprise network addressing, Layer 2 switching, wireless deployment, and routing"
    provenance: "SKKNI No. 321/2016 (ICT Telecommunications Category J.611000)"
live_url: null
archive_status: "archived"
credential_type: "license"
issuing_body: "National Professional Certification Board (BNSP) / UNY Professional Certification Body (LSP UNY)"
validity: "2021-06 to 2024-06 (3-year earned national professional license)"
provenance_source: "BNSP Certificate of Competence No. 61100 2522 4 0000106 2021"
privacy_level: "public"
epistemic_status: "verified-fact"
verification_notes: "Earned National Professional Competency License (Junior Network Administrator) issued under national occupational standards (SKKNI) by the National Professional Certification Board (BNSP) via LSP UNY on 26 June 2021. Valid 2021–2024; permanently retained in career records as verified foundational competency."
evidence:
  - type: "internal-pdf"
    label: "National Professional Competency Certificate (BNSP Verified Credential)"
    url: "/docs/credentials/sertifikat-bnsp-network-admin.pdf"
    is_internal: true
    status: "available"
---

## 1. National Licensing Framework & Overview

The **Junior Network Administrator** (*Network Administrator Muda*) certification is a state-recognized professional competency license issued by the **National Professional Certification Board (BNSP: Badan Nasional Sertifikasi Profesi)** through the **UNY Professional Certification Body (LSP UNY)**.

Administered under the **Indonesian National Work Competency Standards (SKKNI No. 321/2016)** for the Information and Communication Technology / Telecommunications sector (Category J, Area `J.611000`), the license certifies proven, hands-on mastery in deploying, configuring, and operating local and wide area network infrastructure across Layers 1 through 4 of the OSI model.

Unlike academic course completion certificates or attendance records, this credential represents an independently assessed occupational license confirming verified practical competence under national industry standards.

---

## 2. Tested Units of Competency (SKKNI Occupational Standards)

The practical assessment evaluated five standardized units of competency specified on the official certificate registry:

| No. | Unit Code | Competency Unit Title | Assessed Engineering Capabilities |
| :--- | :--- | :--- | :--- |
| **1** | `J.611000.004.01` | **Designing Network Addressing**<br>*(Merancang Pengalamatan Jaringan)* | Designing IPv4/IPv6 allocation schemes, Variable Length Subnet Masking (VLSM), Classless Inter-Domain Routing (CIDR), DHCP server pool configuration, and Network Address Translation (Source NAT, Destination NAT, Masquerade). |
| **2** | `J.611000.010.02` | **Setting Up a Wireless Network**<br>*(Memasang Jaringan Nirkabel)* | Deploying IEEE 802.11 infrastructure, RF channel planning, configuring Access Point (AP), Station/Client, and Bridge modes, and enforcing wireless security protocols (WPA2-PSK/Enterprise, MAC address access control lists). |
| **3** | `J.611000.012.02` | **Configuring Switch on the Network**<br>*(Mengkonfigurasi Switch pada Jaringan)* | Managing Layer 2 bridging and switching hardware, segmenting broadcast domains using Virtual Local Area Networks (VLANs), configuring 802.1Q trunking, access ports, and Inter-VLAN routing handoffs. |
| **4** | `J.611000.013.02` | **Configuring Routing in One Autonomous System**<br>*(Mengkonfigurasi Routing dalam Satu Autonomous System)* | Routing table architecture, static routing, default gateway setup, recursive lookups, floating backup routes, and dynamic Interior Gateway Protocol (IGP) deployment (single-area OSPF). |
| **5** | `J.611000.014.02` | **Configuring Routing Across Autonomous Systems**<br>*(Mengkonfigurasi Routing antar Autonomous System)* | Inter-network boundary routing, external gateway routing policies, perimeter traffic forwarding, and foundational concepts governing data exchange across distinct Autonomous Systems. |

---

## 3. Standardized Occupational Competency (SKKNI Framework)

The **Junior Network Administrator** competency scheme evaluates practical network administration across five core units under national occupational standards:

* **Addressing & Subnetting (`J.611000.004.01`):** Designing IPv4/IPv6 allocation schemes, Variable Length Subnet Masking (VLSM), Classless Inter-Domain Routing (CIDR), DHCP server pools, and Network Address Translation (NAT).
* **Wireless Networking (`J.611000.010.02`):** Configuring IEEE 802.11 infrastructure, RF channel planning, AP/Station modes, and WPA2 wireless security controls.
* **Switching & VLANs (`J.611000.012.02`):** Layer 2 bridging, broadcast domain segmentation via IEEE 802.1Q VLAN trunking, and access port configurations.
* **Intra-AS Routing (`J.611000.013.02`):** IP routing table architecture, static routing, default gateway paths, and dynamic Interior Gateway Protocol (IGP) deployment.
* **Inter-AS Routing (`J.611000.014.02`):** Boundary routing concepts, perimeter gateway policies, and upstream traffic forwarding across distinct autonomous domains.

As a government-accredited competency license under BNSP, this certification validates **vendor-neutral foundational competence** in networking principles. These core skills apply directly across enterprise network hardware, production routing, and Linux server networking (`iptables`, `nftables`, `iproute2`).

---

## 4. Operational Application Across Portfolio Systems

This standardized networking baseline directly underpinned several major engineering initiatives documented across this portfolio:

1. **Campus Network Support & Internship (UNY IT & Network Center / UPT Telematika):** Terminating optical fiber lines, configuring Cisco Catalyst 3850 series switches, and resolving VLAN and subnet routing conflicts across university facilities.
2. **Server Administration & Security (Engineering Student Research Organization / RESTek):** Configuring internal Linux staging servers, segmenting subnets across five engineering research divisions, and securing network perimeter access.
3. **High-Concurrency Campus E-Voting Platform (Pemilwa):** Designing the network topology, on-premise server reverse proxy routing, and isolated database subnets that handled 39,725 student voters with zero downtime.

---

## 5. Credential Verification & Privacy Notice

* **Issuing Body:** National Professional Certification Board (BNSP: Badan Nasional Sertifikasi Profesi) / UNY Professional Certification Body (LSP UNY).
* **Certificate Registry:** No. 61100 2522 4 0000106 2021.
* **Issuance Date:** 26 June 2021 (Yogyakarta, Indonesia).
* **Validity Period:** 26 June 2021 – 26 June 2024 (Earned 3-year national license; permanently preserved in career archives as verified foundational competency).
* **Privacy Assurance:** In accordance with personal data privacy practices, personal registration serial numbers, signatures, and unredacted identity scans are withheld from public display. Authentic physical credentials and institutional registry records are available for background check verification upon formal request.
