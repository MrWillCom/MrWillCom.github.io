---
title: Do you use RSS?
date: 2020-08-28
cover_image: /img/000006.png
cover_image_alt: The screenshots of Fluent Reader
categories: Small Talk
tags:
  - rss
  - reader
---

I read things by RSS.

<!-- more -->

## What Is RSS? & How to Use it?

> Really Simple Syndication (RSS) is an XML-based document format for the syndication of web content so that it can be republished on other sites or downloaded periodically and presented to users.

Yes, **Really Simple**. You can just add the RSS feed URL to your RSS client. After that, your client will fetch new articles from the RSS feed URLs.

Actually, RSS is just a file on the Internet. It looks like this:

```xml
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>...</title>
  <subtitle>...</subtitle>
  <link href="..." rel="self"/>
  <link href="..."/>
  <updated>...</updated>
  <id>...</id>
  <author>
    <name>...</name>
  </author>
  <entry>
    <title>...</title>
    <link href="..."/>
    <id>...</id>
    <published>...</published>
    <updated>...</updated>
    <content type="html"><![CDATA[...]]></content>
    <summary type="html">...</summary>
  </entry>
</feed>
```

_To see the source, go to [the RSS feed of my blog](/atom.xml)._

And all you need to do is to know its link and add it to your RSS feeds list.

## How do I Use RSS?

**I use [Fluent Reader](https://hyliu.me/fluent-reader/).**

<div class="block-large"><img src="/img/000008.png" alt="A screenshot of the Fluent Reader"></div>

Fluent Reader is an RSS reader based on [Electron](https://www.electronjs.org/) for desktop. It's frontend is based on [Fluent UI](https://github.com/microsoft/fluentui) which is an UI framework by Microsoft based on [React](https://reactjs.org/).

Fluent Reader's UI design is just wonferful, just like [Windows UWP](https://docs.microsoft.com/en-us/windows/uwp/) apps.

If you want to add an RSS feed, go to settings and enter your RSS feed URL in "Add Source" text field.

<div class="block-large"><img src="/img/000010.png" alt="A screenshot of the settings page"></div>

Then click "Add" button. You will get your articles then:

<div class="block-large"><img src="/img/000011.png" alt="A screenshot of what you will get then"></div>

## My RSS Feeds

| Title | URL |
| --- | --- |
| Apple Newsroom | https://www.apple.com/newsroom/rss-feed.rss |
| The Verge | https://www.theverge.com/rss/index.xml |
| Polygon | https://www.polygon.com/rss/index.xml |
| Tobias Ahlin | https://tobiasahlin.com/feed.xml |
| Airbnb Design | https://airbnb.design/feed/ |
