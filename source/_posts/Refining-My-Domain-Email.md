---
title: Refining My Domain Email
date: 2025-08-01 20:22:08
cover_image: /img/000050.svg
cover_image_alt: The logos of Forward Email, Cloudflare and Spacemail with arrows between them.
tags:
  - life
  - email
categories: Essay
---

I previously used [Forward Email](https://forwardemail.net/) for my domain email. It could forward all emails sent to `*@mrwillcom.com` to my Outlook's inbox. However, it did not allow me to use `*@mrwillcom.com` to send emails from or reply to messages.

After transferring my domain from [Namesilo](https://www.namesilo.com/) + [Vercel](https://vercel.com/) (as nameserver) to [Cloudflare](https://domains.cloudflare.com/), which reduced a small share of annual expense, I attempted to migrate to [Cloudflare Email Routing](https://www.cloudflare.com/developer-platform/products/email-routing/). While this also did not support sending emails, it offered a graph on its dashboard and a special feature — [Email Workers](https://developers.cloudflare.com/email-routing/email-workers/).

![A screenshot of the dashboard of Cloudflare Email Routing](/img/000049.webp)

Although Cloudflare’s products appeared promising, I was determined to send emails. This led me to seek out [Spacemail](https://www.spaceship.com/business-email/), which stood out for its eye-catching pricing. The starter plan contained all the features I needed at a cost of only $4.95/yr. I could hardly overlook this option.

By starting 30 day free trial, I have begun experiencing Spacemail. Spacemail has a clear web interface with essential functionalities built in, which is simple and responds fast.

<div class="carousel">
  <figure>
    <img src="/img/000051.webp" alt="A screenshot of Spacemail web interface." class="carousel-item" />
    <figcaption>Web interface.</figcaption>
  </figure>
  <figure>
    <img src="/img/000052.webp" alt="IMAP, SMTP and POP3 access." class="carousel-item" />
    <figcaption>IMAP, SMTP and POP3 access.</figcaption>
  </figure>
  <figure>
    <img src="/img/000053.webp" alt="Email forwarding." class="carousel-item" />
    <figcaption>Email forwarding.</figcaption>
  </figure>
  <figure>
    <img src="/img/000054.webp" alt="A catch-all (fallback) mailbox." class="carousel-item" />
    <figcaption>A catch-all (fallback) mailbox.</figcaption>
  </figure>
</div>

With IMAP, SMTP and POP3 access, I don't have to stick to the web app. I now use [Apple Mail](https://support.apple.com/guide/mail/welcome/mac) and [Thunderbird](https://www.thunderbird.net/) for my domain email.

Welcome to send an email to [`hi@mrwillcom.com`](mailto:hi@mrwillcom.com)!
