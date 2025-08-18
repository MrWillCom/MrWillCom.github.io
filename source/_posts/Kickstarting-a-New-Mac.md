---
title: Kickstarting a New Mac
date: 2025-08-18 22:59:54
cover_image: /img/000060.webp
cover_image_alt:
tags:
  - life
  - mac
categories: Essay
---

Recently, I purchased a new MacBook Air. Since this is the second time that I set up a new Mac, I would like to share some useful, essential apps and tips.

## Replace Spotlight

The very first thing to do is to install [Raycast](https://www.raycast.com/), which is more powerful than the built-in Spotlight search. It not only allows me to launch apps more quickly, but also handles my clipboard history, emoji and symbols, and facilitates quick calculations.

<div class="carousel">
  <figure>
    <img src="/img/000055.webp" alt="A screenshot of Raycast's currency converter." class="carousel-item" />
    <figcaption>Currency converter.</figcaption>
  </figure>
  <figure>
    <img src="/img/000056.webp" alt="A screenshot of Raycast's date and time calculator." class="carousel-item" />
    <figcaption>Date and time calculator.</figcaption>
  </figure>
  <figure>
    <img src="/img/000057.webp" alt="A screenshot of Raycast's unit converter." class="carousel-item" />
    <figcaption>Unit converter.</figcaption>
  </figure>
  <figure>
    <img src="/img/000058.webp" alt="A screenshot of Raycast's emoji and symbols picker." class="carousel-item" />
    <figcaption>Emoji and symbols picker.</figcaption>
  </figure>
</div>

## Chrome's Time

Safari is definitely not a good browser. Its late support for new web features and infrequent updates are annoying for cutting-edge web development. Therefore, Chrome is essential for a web developer. (Although it is the binge eater of RAM.)

## Homebrew

[Homebrew](https://brew.sh/) helps you install software packages easier. With Homebrew, in order to install an app, all you have to do is to search for your desired "Formulae" or "Cask" in [Homebrew Formulae](https://formulae.brew.sh/) and run a single command. Once you start using it, you won't be able to leave it .

## Menubar Related

[Ice](https://icemenubar.app/) collapse your menubar icons. [Hot](https://github.com/macmade/Hot) monitors your Mac's temperature.

## Terminal

[Ghostty](Ghostty) is an feature-rich terminal emulator. Here is my configuration:

```
background-opacity = 0.8
background-blur-radius = 50
window-height = 22
window-width = 74
theme = flexoki-dark
foreground = #dcdfe4
selection-background = #474e5d
selection-foreground = #dcdfe4
cursor-color = #a3b3cc
cursor-text = #dcdfe4
cursor-style = bar
palette = 0=#282c34
palette = 1=#e06c75
palette = 2=#98c379
palette = 3=#e5c07b
palette = 4=#61afef
palette = 5=#c678dd
palette = 6=#56b6c2
palette = 7=#dcdfe4
palette = 8=#282c34
palette = 9=#e06c75
palette = 10=#98c379
palette = 11=#e5c07b
palette = 12=#61afef
palette = 13=#c678dd
palette = 14=#56b6c2
palette = 15=#dcdfe4
window-step-resize = true
```

I use [Starship](https://starship.rs/) as my terminal prompt. I didn't customize it because it has a brilliant default configuration.

When everything in terminal is done, try [Fastfetch](https://github.com/fastfetch-cli/fastfetch), it's showtime!

![A screenshot of the result of `fastfetch` in Ghostty](/img/000059.webp)

## Quality of Life

### AltTab

If you're from Windows, you will need [AltTab](https://alt-tab-macos.netlify.app/). It enables you to use <kbd>Option</kbd> + <kbd>Tab</kbd>, just like <kbd>Alt</kbd> + <kbd>Tab</kbd> on Windows.

![A screenshot of window switcher](/img/000061.webp)

### Keka

[Keka](https://www.keka.io/), perhaps the last archiver you'll need, works with a wide range of formats and can be the replacement of the system archiver.

## Wrapping Up

Here are all the apps introduced, in one picture:

<div class="container">
  <img src="/img/000062.webp" style="max-width: 480px; display: block; margin: auto" />
</div>
