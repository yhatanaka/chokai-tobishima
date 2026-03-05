---
layout: default
title: "Gallery"
---

{% comment %}
  カテゴリ一覧を自動生成
{% endcomment %}
{% assign categories = site.data.photos | map: "category" | compact | uniq | sort %}

{% if categories.size > 0 %}
<div class="filter-bar">
  <button class="filter-btn active" data-cat="all" onclick="filterPhotos('all')">すべて</button>
  {% for cat in categories %}
  <button class="filter-btn" data-cat="{{ cat }}" onclick="filterPhotos('{{ cat }}')">{{ cat }}</button>
  {% endfor %}
</div>
{% endif %}

<div class="photo-grid">
  {% for photo in site.data.photos %}
  <div class="photo-item"
       data-caption="{{ photo.caption }}"
       data-category="{{ photo.category }}">
    {% if photo.src contains 'http' %}
    <img src="{{ photo.src }}" alt="{{ photo.caption }}" loading="lazy">
    {% else %}
    <img src="{{ '/photos/' | append: photo.src | relative_url }}" alt="{{ photo.caption }}" loading="lazy">
    {% endif %}
    {% if photo.caption %}
    <div class="photo-overlay"><span>{{ photo.caption }}</span></div>
    {% endif %}
  </div>
  {% endfor %}
</div>
