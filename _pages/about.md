---
layout: academic
title: Home
permalink: /
redirect_from:
  - /about/
  - /about.html
introduction: >-
  I study where low-carbon fuels can be produced affordably and under what conditions they reduce life-cycle emissions. My work combines techno-economic assessment, energy-system optimization, and prospective life-cycle assessment.
---

<section class="hero shell" aria-labelledby="home-title">
  <div class="hero-copy">
    <p class="eyebrow">Energy systems &amp; sustainability</p>
    <h1 id="home-title">{{ site.title | escape }}</h1>
    <p class="native-name" lang="zh-Hans">{{ site.author.native_name | escape }}</p>
    <p class="hero-introduction">{{ page.introduction | escape }}</p>
    <a class="action-link" href="{{ '/research/' | relative_url }}">Explore my research <span aria-hidden="true">→</span></a>
    {% include professional-links.html %}
  </div>
  <div class="hero-portrait">
    <img src="{{ '/images/home-portrait.webp' | relative_url }}"
         srcset="{{ '/images/home-portrait-480.webp' | relative_url }} 480w, {{ '/images/home-portrait.webp' | relative_url }} 960w"
         sizes="(max-width: 47.99rem) min(calc(100vw - 3.15rem), 25rem), min(32vw, 25rem)"
         width="960" height="1280" fetchpriority="high" alt="Zipeng Liu holding flowers and a small model">
  </div>
</section>

<section class="section shell" aria-labelledby="home-research">
  <header class="section-heading">
    <h2 id="home-research">Research themes</h2>
    <a class="text-link" href="{{ '/research/' | relative_url }}">Research overview <span aria-hidden="true">→</span></a>
  </header>
  <div class="theme-grid">
    {% for theme in site.data.research.themes %}
      <article class="theme">
        <h3><a href="{{ '/research/' | relative_url }}#{{ theme.id }}">{{ theme.short_title | escape }} <span aria-hidden="true">↗</span></a></h3>
        <p>{{ theme.summary | escape }}</p>
      </article>
    {% endfor %}
  </div>
</section>

<section class="highlight-band" aria-labelledby="home-highlights">
  <div class="shell highlights">
    <h2 id="home-highlights">Research highlights</h2>
    <ul class="highlight-list">
      {% for project in site.data.research.projects %}
        <li>
          <a href="{{ '/research/' | relative_url }}#{{ project.id }}">{{ project.title | escape }} <span aria-hidden="true">→</span></a>
          <p>{{ project.summary | escape }}</p>
        </li>
      {% endfor %}
    </ul>
  </div>
</section>

{% assign featured_papers = site.publications | where: 'featured', true | sort: 'citation_date' | reverse %}
{% if featured_papers.size > 0 %}
  <section class="section shell" aria-labelledby="home-publications">
    <header class="section-heading">
      <h2 id="home-publications">Selected publications</h2>
      <a class="text-link" href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">→</span></a>
    </header>
    <ol class="publication-list">
      {% for paper in featured_papers %}
        {% include publication-entry.html paper=paper %}
      {% endfor %}
    </ol>
  </section>
{% endif %}

<section class="section shell about-section" aria-labelledby="about">
  <h2 id="about">About</h2>
  <div class="prose">
    <p>I began my doctoral research in March 2022 with the Chair of Energy System Analysis at ETH Zurich and the Technology Assessment Group at the Paul Scherrer Institute.</p>
    <p>I earned an MSc in Environmental Sciences at ETH Zurich and a BSc in Environmental Sciences at Tongji University. At Empa, I developed material flow models to estimate plastic releases. Earlier, I interned with the UN Environment Programme’s Science Division in Nairobi.</p>
    <a class="text-link" href="{{ '/cv/' | relative_url }}">Academic CV <span aria-hidden="true">→</span></a>
  </div>
</section>
