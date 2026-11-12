---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

Browse the main pages and publications below. An [XML sitemap]({{ '/sitemap.xml' | relative_url }}) is also available.

<h2>Pages</h2>
{% for post in site.pages %}
  {% unless post.archived or post.sitemap == false %}
    {% include archive-single.html %}
  {% endunless %}
{% endfor %}

{% assign posts = site.posts | where_exp: 'item', 'item.archived != true' %}
{% if posts.size > 0 %}
  <h2>Posts</h2>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

{% for collection in site.collections %}
  {% unless collection.output == false or collection.label == "posts" %}
    {% assign documents = collection.docs | where_exp: 'item', 'item.archived != true' %}
    {% if documents.size > 0 %}
      <h2>{{ collection.label | escape }}</h2>
      {% for post in documents %}
        {% include archive-single.html %}
      {% endfor %}
    {% endif %}
  {% endunless %}
{% endfor %}
