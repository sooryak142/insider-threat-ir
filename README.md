# KBS-IR-2026-017 — Insider Threat, Privilege Abuse & Data Exfiltration Response

**Group 5 · Yenepoya (Deemed to be University) × IBM ICE — Threat Intelligence & Incident Response (October 2026)**

A web-based incident response dossier for a simulated insider-threat case: a departing R&D analyst
at *Kaveri Biosciences Pvt. Ltd.* (fictional) abused leftover privileges to exfiltrate restricted
formulation IP and clinical-trial data. The site covers detection, analysis, containment and defence.

> **All data is simulated for academic evaluation.** The organisation, people, domains and file
> hashes are fictional; IP addresses use RFC 5737 documentation ranges; domains are defanged (`[.]`).

---

## How to run it

This is a static site — no build step, no dependencies.

**Option A — VS Code + Live Server (as the assignment specifies):**
1. Open this folder in VS Code.
2. Install the **Live Server** extension (Ritwick Dey).
3. Right-click `index.html` → **Open with Live Server**.
4. It opens at `http://127.0.0.1:5500/index.html`.

**Option B — any static server:**
```bash
cd group5-insider-threat-ir
python3 -m http.server 5500      # then open http://localhost:5500
```

**Option C:** just double-click `index.html` (navigation and filters work from the file system too).

---

## Structure

```
group5-insider-threat-ir/
├── index.html                 Overview, stats, team, attack chain
├── style.css                  Shared stylesheet (dark SOC theme, responsive, print-friendly)
├── script.js                  Table search/filter, timeline filter, copy-to-clipboard
├── dossier/
│   ├── case-summary.html       Executive summary, impact, attribution, root cause, recommendations
│   ├── timeline.html           27 time-stamped events (adversary / detection / response)
│   ├── attack-mapping.html     MITRE ATT&CK matrix + evidence table (14 techniques, 8 tactics)
│   ├── uba-analysis.html        Risk score, baseline vs observed, credential abuse vs theft
│   ├── dlp-exfiltration.html    Per-channel exfil volume, policy outcomes, control gaps
│   ├── forensic-evidence.html   Chain of custody, image hashes, Windows artefacts, USB audit
│   └── playbook.html            Triage decision flow + NIST SP 800-61 response phases
├── indicators/
│   ├── ioc-matrix.html          Searchable IOC table (20 indicators)
│   ├── iocs.json                Machine-readable IOCs
│   ├── iocs.csv                 Spreadsheet-friendly IOCs
│   └── detections.yml           4 Sigma detection rules derived from the case
├── README.md
└── PRESENTATION_NOTES.md        5-minute walkthrough script + likely Q&A
```

---

## Mapping to the grading rubric

| Rubric parameter | Marks | Where it's covered |
|---|---|---|
| **Threat Analysis & Technical Scope** (IOC matrix, MITRE ATT&CK, attack vectors) | 40 | `attack-mapping.html`, `ioc-matrix.html`, `detections.yml` |
| **Live Demonstration & VS Code Artifacts** (structured repo, HTML/CSS, tables & evidence views) | 35 | the whole site — `/dossier`, `/indicators`, `index.html`, `style.css` |
| **IR Defense & Teamwork** (playbook defence, Q&A, balanced contribution) | 25 | `playbook.html`, `case-summary.html`, `PRESENTATION_NOTES.md`, per-page owners |

## Team

| Member | Reg. no. | Role |
|---|---|---|
| **Sajay Chandran** (Lead) | 24BCAB220 | IR Lead — case management, timeline, playbook |
| Fathimat Afreen | 25BCAB104 | UBA & credential-abuse detection |
| Gayathri Shajan | 24BCAB107 | DLP enforcement & exfiltration tracking |
| Surya Krishnan E U | 24BCAB222 | Endpoint forensics & removable-media audit |

## References

- MITRE CTID Insider Threat TTP Knowledge Base — https://github.com/center-for-threat-informed-defense/insider-threat-ttp-kb (assigned dataset)
- MITRE ATT&CK Enterprise — https://attack.mitre.org/
- NIST SP 800-61 Rev. 2 — Computer Security Incident Handling Guide
- CERT-In Directions, 28 April 2022; India DPDP Act, 2023
