---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
cv_pdf: /files/Xinnan_Dai_CV.pdf
redirect_from:
  - /resume
---

{% assign cv_url = page.cv_pdf | relative_url %}

<p class="cv-updated">Curriculum vitae &middot; Updated October 22, 2026</p>

<div class="cv-actions">
  <a class="btn btn--info" href="{{ cv_url }}" target="_blank" rel="noopener">Open PDF<span class="visually-hidden"> in a new tab</span></a>
  <a class="btn" href="{{ cv_url }}" download="Xinnan_Dai_CV.pdf">Download PDF</a>
</div>

<div class="cv-preview" role="region" aria-label="CV preview">
  <a class="cv-page" href="{{ cv_url }}#page=1" target="_blank" rel="noopener" aria-label="Open CV PDF, page 1 of 2">
    <img src="{{ '/assets/images/cv/page-1.png' | relative_url }}" alt="Xinnan Dai's CV, page 1 of 2" width="990" height="1400">
  </a>
  <a class="cv-page" href="{{ cv_url }}#page=2" target="_blank" rel="noopener" aria-label="Open CV PDF, page 2 of 2">
    <img src="{{ '/assets/images/cv/page-2.png' | relative_url }}" alt="Xinnan Dai's CV, page 2 of 2" width="990" height="1400" loading="lazy">
  </a>
</div>
