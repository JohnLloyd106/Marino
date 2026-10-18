# Prompt Log - BayanIsla: Coastal Resource & Fisherfolk Catch Log

## Project Overview
- *Sector:* Blue Economy & Marine Innovation[span_4](start_span)[span_4](end_span)
- *Project Title:* BayanIsla: Coastal Resource & Fisherfolk Catch Log
- *Local Challenge:* Local fisherfolk and coastal managers in Marinduque struggle to record daily marine catch data, track sustainable fishing practices, and access simple safety reminders in one centralized place[span_5](start_span)[span_5](end_span).
- *Target Users:* Local fisherfolk, coastal resource managers, and marine biology students in Marinduque[span_6](start_span)[span_6](end_span).
- *Proposed Solution:* A single-page web prototype providing a local marine species guide, an interactive pre-voyage safety checklist, and a catch record logger[span_7](start_span)[span_7](end_span)[span_8](start_span)[span_8](end_span).

---

## Task 2: Zero-Shot Prompting (Baseline)
*Objective:* Observe baseline code generation from Copilot using a brief instruction without context or constraints[span_9](start_span)[span_9](end_span)[span_10](start_span)[span_10](end_span).

*Exact Prompt:*
Create a simple website called BayanIsla for fisherfolk in Marinduque. Include a fish species guide, a safety checklist, and a catch logging form. Use HTML, CSS, and JavaScript.


*Actual Copilot Output:*
- Saved in relative path: `outputs/baseline-zero-shot/index.html`[span_11](start_span)[span_11](end_span)[span_12](start_span)[span_12](end_span)

*What Worked:*
- Produced a single HTML file containing inline CSS and basic JavaScript for a checklist[span_13](start_span)[span_13](end_span).
- Generated simple list placeholders for species and catch forms[span_14](start_span)[span_14](end_span).

*What Needs Improvement:*
- Missing file separation (HTML, CSS, JS were merged)[span_15](start_span)[span_15](end_span).
- Lack of input validation for catch weights and missing dynamic progress tracking[span_16](start_span)[span_16](end_span)[span_17](start_span)[span_17](end_span).
- No responsive layout or accessibility considerations[span_18](start_span)[span_18](end_span).

*Next Action / Verification:*
- Structure the prompt using the Anatomy of a Prompt framework (Role, Context, Constraints, Acceptance Criteria)[span_19](start_span)[span_19](end_span)[span_20](start_span)[span_20](end_span).

---

## Task 3: Improvement via Anatomy of a Prompt
*Objective:* Generate modular, responsive, and accessible code by structuring prompt components[span_21](start_span)[span_21](end_span)[span_22](start_span)[span_22](end_span).

*Exact Prompt:*
Act as an experienced frontend web developer. Create a responsive single-page website called BayanIsla for local fisherfolk and coastal managers in Marinduque, Philippines.

Context: The website aims to help users view common marine species information, complete a pre-voyage safety checklist, and log daily fish catches.

Requirements:
1. Create a Marine Species Guide with general educational information about Yellowfin Tuna, Tilapia, and Mud Crab.
2. Create an interactive Pre-Voyage Safety Checklist with checkboxes, a progress counter, a progress bar, and a reset button.
3. Create a Catch Record Form where users can enter a species name, catch weight in kilograms, and date. Display valid entries in a table.

Constraints:
- Use semantic HTML5, CSS3, and vanilla JavaScript.
- Create separate index.html, style.css, and script.js files.
- Do not use frameworks, a backend, a database, authentication, or external APIs.
- Do not include live weather, live sea conditions, or real-time maritime warnings.
- Use simple English and a clean ocean-blue-themed design.
- Make the website responsive on desktop and mobile devices.
- Include accessible form labels and visible keyboard focus indicators.

Acceptance Criteria:
- All three main features must be present.
- The checklist progress must update when items are checked or unchecked.
- The reset button must uncheck all checklist items.
- The form must validate required fields and reject non-positive weights.
- Valid catch entries must appear in the table.
- Use text-safe methods when displaying user input.
- Explain how to run and test the website.

Generate the complete code for all three files.


*Actual Copilot Output:*
- Generated modular index.html, style.css, and `script.js`[span_23](start_span)[span_23](end_span)[span_24](start_span)[span_24](end_span).
- Preserved in relative path: `outputs/structured-prompt-v1/`[span_25](start_span)[span_25](end_span)[span_26](start_span)[span_26](end_span)

*Key Differences vs. Task 2 Baseline:*
1. *Code Structure:* Task 2 produced a single unified file, whereas Task 3 separated code cleanly into dedicated HTML, CSS, and JS files[span_27](start_span)[span_27](end_span)[span_28](start_span)[span_28](end_span).
2. *Interactivity & Validation:* Task 3 added real-time progress percentage updates for safety items and validation for catch weight inputs[span_29](start_span)[span_29](end_span)[span_30](start_span)[span_30](end_span).

*What Worked:*
- Responsive layout with clean oceanic blue styling[span_31](start_span)[span_31](end_span)[span_32](start_span)[span_32](end_span).
- Active progress bar and interactive table insertion[span_33](start_span)[span_33](end_span)[span_34](start_span)[span_34](end_span).

*What Needs Improvement:*
- Marine species cards lacked standardized structural formatting[span_35](start_span)[span_35](end_span)[span_36](start_span)[span_36](end_span).

---

## Task 4: Few-Shot and Role Assignment

### Task 4A: Few-Shot Prompting
*Objective:* Standardize marine species cards layout and content using explicit examples[span_37](start_span)[span_37](end_span)[span_38](start_span)[span_38](end_span).

*Exact Prompt:*
Update the Marine Species Guide section of my BayanIsla website using few-shot prompting.

Follow these examples:

Example 1:
Species: Yellowfin Tuna (Tulingan/Tambakol)
Category: Pelagic Fish
Description: Found in deep ocean waters; highly valued for local commercial fishing.

Example 2:
Species: Mud Crab (Alimango)
Category: Crustacean
Description: Inhabits coastal mangroves and brackish waters; requires sustainable harvesting sizes.

Create two additional marine species entries using the same format. Use general educational information only. Do not invent local sanctuary regulations, live prices, or guaranteed catch locations.

Display all species entries as consistent, responsive cards using semantic HTML and CSS. Keep the existing website design and features. Do not rewrite unrelated code.


*Actual Copilot Output:*
- Generated formatted cards for Yellowfin Tuna, Mud Crab, Milkfish, and Groupers[span_39](start_span)[span_39](end_span)[span_40](start_span)[span_40](end_span).
- Saved in relative path: `outputs/few-shot-cards.html`[span_41](start_span)[span_41](end_span)[span_42](start_span)[span_42](end_span)

*Observation:*
- Few-shot prompting maintained identical card height, tag placement, and content hierarchy across all entries[span_43](start_span)[span_43](end_span)[span_44](start_span)[span_44](end_span).

---

### Task 4B: Role Assignment Prompting
*Objective:* Identify accessibility and semantic weaknesses using an expert perspective[span_45](start_span)[span_45](end_span)[span_46](start_span)[span_46](end_span).

*Exact Prompt:*
Act as a Web Accessibility (WCAG 2.2) Specialist and Code Auditor. Review the current index.html and script.js files for the BayanIsla website. Identify accessibility or semantic HTML defects (e.g., missing labels, keyboard navigation issues, focus states, or DOM injection risks). Provide a brief critique and recommended code corrections.


*Actual Copilot Output:*
- Copilot flagged missing aria-live dynamic announcements for the safety progress bar and suggested scope attributes for table headings[span_47](start_span)[span_47](end_span).
- Preserved response in: `outputs/accessibility-audit-response.md`[span_48](start_span)[span_48](end_span)[span_49](start_span)[span_49](end_span)

*Observation:*
- Role assignment highlighted accessibility needs for screen reader users during checklist interactions[span_50](start_span)[span_50](end_span)[span_51](start_span)[span_51](end_span).

---

## Task 5: Structured Technical Reasoning & Refinement
*Objective:* Conduct a technical diagnosis and apply verifiable fixes[span_52](start_span)[span_52](end_span)[span_53](start_span)[span_53](end_span).

*Exact Prompt:*
Review my BayanIsla codebase. Check whether the interactive checklist updates correctly, whether form validation prevents non-positive numbers, and whether the layout works on mobile. Identify the two most important implementation issues. Recommend minimal, targeted fixes and explain how to verify them.


*Selected Issues & Corrections:*
1. *Dynamic Text Insertion Risk:* Catch logger inputs were inserted using innerHTML, creating potential XSS script execution risks. Refactored using safe textContent node assignments[span_54](start_span)[span_54](end_span)[span_55](start_span)[span_55](end_span).
2. *Keyboard Accessibility for Safety Labels:* Form inputs lacked explicit for attribute linkages to corresponding <label> IDs[span_56](start_span)[span_56](end_span).

*Verification Results:*
- Inputted HTML tags (<img src=x onerror=alert(1)>) into species inputs; rendered safely as plain string text[span_57](start_span)[span_57](end_span).
- Verified keyboard accessibility using Tab and Spacebar to toggle safety checklist items[span_58](start_span)[span_58](end_span)[span_59](start_span)[span_59](end_span).

---

## Task 6: Final Comparison & Reflection

### Comparison Table
| Technique | Observation / Result |
| :--- | :--- |
| **Zero-Shot**[span_60](start_span)[span_60](end_span)[span_61](start_span)[span_61](end_span) | Produced an incomplete prototype lacking code separation, mobile responsiveness, and input validation[span_62](start_span)[span_62](end_span). |
| **Structured Prompt**[span_63](start_span)[span_63](end_span)[span_64](start_span)[span_64](end_span) | Generated a modular 3-file frontend prototype satisfying all structural and technical requirements[span_65](start_span)[span_65](end_span). |
| **Few-Shot**[span_66](start_span)[span_66](end_span)[span_67](start_span)[span_67](end_span) | Ensured uniform design and card hierarchy across all species profile entries[span_68](start_span)[span_68](end_span)[span_69](start_span)[span_69](end_span). |
| **Role Assignment**[span_70](start_span)[span_70](end_span)[span_71](start_span)[span_71](end_span) | Uncovered WCAG accessibility flaws, missing keyboard focus, and dynamic aria regions[span_72](start_span)[span_72](end_span). |
| **Structured Analysis**[span_73](start_span)[span_73](end_span)[span_74](start_span)[span_74](end_span) | Solved DOM security risks (XSS) and explicit label association issues[span_75](start_span)[span_75](end_span). |

### Final Reflection
Structured prompt engineering acts as a technical specification tool[span_76](start_span)[span_76](end_span). AI generation drastically reduces setup time, but continuous human review and verification are necessary to maintain code quality, security, and WCAG accessibility standards[span_77](start_span)[span_77](end_span)[span_78](start_span)[span_78](end_span)[span_79](start_span)[span_79](end_span). 
