---
layout: academic-page
title: CV
permalink: /cv/
redirect_from:
  - /resume
education:
  - title: Doctoral research
    organization: ETH Zurich and Paul Scherrer Institute
    dates: Began March 2022
    detail: "Research topic: sustainability assessment of low-carbon fuels toward net-zero emissions."
  - title: MSc, Environmental Sciences
    organization: ETH Zurich
    dates: September 2019 – February 2022
    detail: Major in biogeochemistry and pollutant dynamics. Minor in global change and sustainability.
  - title: BSc, Environmental Sciences
    organization: Tongji University
    dates: September 2015 – July 2019
    detail: Minor in sustainable development.
experience:
  - title: Doctoral researcher
    organization: Chair of Energy System Analysis, ETH Zurich · Technology Assessment Group, PSI
    dates: Doctoral work begun in 2022
    detail: Reviewed how models represent low-carbon fuels, developed prospective cost and hydrogen delivery models, and combined hourly plant optimization with life-cycle assessment. Contributed to the SHELTERED project.
  - title: Research assistant and master’s research placement
    organization: Technology and Society Laboratory, Empa
    dates: 2020–2021
    detail: Developed probabilistic and dynamic material flow models for plastics. Harmonized input data and applied Monte Carlo simulation to assess parameter uncertainty.
  - title: Science-policy intern
    organization: UN Environment Programme, Nairobi
    dates: 2019
    detail: Supported stakeholder preparations, briefings, and event coordination for the fourth UN Environment Assembly.
skills:
  - title: Energy and technology assessment
    detail: Techno-economic assessment, scenario analysis, hydrogen logistics, Power-to-X, and hourly mixed-integer optimization with Python and Gurobi.
  - title: Environmental assessment
    detail: Prospective life-cycle assessment, life-cycle inventories, probabilistic and dynamic material flow analysis, and uncertainty and sensitivity analysis.
  - title: Software and data
    detail: Python, R, SQL, Brightway, premise, ecoinvent, Activity Browser, SimaPro, ArcGIS, MATLAB, Git, and Jupyter. SHAP for model interpretation.
  - title: Languages
    detail: Chinese (native), English (C1), German (basic).
---

<div class="page-content cv-content">
  {% include cv-timeline.html title="Education" id="education" entries=page.education %}
  {% include cv-timeline.html title="Research and professional experience" id="experience" entries=page.experience %}
  <section class="cv-section" aria-labelledby="skills">
    <h2 class="subsection-heading" id="skills">Technical competencies</h2>
    <dl class="cv-skills">
      {% for skill in page.skills %}
        <div>
          <dt>{{ skill.title | escape }}</dt>
          <dd>{{ skill.detail | escape }}</dd>
        </div>
      {% endfor %}
    </dl>
  </section>
  <section class="cv-section prose" aria-labelledby="recognition" markdown="1">
## Teaching, supervision, and recognition
{: #recognition .subsection-heading }

- Teaching assistant, ETH Zurich’s *Aviation II*, 2025.
- Co-supervised an MSc thesis on the techno-economic assessment of Power-to-X fuels in Switzerland at PSI, 2023.
- ETH Zurich Master’s Scholarship Programme, 2019–2021. Tongji University Excellent Graduate and College Graduation Thesis awards, 2019.
  </section>
</div>
