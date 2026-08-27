(() => {
  "use strict";

  const data = window.SITE_DATA;
  if (!data) {
    throw new Error("SITE_DATA is missing. Check that data.js loads before app.js.");
  }

  const sectionIconPaths = {
    briefcase: '<path fill="#2b4bb4" fill-rule="evenodd" d="M37.99 10.022H3.41a2 2 0 0 0-2 2v6.118c0 .615.42 1.152 1.016 1.301v18.075h36.548V19.44a1.341 1.341 0 0 0 1.015-1.3v-6.119a2 2 0 0 0-2-2ZM23.745 21.223h-6.092v6.11h6.092v-6.11Z" clip-rule="evenodd" opacity="0.05"/><path fill="#2b4bb4" fill-rule="evenodd" d="M15.431 3.924c-.728 0-1.32.593-1.32 1.323v1.018a.711.711 0 1 1-1.42 0V5.247A2.744 2.744 0 0 1 15.43 2.5h9.138a2.744 2.744 0 0 1 2.74 2.747v1.526a.711.711 0 1 1-1.42 0V5.247c0-.73-.592-1.323-1.32-1.323h-9.137ZM0 11.352a2.744 2.744 0 0 1 2.741-2.747H37.26A2.744 2.744 0 0 1 40 11.352v5.51a2.746 2.746 0 0 1-2.113 2.674l-14.13 3.332v3.237a1.22 1.22 0 0 1-1.219 1.22h-5.076a1.22 1.22 0 0 1-1.218-1.22v-3.237l-14.13-3.332A2.746 2.746 0 0 1 0 16.862v-5.51Zm16.244 10.053v-.388c0-.674.545-1.22 1.218-1.22h5.076a1.22 1.22 0 0 1 1.218 1.22v.388l13.805-3.255a1.322 1.322 0 0 0 1.018-1.288v-5.51c0-.73-.591-1.323-1.32-1.323H2.74c-.729 0-1.32.592-1.32 1.323v5.51c0 .614.422 1.147 1.018 1.288l13.805 3.255Zm1.421-.184v4.68h4.67v-4.68h-4.67Zm-15.94.61c.393 0 .712.32.712.713v12.209c0 .73.59 1.323 1.32 1.323h32.487c.729 0 1.32-.593 1.32-1.323v-12.21a.711.711 0 1 1 1.42 0v12.21a2.744 2.744 0 0 1-2.74 2.747H3.756a2.744 2.744 0 0 1-2.74-2.747v-12.21c0-.393.317-.712.71-.712Z" clip-rule="evenodd"/>',
    education: '<path fill="#2b4bb4" fill-rule="evenodd" d="m1 9.967 19-8 19 8-19 8-19-8Zm19 1c1.105 0 2-.448 2-1 0-.553-.895-1-2-1s-2 .447-2 1c0 .552.895 1 2 1Z" clip-rule="evenodd" opacity="0.05"/><path fill="#2b4bb4" d="M7.5 23.967v-8.5l12.5 5 12.5-5v8.5c-1.942 4.856-9 6-12.5 6s-9.311-1.536-12.5-6Z" opacity="0.05"/><path fill="#2b4bb4" d="M28.161 34.653a.665.665 0 0 0-.808.485l-.666 2.666a.666.666 0 1 0 1.293.325l.667-2.667a.667.667 0 0 0-.486-.809ZM20 21.3a.662.662 0 0 0 .255-.05l7.333-3.035a.667.667 0 1 0-.51-1.232L20 19.912 1.333 12.188v-.222a.667.667 0 0 0-1.333 0v.667c0 .27.163.514.412.616l19.333 8a.66.66 0 0 0 .255.05ZM27.93 28.13a.666.666 0 0 0-.892-.303c-1.266.626-3.38 1.354-6.371 1.454V23.3a.667.667 0 0 0-1.334 0v5.975C11.055 29.01 8.384 23.995 8 23.16v-4.528a.667.667 0 0 0-1.333 0V23.3c0 .085.016.169.047.248.116.289 2.953 7.085 13.286 7.085 3.611 0 6.142-.876 7.629-1.61a.665.665 0 0 0 .302-.893ZM30 35.3a.666.666 0 0 0-.667.667v2a.667.667 0 1 0 1.334 0v-2A.666.666 0 0 0 30 35.3Z"/><path fill="#2b4bb4" d="M39.333 11.3a.666.666 0 0 0-.666.666v.22l-8 3.293v-1.204l8.921-3.693a.666.666 0 0 0 0-1.232l-19.333-8a.667.667 0 0 0-.51 0l-19.333 8a.667.667 0 0 0 0 1.232l19.333 8a.66.66 0 0 0 .51 0l6.99-2.892a.666.666 0 1 0-.509-1.231L20 17.245 2.41 9.967 20 2.687l17.59 7.28-7.654 3.167-7.331-2.738a1.59 1.59 0 0 0 .062-.43c0-1.12-1.172-2-2.667-2-1.495 0-2.667.88-2.667 2 0 1.122 1.172 2 2.667 2 .667 0 1.263-.181 1.725-.475l7.608 2.84v16.425A1.998 1.998 0 0 0 28 32.633c0 1.103.897 2 2 2s2-.897 2-2c0-.868-.56-1.6-1.333-1.877v-3.784c1.914-1.445 2.6-3.369 2.63-3.454a.674.674 0 0 0 .036-.218v-4.667a.666.666 0 1 0-1.333 0v4.544a6.82 6.82 0 0 1-1.333 2.014v-8.27l8.92-3.671a.667.667 0 0 0 .413-.617v-.666a.666.666 0 0 0-.667-.667ZM20 10.633c-.814 0-1.333-.394-1.333-.666 0-.273.519-.667 1.333-.667s1.333.395 1.333.667-.519.666-1.333.666ZM30 33.3a.667.667 0 1 1 .001-1.335A.667.667 0 0 1 30 33.3ZM32.647 35.138a.666.666 0 1 0-1.294.324l.667 2.666a.667.667 0 0 0 1.293-.324l-.666-2.666Z"/>',
    publication: '<path fill="#2b4bb4" d="M1.1 7.1h4.7v-6h33.4v37.8H.7z" opacity="0.05"/><path fill="#2b4bb4" d="M34 14.3h-9c-.4 0-.7.3-.7.7s.3.7.7.7h9c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zM12.3 15.7h6.3c1.1 0 2-.8 2-2V7.3c0-1.1-.8-1.9-1.8-1.9h-6.4c-1.1 0-2 .8-2 2v6.4c-.1 1 .8 1.9 1.9 1.9zm-.6-8.4c0-.4.3-.7.7-.7h6.3c.4 0 .7.3.7.7v6.4c0 .4-.3.7-.7.7h-6.3c-.4 0-.7-.3-.7-.7V7.3zM34 9.8h-9c-.4 0-.7.3-.7.7s.3.7.7.7h9c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zM34 5.3h-9c-.4 0-.7.3-.7.7s.3.7.7.7h9c.4 0 .7-.3.7-.7s-.3-.7-.7-.7z"/><path fill="#2b4bb4" d="M37.8 0H7.3C6 0 5 1 5 2.3V6H2.2C1 6 0 7 0 8.2v29.5C0 39 1 40 2.2 40h35.5c1.3 0 2.2-1 2.2-2.2V2.2C40 1 39 0 37.8 0zm0 38.5H2.3c-.4 0-.7-.3-.7-.7V8.2c0-.4.3-.7.7-.7H5V33c0 .5.3.8.8.8s.8-.3.8-.8V2.3c0-.5.3-.8.8-.8h30.5c.4 0 .7.3.7.7v35.5c-.1.5-.4.8-.8.8z"/><path fill="#2b4bb4" d="M34 18.9H11v1.3h23c.4 0 .6-.3.6-.6s-.2-.7-.6-.7zM11 20.2v-1.3c-.4 0-.7.3-.7.7s.3.6.7.6zM34 23.3H11c-.4 0-.7.3-.7.7s.3.7.7.7h23c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zM24 32.3H11c-.4 0-.7.3-.7.7s.3.7.7.7h13c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zM34 27.8H11c-.4 0-.7.3-.7.7s.3.7.7.7h23c.4 0 .7-.3.7-.7s-.3-.7-.7-.7z"/>',
    award: '<path fill="#2b4bb4" d="M35 2h-5V1c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v1H1c-.6 0-1 .4-1 1v6c0 2.8 2.2 5 5 5h1.7c1.5 4.4 5.5 7.6 10.3 8v6h-7c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1h-7v-6c4.8-.4 8.8-3.6 10.3-8H31c2.8 0 5-2.2 5-5V3c0-.6-.4-1-1-1zM6 10v2H5c-1.7 0-3-1.3-3-3V4h4v6zm19 20v4H11v-4h14zm3-27v7c0 5.5-4.5 10-10 10S8 15.5 8 10V2h20v1zm6 6c0 1.7-1.3 3-3 3h-1V4h4v5z"/>',
  };

  const sectionIcon = (name) => {
    const viewBox = name === "award" ? "0 0 36 36" : "0 0 40 40";
    return `<svg class="icon" viewBox="${viewBox}" aria-hidden="true" focusable="false">${sectionIconPaths[name]}</svg>`;
  };

  const escapeHtml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const safeUrl = (value = "") => {
    const url = String(value).trim();
    return /^(https?:\/\/|mailto:|assets\/|#)/i.test(url) ? escapeHtml(url) : "#";
  };

  const externalAttrs = (url = "") =>
    /^https?:\/\//i.test(url) ? ' target="_blank" rel="noreferrer"' : "";

  const linkedTitle = (text, url, className = "silent-link") => {
    const label = escapeHtml(text);
    if (!url) return label;
    return `<a class="${className}" href="${safeUrl(url)}"${externalAttrs(url)}>${label}</a>`;
  };

  // In data.js, write inline links as: [Label](https://example.com)
  const renderInlineText = (value = "") => {
    const text = String(value);
    const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^)\s]+|mailto:[^)\s]+|assets\/[^)\s]+|#[^)\s]+)\)/gi;
    let markup = "";
    let cursor = 0;

    for (const match of text.matchAll(linkPattern)) {
      markup += escapeHtml(text.slice(cursor, match.index));
      markup += linkedTitle(match[1], match[2], "timeline-inline-link");
      cursor = match.index + match[0].length;
    }

    return markup + escapeHtml(text.slice(cursor));
  };

  const highlightOwnName = (authors) => {
    const escapedAuthors = escapeHtml(authors);
    const escapedName = escapeHtml(data.profile.name);
    return escapedAuthors
      .replaceAll(escapedName, `<strong class="own-name">${escapedName}</strong>`)
      .replaceAll("†", '<sup class="author-marker">†</sup>');
  };

  const renderVenue = (venue) => {
    const text = String(venue || "").trim();
    const match = text.match(/^(.*\S)\s+(\d{4})$/);
    if (!match) return `<span class="venue">${escapeHtml(text)}</span>`;
    return `<span class="venue"><span class="venue__name">${escapeHtml(match[1])}</span> <span class="venue__year">${escapeHtml(match[2])}</span></span>`;
  };

  const renderPublicationNote = (note) => {
    if (!note) return "";
    const formatted = escapeHtml(note).replaceAll(
      "Best Paper Award",
      '<strong class="publication__award">Best Paper Award (2.56%)</strong>',
    );
    return `<span class="publication__note-inline">${formatted}</span>`;
  };

  const renderPublicationLinks = (links = []) => {
    if (!links.length) return "";
    return `<div class="publication__links">${links
      .map(
        (link) =>
          `<a class="publication-link" href="${safeUrl(link.url)}"${externalAttrs(link.url)}>${escapeHtml(link.label.toLowerCase())}</a>`,
      )
      .join("")}</div>`;
  };

  document.title = data.site.title;
  document.querySelector('meta[name="description"]').content = data.site.description;
  document.querySelector('meta[property="og:title"]').content = data.site.title;
  document.querySelector('meta[property="og:description"]').content = data.site.description;

  const profileName = document.querySelector("#profile-name");
  profileName.textContent = data.profile.name;
  if (data.profile.koreanName) {
    const koreanName = document.createElement("span");
    koreanName.className = "korean-name";
    koreanName.textContent = ` (${data.profile.koreanName})`;
    profileName.append(koreanName);
  }
  document.querySelector("#profile-title").textContent = data.profile.title;
  const profileImage = document.querySelector("#profile-image");
  profileImage.src = data.profile.image;
  profileImage.alt = data.profile.imageAlt;

  document.querySelector("#social-links").innerHTML = data.socials
    .map((social) => {
      const glyph = social.icon === "scholar" ? "google" : social.icon;
      return `
        <li>
          <a class="social-link" href="${safeUrl(social.url)}" aria-label="${escapeHtml(social.label)}"${externalAttrs(social.url)}>
            <i class="font-icon icon-${escapeHtml(glyph)}" aria-hidden="true"></i>
          </a>
        </li>`;
    })
    .join("");

  document.querySelector("#contact-list").innerHTML = data.contacts
    .map((contact) => {
      const value = contact.url
        ? `<a href="${safeUrl(contact.url)}"${externalAttrs(contact.url)}>${escapeHtml(contact.value)}</a>`
        : `<span>${escapeHtml(contact.value)}</span>`;
      return `
        <li class="contact-item">
          <span class="contact-item__copy">
            <span class="eyebrow">${escapeHtml(contact.label)}</span>
            ${value}
          </span>
        </li>`;
    })
    .join("");

  document.querySelector("#about-content").innerHTML = data.about
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  const renderTimeline = (items, { inlineDetails = false, bulletedDetails = false } = {}) =>
    items
      .map(
        (item) => {
          const hasDetails = Boolean(item.details?.length);
          const roleMarkup = renderInlineText(item.role);
          const inlineDetailMarkup = inlineDetails && hasDetails
            ? `<span class="timeline-item__inline-details">${item.details.map((detail) => renderInlineText(detail)).join(" ")}</span>`
            : "";
          const contentMarkup = bulletedDetails
            ? `<p class="timeline-item__description">${roleMarkup}</p>
              ${hasDetails ? `<ul class="experience-details">${item.details.map((detail) => `<li>${renderInlineText(detail)}</li>`).join("")}</ul>` : ""}`
            : `<p class="timeline-item__description">${roleMarkup}${inlineDetailMarkup}</p>
              ${!inlineDetails && hasDetails ? `<p class="detail-list">${item.details.map((detail) => renderInlineText(detail)).join("<br>")}</p>` : ""}`;
          return `
          <article class="timeline-item">
            <h4 class="timeline-item__title">${linkedTitle(item.organization, item.organizationUrl)}</h4>
            <p class="timeline-item__period">${escapeHtml(item.period)}</p>
            ${contentMarkup}
          </article>`;
        },
      )
      .join("");

  document.querySelector("#experience-list").innerHTML = renderTimeline(data.experience, { bulletedDetails: true });
  document.querySelector("#education-list").innerHTML = renderTimeline(data.education, { inlineDetails: true });

  document.querySelector("#publication-list").innerHTML = data.publications
    .map(
      (publication) => `
        <article class="timeline-item publication">
          <h4 class="timeline-item__title publication__title">${escapeHtml(publication.title)}</h4>
          <p class="timeline-item__period publication__authors">${highlightOwnName(publication.authors)}</p>
          <p class="timeline-item__description publication__meta">
            ${renderVenue(publication.venue)}
            ${renderPublicationNote(publication.note)}
          </p>
          ${renderPublicationLinks(publication.links)}
        </article>`,
    )
    .join("");

  document.querySelector("#award-list").innerHTML = data.awards
    .map(
      (award) => `
        <article class="timeline-item">
          <h4 class="timeline-item__title">${linkedTitle(award.title, award.url)}</h4>
          <p class="timeline-item__period">${escapeHtml(award.period)}</p>
          <p class="timeline-item__description">${escapeHtml(award.description)}</p>
        </article>`,
    )
    .join("");

  document.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = node.classList.contains("resume-heading__icon")
      ? sectionIcon(node.dataset.icon)
      : "";
  });

  document.querySelector("#copyright").textContent = `© ${new Date().getFullYear()} ${data.profile.name}`;
  document.querySelector("#last-updated").textContent = `Last updated ${data.site.lastUpdated}`;

  const navLinks = [...document.querySelectorAll(".section-nav__link")];
  const setActiveSection = (sectionId) => {
    navLinks.forEach((link) => {
      const isActive = link.dataset.section === sectionId;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveSection(visible[0].target.id);
    },
    { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.1, 0.5] },
  );

  document.querySelectorAll("#about, #resume").forEach((section) => sectionObserver.observe(section));

  const backToTop = document.querySelector("#back-to-top");
  const syncBackToTop = () => backToTop.classList.toggle("is-visible", window.scrollY > 640);
  window.addEventListener("scroll", syncBackToTop, { passive: true });
  syncBackToTop();
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();
