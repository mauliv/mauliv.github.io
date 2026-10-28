---
id: "sys-patilo-web"
title: "Kerupuk Patilo MSME Direct-to-Consumer Web Platform"
slug: "kerupuk-patilo-msme"
summary: "Direct-to-consumer web platform and WhatsApp order routing hub built to eliminate middleman price-gouging for rural cassava cracker producers in Gunungkidul."
excerpt: "Developed under the Ministry of Education's PHP2D national grant using an SDLC Waterfall methodology, the platform provided village producer workshops with dedicated online storefront profiles and direct WhatsApp dispatch routing, enabling rural food producers to sell directly to regional consumers without predatory middleman markups."
role: "Lead Systems Architect & Web Developer"
period:
  start: "2021-07"
  end: "2021-12"
institution_logo: "/logos/kemdikbud.svg"
tech_stack:
  - "HTML5 / CSS3 / JavaScript"
  - "SDLC Waterfall"
  - "WhatsApp API Click-to-Chat"
  - "Niagahoster DNS / Cloudflare"
  - "Adobe Photoshop"
  - "Packaging Graphic Design"
metrics:
  - label: "Workshop Coverage"
    value: "4 distinct production houses (Mekarsari, Yusuf, Fella, Dian Saki)"
    provenance: "Laporan PPM PHP2D Alif:15-18"
  - label: "Order Routing"
    value: "Zero-intermediary direct WhatsApp dispatch links per producer"
    provenance: "Laporan PPM PHP2D Alif:Lampiran 1"
  - label: "Host Domain"
    value: "kerupukpatilo.id (Direct producer storefront)"
    provenance: "Laporan PPM PHP2D Alif:15"
  - label: "Operational Context"
    value: "Rural karst village with mobile WhatsApp dispatch"
    provenance: "Laporan PPM PHP2D Alif:16"
live_url: null
archive_status: "archived"
architecture_type: "native"
database:
  local_development: "Static JSON & Structured HTML Catalog"
  production_cluster: "Static Web Hosting"
  concurrency_mechanism: "Direct WhatsApp Client Dispatch"
security_profile:
  auth_provider: "Peer-to-Peer WhatsApp Messaging (No database credentials needed)"
  network_perimeter: "HTTPS TLS"
  audit_logging: "DNS & web server access logs"
provenance_source: "Laporan PPM PHP2D; Laporan Akhir PHP2D UKM KRISTAL UNY (2021)"
privacy_level: "public"
epistemic_status: "verified-fact"
verification_notes: "Built and deployed under Ministry of Education (Kemendikbudristek) PHP2D 2021 grant; verified with full 25-page R&D report, domain invoices, and UI captures."
evidence:
  - type: "internal-pdf"
    label: "R&D Systems & Web Report (Laporan PPM Alif)"
    url: "/docs/leadership/laporan-ppm-php2d-alif-patilo.pdf"
    is_internal: true
    status: "available"
  - type: "internal-pdf"
    label: "Ministry of Education (Kemendikbudristek) Grant Certificate"
    url: "/docs/leadership/sertifikat-php2d-kemdikbud.pdf"
    is_internal: true
    status: "available"
  - type: "internal-pdf"
    label: "Comprehensive Grant Final Report (UKM KRISTAL)"
    url: "/docs/leadership/laporan-akhir-php2d-kristal-uny.pdf"
    is_internal: true
    status: "available"
  - type: "external-press"
    label: "UNY News Report"
    url: "https://www.uny.ac.id/id/berita/ukm-kristal-fe-uny-dampingi-umkm-patilo-di-gunungkidul"
    is_internal: false
    status: "available"
---

## 1. The Socio-Economic Challenge: The Middleman Trap

**Patilo** is a traditional snack indigenous to Gunungkidul, crafted from fermented cassava pulp mixed with purified cassava starch, spiced, hand-molded into rings or discs, steamed, sun-dried, and deep-fried. 

In **Padukuhan Pakel (Kalurahan Tepus)**, patilo production has been the primary household income source for women farmers organized under **Kelompok Wanita Tani (KWT) Pertiwi** since 1998. However, despite producing up to 200 kg per batch, the producers were trapped in an unfavorable supply chain:

1. **Predatory Intermediaries (*Pengepul*):** Due to lack of transportation and market access, producers sold their yield raw and unbranded to itinerant middlemen at bare-minimum prices (frequently struggling to cover raw Singkong spikes during dry seasons). Middlemen repackaged and resold the crackers in Yogyakarta and Surakarta with 300%–400% markups.
2. **Zero Digital Visibility:** The cooperative had no digital footprint, no telephone directory, and no branded consumer identity. Buyers outside the village had no mechanism to discover or contact the workshops directly.
3. **Severe Connectivity Constraints:** Padukuhan Pakel is nestled between arid karst limestone hills with severe cellular dead zones. Direct complex e-commerce platforms (which require constant server-side management or high-bandwidth apps) were completely impractical for the village's elderly producers.

> 🏅 **Institutional Grant Mandate:**  
> This digital systems and direct-to-consumer web project was funded and deployed under the IDR 44.6M national competitive grant (Holistic Village Development and Empowerment Program / PHP2D) from the Ministry of Education (Kemendikbudristek Ditjen Diktiristek):  
> 👉 **[National Rural MSME Digitalization Grant (PHP2D — Ministry of Education)](/credentials/php2d-msme)**

---

## 2. Engineering Architecture & The Direct WhatsApp Dispatch Model

To bypass intermediary exploitation while operating within the village's low-connectivity reality, I designed and developed **`kerupukpatilo.id`** as a lightweight, high-performance static web platform.

![Kerupuk Patilo Web Platform Header](/images/patilo/patilo-web-hero.png)

### A. The Direct Dispatch Workflow
Instead of forcing rural producers to log into complicated administrative dashboards, the platform implements a **decentralized client-side order routing architecture**:

```
[ Visitor Browses kerupukpatilo.id ]
                │
                ▼
[ Selects Local Workshop Profile ]
(Mekarsari / Yusuf / Fella / Dian Saki)
                │
                ▼
[ Clicks Dedicated "Pesan via WhatsApp" Button ]
                │
                ▼
[ Deep-Link Triggers WhatsApp URI Scheme ]
(https://wa.me/628.../?text=Halo%20Rumah%20Produksi...)
                │
                ▼
[ Direct Peer-to-Peer Conversation with Village Producer ]
```

* **No Centralized Single Point of Failure:** Orders are dispatched directly into the respective household's smartphone WhatsApp application, where producers are already comfortable communicating.
* **Workshop Autonomy:** Each of the four major workshops in the hamlet (**Rumah Produksi Mekarsari, Rumah Produksi Yusuf, Rumah Produksi Fella, Rumah Produksi Dian Saki**) received their own dedicated profile card highlighting their unique specialty (e.g., extra crispiness, specific expansion ratio when fried).

![Direct WhatsApp Order Routing System per Workshop](/images/patilo/patilo-web-order-wa.png)

---

## 3. Development Methodology: SDLC Waterfall

As detailed in my technical report (*Laporan PPM PHP2D*), the platform was built following a structured **Software Development Life Cycle (SDLC) Waterfall** process tailored to community participatory development:

1. **Requirements Analysis:** Field surveys and discussions with KWT Pertiwi members, identifying product variants, pricing tiers, and contact numbers.
2. **System & Information Architecture Design:** Prototyping responsive layouts in Adobe Photoshop and JetBrains WebStorm, optimized for fast loading on mobile browsers over rural connectivity.
3. **Implementation:** Handcrafted semantic HTML5, modern CSS3 styling, and client-side JavaScript dispatch handlers connecting visitors directly to WhatsApp. Deployed under the cooperative's web domain `kerupukpatilo.id`.
4. **Unit & Integration Testing:** Field validation across varied screen sizes and testing WhatsApp Click-to-Chat URI triggers across Android devices.
5. **Community Handover & Socialization:** Training sessions at the Pakel Community Hall (*Balai Dusun Pakel*), preparing KWT members and Karang Taruna youth to handle incoming customer inquiries.

![Source Code in IDE](/images/patilo/patilo-web-source-code.png)

---

## 4. Visual Branding & Commercial Packaging Synergy

A digital storefront works best when paired with appealing, standardized retail packaging. In tandem with the web platform, I redesigned the packaging graphics for the village products:

* **Variant & Flavor Checklists:** Formatted front labels for standing pouches and heat-sealed retail bags featuring clear checkboxes for cracker varieties (Singkong, Beras, Rambak, Gendar, Pathilo) and flavors (Original, Pedas, Manis).
* **Official Regulatory Proof:** Integrated official **P-IRT food production registration**, Halal certification, and lab-tested nutritional facts (tested by CV Chem-Mix Pratama).
* **Direct Contact Anchor:** Each physical package displayed the workshop's direct contact numbers and website, closing the loop between offline purchases and repeat online orders.

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
  <figure class="space-y-2">
    <img src="/images/patilo/patilo-packaging-fella.png" alt="Retail Packaging Design — Rumah Produksi Fella" class="rounded-lg border border-neutral-200 dark:border-neutral-700 w-full max-h-96 object-contain bg-neutral-50 dark:bg-neutral-900 p-2" />
    <figcaption class="text-xs text-center text-neutral-500 font-mono">Retail Packaging Design — Rumah Produksi Fella</figcaption>
  </figure>
  <figure class="space-y-2">
    <img src="/images/patilo/patilo-packaging-nanda.png" alt="Retail Packaging Design — Rumah Produksi Nanda" class="rounded-lg border border-neutral-200 dark:border-neutral-700 w-full max-h-96 object-contain bg-neutral-50 dark:bg-neutral-900 p-2" />
    <figcaption class="text-xs text-center text-neutral-500 font-mono">Retail Packaging Design — Rumah Produksi Nanda</figcaption>
  </figure>
</div>

---

## 5. Lifecycle Post-Mortem & Takeaways

* **Single-Cycle Grant Scope:** The PHP2D initiative was a one-year competitive community empowerment grant (2021). The `kerupukpatilo.id` domain was hosted and maintained throughout the operational grant cycle.
* **Transition to Direct Messaging:** Without recurring municipal funding for annual domain renewals after the student project concluded, producers naturally transitioned to direct WhatsApp orders and phone calls, leveraging the contacts established during the program.
* **Durable Legacy:** Even after the web domain completed its cycle, the direct buyer relationships formed via WhatsApp, the commercial standing pouch packaging, the formal P-IRT registration, and two industrial processing machines permanently elevated the village's cooperative production capacity.

---

## 6. Related Credentials & Grants

* 👉 **National Grant Mandate:** [National Rural MSME Digitalization Grant (PHP2D — Ministry of Education)](/credentials/php2d-msme) — Full grant dossier detailing the IDR 44,643,000 Ministry of Education funding, ministerial decree (No. 28/E2/KM/2021), industrial machinery procurement, and rural cooperative development outcomes.
* 👉 **Primary Technical Evidence:** [R&D Systems & Web Report (Laporan PPM Alif)](/docs/leadership/laporan-ppm-php2d-alif-patilo.pdf)
