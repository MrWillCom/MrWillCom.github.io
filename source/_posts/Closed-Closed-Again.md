---
title: Closed. Closed Again.
date: 2020-08-29
cover_image: /img/000009.png
cover_image_alt: The number of the pull request
---

[yang991178/fluent-reader #86](https://github.com/yang991178/fluent-reader/pull/86) and [yang991178/fluent-reader #88](https://github.com/yang991178/fluent-reader/pull/88) are closed by [yang991178](https://github.com/yang991178).

<!-- more -->

Before reading the following, you need to know what is [Fluent Reader](https://hyliu.me/fluent-reader/). To know it, read [my recent post](/2020/08/28/Do-you-use-RSS/).

<div class="container">
    <div style="margin: 32px 0; text-align: center">
        <span title="Status: Closed" style="display:inline-block;padding:5px 12px;font-size:14px;font-weight:500;line-height:20px;color:#fff;text-align:center;white-space:nowrap;background-color:#6a737d;border:1px solid transparent;border-radius:2em; background-color: #d73a49;">
            <svg height="16" style="display:inline-block;fill:currentColor;vertical-align:text-bottom" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path></svg> Closed
        </span>
    </div>
</div>

I've submitted [a pull request to update acrylic effect](https://github.com/yang991178/fluent-reader/pull/72) for Fluent Reader which is designed to give users better experience, it is merged at last. That is my first time to contribute to this repository.

Also, that is my first time to use Fluent Reader. It is the best RSS reader I've never seen before. But it's not perfect with many small problems.

After this, I [forked Fluent Reader](https://github.com/MrWillCom/acrylic-reader) and started to improve it then I submitted my first pull request to [Fluent Reader](https://hyliu.me/fluent-reader/).

Before merging this pull request [yang991178](https://github.com/yang991178) added a new animation for the menu and merged. This animation is based on `clip-path` and is not smooth which will cut the shadow when playing, this is a slow motion record of this animation.

<video loop autoplay>
    <source src="/media/000002.mp4" type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>

So I edited it and created a new pull request [#86](https://github.com/yang991178/fluent-reader/pull/86):

<div class="container" style="display: flex">
<h4 style="flex: 1">Before <small style="color: grey">(By <a href="https://github.com/yang991178">yang991178</a>)</small></h4>
<h4 style="flex: 1">After <small style="color: grey">(By Me)</small></h4>
</div>
<div class="container" style="display: flex">
    <video loop autoplay style="width: calc(100% /2); padding: 0">
        <source src="/media/000000.mp4" type="video/mp4">
        Sorry, your browser doesn't support embedded videos.
    </video>
    <video loop autoplay style="width: calc(100% /2); padding: 0">
        <source src="/media/000001.mp4" type="video/mp4">
        Sorry, your browser doesn't support embedded videos.
    </video>
</div>
<div class="container" style="display: flex">
<p style="flex: 1">The animation by <a href="https://github.com/yang991178">yang991178</a> is based on CSS <code>clip-path</code> which will "clip" the shadow and will affect the animation speed curve.</p>
<p style="flex: 1">The animation by me based on CSS <code>width</code> will not.</p>
</div>

But [yang991178](https://github.com/yang991178) closed my pull request just on the day I opened it without reviewing it just because he has tried to realize it with CSS `width`, but he found this animation will ["squeeze"](https://github.com/yang991178/fluent-reader/pull/86#issuecomment-679788012) the contents.

I got that, too. But I fixed it with CSS `overflow` then the animation is almost perfect now as the video.

I still commented in that pull request, but 3 days later, [yang991178](https://github.com/yang991178) still didn't respond.

I created a new pull request then, but he closed it again in **ONE** day with**out** reviewing.

I've gave it up now, but I have a new plan now.

## New Plan

I'm going to clone Fluent Reader's source code and create a new repository contains it, I will keep this copy up to date and will improve it, but won't create any pull request to merge to his source repository again. But if [yang991178](https://github.com/yang991178) request me to merge to his source repository, I'll still be glad to merge.
