---
layout: academic-page
title: Publications
permalink: /publications/
---

<div class="page-content">
  <section aria-labelledby="journal-articles">
    <h2 class="subsection-heading" id="journal-articles">Peer-reviewed journal articles</h2>
    {% assign papers = site.publications | where_exp: 'paper', 'paper.doi' | sort: 'citation_date' | reverse %}
    <ol class="publication-list">
      {% for paper in papers %}
        {% include publication-entry.html paper=paper %}
      {% endfor %}
    </ol>
  </section>

  <section class="subsection" aria-labelledby="reports">
    <h2 class="subsection-heading" id="reports">Reports and research communication</h2>
    <ul class="resource-list">
      {% for resource in site.data.research.resources %}
        <li>
          <h3><a href="{{ resource.url | escape }}">{{ resource.title | escape }} <span aria-hidden="true">↗</span></a></h3>
          <p class="publication-meta">{{ resource.authors | escape }}</p>
          <p class="publication-meta">{{ resource.venue | escape }} · {{ resource.date | escape }}</p>
        </li>
      {% endfor %}
    </ul>
  </section>
</div>
