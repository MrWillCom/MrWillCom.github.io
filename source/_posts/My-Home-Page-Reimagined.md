---
title: My Home Page, Reimagined
date: 2025-09-28 17:27:58
cover_image: /img/000065.webp
cover_image_alt: Two lines as dividers are crossed, making four grids.
tags:
  - design
  - home-page
  - life
  - webdev
categories: Announcement
---

My home page is at [mrwillcom.com](https://mrwillcom.com/). Last time I refactor my home page is over 3 years ago. That version was based on Markdown, written in [Nunjucks](https://mozilla.github.io/nunjucks) and built by [Eleventy](https://www.11ty.dev/). Information used to live in tables, which wasn't eye-catching enough. All layouts were similar and boring. This prompts me to begin refactoring my home page again.

## Designing

My idea is inspired by [Vercel's home page](http://vercel.com/home). Square and light borders can make the main area stand out and attract the visitors to focus the main area. I used pure white for the main area, but a brighter black for it in dark mode, so the main area is always brighter than the underlying background.

For typography, I chose [Inter](https://rsms.me/inter/) for all sans-serif fonts and [Geist Mono](https://vercel.com/font) for monospaced fonts. These fonts behaves well even when they are small. Bigger font size ratio makes it more expressive.

<p>
  <img src="/img/000063.webp" alt="A screenshot of the top part of my new home page." class="force-no-radius" />
</p>

Colors are chosen carefully in mind. The default text colors are subtler than normal, making space for the emphasized text. Font sizes everywhere are adjusted by hand, allowing them to fit the whole context. Many other details are also well-considered, including *italics*, cases, weights and more.

## Technologies

This time, I selected [Next.js](https://nextjs.org/) as the framework. Next.js handles more at server side, so it performs better in client-side performance and SEO.

[Tailwind CSS](https://tailwindcss.com/) sucks. In order to boost my home page, I chose [SCSS](https://sass-lang.com/) as usual, elegant and enhanced CSS that does not pollute your codebase.

In this project, I decided to use state-of-the-art web technologies. I believe these features will be available to more and more visitors.

### [`sibling-index()`](https://developer.mozilla.org/docs/Web/CSS/sibling-index)

With `sibling-index()`, you will no longer need JavaScript for alternating delays of the sibling elements.

```html
<div class="container si-demo">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css
@keyframes si-demo-animation {
  0% {
    opacity: 0;
    translate: 0 16px;
  }
  50% {
    opacity: 1;
    translate: 0;
  }
  100% {
    opacity: 0;
    translate: 0 -16px;
  }
}

.si-demo > .item {
  animation: si-demo-animation 2s infinite;
  animation-delay: calc(sibling-index() * 0.1s);
}
```

<div class="container si-demo">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>

<style>
.si-demo {
  display: flex;
}

@keyframes si-demo-animation {
  0% {
    opacity: 0;
    translate: 0 16px;
  }
  50% {
    opacity: 1;
    translate: 0;
  }
  100% {
    opacity: 0;
    translate: 0 -16px;
  }
}

.si-demo > .item {
  flex-grow: 1;
  height: 48px;
  background-color: var(--color-text-primary);
  animation: si-demo-animation 2s infinite;
  animation-delay: calc(sibling-index() * 0.1s);

  --r: var(--radius-small);
}

.si-demo > .item:first-child {
  border-top-left-radius: var(--r);
  border-bottom-left-radius: var(--r);
}

.si-demo > .item:last-child {
  border-top-right-radius: var(--r);
  border-bottom-right-radius: var(--r);
}
</style>

If your browser doesn't support this feature, you won't see the demo correctly.

### [`animation-timeline: view()`](https://developer.mozilla.org/docs/Web/CSS/animation-timeline/view)

Yet another un-Javascript-ify feature. With this, you no longer have to use JavaScript for tracking the position in the viewport of an element.

```html
<div class="container view-animation-demo">
  <div class="dot"></div>
</div>
```

```css
@keyframes view-animation-demo-animation {
  0% {
    opacity: 0.6;
    width: 0%;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
    width: 100%;
  }
}

.view-animation-demo > .dot {
  animation: view-animation-demo-animation linear both;
  animation-timeline: view(block);
}
```

Looks like this:

<div class="container view-animation-demo">
  <div class="dot"></div>
</div>

<style>
@keyframes view-animation-demo-animation {
  0% {
    opacity: 0.6;
    width: 0%;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
    width: 100%;
  }
}

.view-animation-demo > .dot {
  background-color: var(--color-text-primary);
  height: 4px;
  border-radius: 2px;

  animation: view-animation-demo-animation linear both;
  animation-timeline: view(block);
}
</style>

If your browser doesn't support this feature, you won't see the demo correctly.

## Optimizing

During the refactoring of my home page, I wished that my new home page can have a more excellent performance. So I improved my home page's score according to the Lighthouse scores. The final result is stunning:

<figure>
  <img src="/img/000064.webp" alt="My home page's Lighthouse scores are 95 for Performance, and 100 for Accessibility, Best Practices, and SEO."/>
  <figcaption>Tested on MacBook Air M4, the result of "Performance" may vary on different devices.</figcaption>
</figure>

You can also [view the full report with the report viewer](/pages/localhost_2025-09-03_22-29-29.html).

## Easter Eggs

I've set an easter egg in my new home page. Until now, only 3.73% of the visitors have discovered it. Have fun! 🥳

<style>
.force-no-radius {
  --radius-tiny: 0;
  --radius-small: 0;
  --radius-medium: 0;
  --radius-large: 0;
  --radius-full: 0;
  border-radius: 0;
}
</style>
