---
title: 2023 年度总结
date: 2023-12-26
cover_image: /img/000036.jpg
cover_image_alt: 蓝色天空里的月亮
tags:
  - life
  - annual-review
categories: Essay
---

<p style="text-align: center"><small><strong>时光机</strong> · 2022 年度总结 · <a href="/2022/12/19/It-s-just-the-Beginning/">这不过是个开场</a></small></p>

---

## 博客

我的天，今年居然写了一篇文章（就是本文）！看来只能明年再加把劲咯！

## 开源

![GitHub Green Wall](/img/000034.png)

<small>Generated with <a href="https://github.com/Codennnn/Green-Wall">Codennnn/Green-Wall</a></small>

今年搞开源项目也在摸鱼，只有一月份是在做 [Campfire](https://github.com/campfire-org) 所以看起来很是勤奋。

### 有点意思的~~项目~~饼——Campfire

[Campfire](https://github.com/campfire-org) 这个设想其实是来源于之前和朋友们用腾讯会议开的 Night Radio，就是一个人共享屏幕放歌，然后大家可以点歌聊天写作业之类的。但是现在腾讯会议超过两个人就有时间限制了，还要什么加时卡。所以想弄一个干净一点的，可以提前点歌的，真正的 radio。我们觉得这很符合围着篝火听歌聊天的氛围，所以叫它“围炉夜话——Campfire”。

所以说我就就着我熟悉的技术栈 [Next.js](https://nextjs.org/) + [Prisma](https://www.prisma.io/) 开搞，最后也是做出了一点东西。这个半成品已经勉强能用了，可是棘手的问题在于，没有什么好用的音乐 API，让用户上传音乐的话开销又太大，而且也可能遇到版权问题，所以后来就选择放弃了。

### Next Mastodon Gallery

一个画廊！由于不想再注册一个 [Pixelfed](https://pixelfed.org/)，所以就试了试用 [Mastodon API](https://docs.joinmastodon.org/) 检索打了 `#photography` 标签的有图的推文，把图片像相册一样排在页面上。每个图片点击都可以查看大图，这里用了 [Vaul](https://vaul.emilkowal.ski/) 来做抽屉，实在是太优雅了。[点我去看一看](https://gallery.mrwillcom.com/)。

放一张大截图：

<img src="/img/000035.png" alt="Gallery 的截图">

## 摄影

### 焦段扩展！

今年夏天用 EF 转 EF-M 的转接环接了个 75-300mm 的长焦镜头，从此可以拍月亮了！

<div class="block-large">
  <img src="/img/000036.jpg" alt="300mm 拍月亮">
</div>

### 拍了多少？

用相机拍的加起来大概 385 GB，一共 8366 张照片/视频。这是第一次一年拍了这么大空间的照片，大概是因为我从 JPEG 转到 RAW，一张图的大小增大了几倍，然后拍完又舍不得删（也有一部分懒的成分）。

## 游戏 <span class="italic-heading" style="display: inline; font-size: smaller">— Genshin Impact</span>

年初入坑原神了，为了直接绕过防沉迷，于是选择了欧洲服。当时没多想，后来才发现没有朋友在同服务器。所以，如果看到这里的你刚好有欧洲服的原神，可以来加好友玩！我的 UID：`756236451`。

## <span class="italic-heading">FFF</span><span class="italic-heading-desc">Foresight / Future / Flags</span>

- 把照片印出来，装裱上墙。
- 出远门！

---

别看这篇文章被显示为发在 2023 年 12 月 26 日，实际上这是开始编辑的日期，真正发出来已经是 2024 年 6 月了，这已经完全称不上是年度总结了啊。本来这篇里面我还想着预告一个 2023 十大照片的，现在也去掉了，恐怕得等明年了。这篇文章绝得称得上是最咕咕的一集了。太水了太水了，快划走去看别的文章吧。

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,300;1,300&display=swap');
@import url('https://unpkg.com/lxgw-wenkai-webfont/lxgwwenkai-regular.css');

.meta, .content, .toc {
  font-family: 'Noto Serif SC', serif;
}

.meta {
  text-align: center;
  font-weight: 300;
}

.meta .title {
  font-weight: 700;
}

.content {
  font-size: 17px;
}

.content p img, .content .block-large img {
  border-radius: 6px;
}

.italic-heading {
  letter-spacing: 1px;
  font-family: 'Noto Serif', 'Noto Serif SC', serif;
  font-style: italic;
  font-weight: 300;
  display: block;
  text-align: center;
}

.italic-heading-desc {
  font-family: 'Noto Serif', serif;
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  display: block;
  text-align: center;
}

.text-lxgw {
  font-family: 'LXGW WenKai', sans-serif;
}

.text-wide-spacing {
  letter-spacing: 6px;
}

.text-normal {
  font-style: normal;
}
</style>
