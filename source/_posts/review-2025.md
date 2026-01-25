---
title: 2025 年终总结
date: 2026-01-25 22:54:12
cover_image: /img/000066.webp
cover_image_alt: 一列单轨重庆轻轨在高架轨道上穿过茂密翠绿的树冠。交通线下方和后方可以看到带有白色标记的道路和一座远处的桥梁。
tags:
  - life
  - annual-review
categories: Essay
---

<p style="text-align: center"><small><strong>时光机</strong> · <a href="/2023/12/26/2023-review/">2023 年度总结</a></small></p>
<hr class="break-divider" />

## 开源

<div class="block-large">
  <img src="/img/000071.webp" alt="GitHub 贡献绿点图" />
</div>

六月高考结束后，活动肉眼可见地大幅增多。虽然下半年确实有更多时间做一些自己的事，但是多少有些没有方向和想法，所以总是写一写停一停的。

[Reneur](https://reneur.link/) 是我十月想出来的一个项目，我觉得这个比较简单，部署给大众使用也不会造成很大的存储负担，于是决定写写这个来练练手。原计划其实是十二月公开测试，实际上现在还在 waitlist 阶段。现在我打算寒假赶赶，预计 Reneur 会在 2026 第一季度公开测试和发布。

<hr class="break-divider" />

此外，2026 年请大家不要忘记 [Tailwind CSS](https://tailwindcss.com/) 给世界带来的巨大灾祸！

Tailwind 不能与我所爱的 [SCSS（Sass）](https://sass-lang.com/)共存——[“*Think of Tailwind CSS itself as your preprocessor — you shouldn't use Tailwind with Sass for the same reason you wouldn't use Sass with Stylus.*”](https://tailwindcss.com/docs/compatibility#sass-less-and-stylus)——导致我很难用上一些依赖 Tailwind 的组件库。我一旦看到它们依赖 Tailwind，心就凉了半截，最后基本上都只能我自己设计，自己写。其它问题详见我前些天写的[《Tailwind as a Headwind》](/2026/01/09/Tailwind-as-a-Headwind/)。

希望大家能认清 Tailwind 的真面目，不要跟风使用它。现在，在 AI 的辅助下，写 CSS 比以往任何时候都要更容易更简单，所以请不要再让 Tailwind 污染全世界了好吗？！

## 站点 Insights

今年又把 analytics 服务从 [Umami](https://umami.is/) 转到了 [OpenPanel](https://openpanel.dev/)。原因是 Umami 数据只保留 6 个月，不论是写年终总结，还是看更长时间尺度上的趋势，都很难满足。我曾想过每半年导出一次数据，然后自己拼接，自己做数据分析，可是终究觉得实在麻烦，所以找来找去选择了颜值较高的 OpenPanel。OpenPanel 可以长期保留数据，价格是按照用量阶梯计费的，价格一般。

### Blog

<div class="block-large">
  <img src="/img/000069.webp" alt="访客数统计曲线" />
</div>

通过下半年的数据（8 月 10 日起），估算出整年的访客数约 4553.57 人，访问量约 7562.90。

### Home Page

<div class="block-large">
  <img src="/img/000070.webp" alt="访客数统计曲线" />
</div>

同样通过下半年的数据（8 月 8 日起），估算出整年的访客数约 1817.45 人，访问量约 1,968.48。

<hr class="break-divider" />

就我个人的感觉来说，今年的数据不如去年，可能是我之前更新和活动较少导致的。希望 2026 流量能够上涨一些。

## 摄影

今年用相机记录下了大约 1.6k 张/段影像。主要是上半年高考备考，所以相较去年有很大程度减少。此外，由于之前那一台 Canon EOS M3 应该是差不多九岁了，翻转屏和 SD 卡槽已经不灵光了。高考完之后，决定彻底升级一次，于是入手了一台新相机来替代它。全画幅传感器的新相机配上大变焦头 24-200 mm，出门玩只需一机一镜，也是爽爽的。

十二月再次施放传统艺能，做了一套明信片，并且给好友们各寄了一套。我给它取名叫“<ruby>Post<rt>后</rt></ruby><ruby>summer<rt>夏</rt></ruby>
”，本意是后夏，这里表达初秋。

<div class="carousel">
  <img src="/img/000072.webp" alt="明信片的展示图片（1/5）" class="carousel-item" />
  <img src="/img/000073.webp" alt="明信片的展示图片（2/5）" class="carousel-item" />
  <img src="/img/000074.webp" alt="明信片的展示图片（3/5）" class="carousel-item" />
  <img src="/img/000075.webp" alt="明信片的展示图片（4/5）" class="carousel-item" />
  <img src="/img/000076.webp" alt="明信片的展示图片（5/5）" class="carousel-item" />
</div>

## 开店

Postsummer 系列明信片不仅我的朋友们可以拥有，正在阅读本文的你或许也可以获得一份。因为，我在小红书上开店了——[Will 的店](https://www.xiaohongshu.com/shop/683e945d5c987e001553055b)。我预留了些许的库存公开在小红书上售卖：[「Postsummer」系列明信片](https://www.xiaohongshu.com/goods-detail/69416947bd92f50001874a6c)。

自从申请了小红书个人店，帖子的流量就非常低，甚至连互关的好友都刷不到我的帖子。这一变化我原本早有预料，但未曾想到会这么夸张，或许之后我会需要充钱买流量了。

## Roadmap

一张大致的 2026 路线图：

<dl class="container timeline-roadmap">
  <dt>第一季度</dt>
  <dd>
    <ul>
      <li><span class="product-name">Nurtinit</span>产品发布</li>
      <li><span class="product-name">Reneur</span>产品发布</li>
      <li><span class="product-name">Swift Student Challenge 2026</span>参赛</li>
    </ul>
  </dd>
  <dt>第二季度</dt>
  <dd>
    <ul>
        <li><span class="product-name">Nurtinit</span>开放源代码</li>
    </ul>
  </dd>
  <dt>下半年</dt>
  <dd>
    <ul>
        <li><span class="product-name">暂时未定名称的社交媒体应用</span>产品发布</li>
    </ul>
  </dd>
</dl>

<style>
.timeline-roadmap {
  dt {
    font-weight: 600;
    margin-top: 12px;

    &:first-child {
      margin-top: 0;
    }
  }

  dd {
    margin-left: 1em;

    ul {
      margin-block-start: 0.2em !important;
      margin-block-end: 0.2em !important;
      padding: 0 !important;
      font-size: 16px;
      list-style: none;

      li {
        span.product-name {
          font-weight: 600;
          margin-right: 6px;
        }
      }
    }
  }
}
</style>

[Nurtinit](https://nurtinit.mrwillcom.com/) 是一个实验性项目，除了其本身的功能以外，它还有额外的但暂时不能揭晓的意义。[Swift Student Challenge 2026](https://developer.apple.com/swift-student-challenge) 参赛作品可能在参赛后晚些时候公开或发布。如你所见，我将在 2026 尝试不少实验性的项目，一方面是想实现一些喜欢的想法，另一方面是想熟悉一下整个流程。当然，这些项目也并非不可能被放鸽子。

## AI

今年以 [DeepSeek](https://www.deepseek.com/) 引起的巨大轰动开始。它以其惊艳的性能和价格告诉世人，高质量模型可以很实惠。我 2023 年初就试玩了当时的 ChatGPT，可惜一直到 DeepSeek R1 的流行，都没有一个优良的 reasoning 模型可供我使用。DeepSeek R1 作为一个 reasoning 模型，真的是在写提示词这方面帮了我大忙。从此我不需要心惊胆战地试图把提示词写得万无一失，也不再需要反复强调和复制粘贴。（当然也有可能是我以前用的模型太差了。）在 OpenAI、Anthropic 几乎已经在 AI 领域站稳脚跟的时候，DeepSeek 的流行可以称得上是 game-changer。

而正是 DeepSeek 的普及，每个人都能用上热乎的模型了。于是很多人终于发现，自己所从事的工作实际上很容易被大语言模型取代。只要有足够的提示词工程能力，手中的大语言模型能做得比人更好。我们花费时间积累的经验，现在在大语言模型眼里不值一提。每隔几周，甚至更短，就会有新的模型迭代，远比我们的学习更快。

一段时间之后，阿里千问开始迎头赶上，逐步成为了开源模型中的头牌。这段时间里，我选择模型一般都优先考虑千问系列。毕竟千问更新更勤奋，而 DeepSeek 的佛系更新频率很难跟上世界的节奏。

七月后期，发现了隐藏宝藏——Google Gemini。Google 极为慷慨大方的免费额度，让我能免费自由地使用优秀的 Gemini。当时是 Gemini 2.5 Pro，位居 [LMArena](https://lmarena.ai/) 榜首。年末，Google 发布 Gemini 3 Pro 和 Flash，又一次直击 LMArena 榜首。同时，3 Flash 的价格震撼美味依旧，现在是我日常使用的模型。

<hr class="break-divider" />

用大语言模型我一直是选择 [OpenRouter](https://openrouter.ai/)。一处充钱，处处可用，始终能选择到最实惠的模型。如果加上“BYOK”的话，还能优先选择你配置的提供商。（写完之后突然感觉这里有点像广告，但是这不是广告，只是寻常的好用服务推荐。）

[![OpenRouter 2025 Wrapped](/img/000068.webp)](https://openrouter.ai/wrapped/2025/3c6592fadcde6824?t=2)

网上的 meme 说，我们处于一个轮回之中，让我们一起期待 2026 的第一位嘉宾。

![一张圆形流程图描绘了 AI 公司 OpenAI（ChatGPT）、Google（Gemini）、xAI（Grok）和 Anthropic（Claude）之间不断重复的营销周期。每个图标都伴随着完全相同的短语——“Introducing the world's most powerful model”，并通过箭头连接成一个循环。](/img/000067.webp)

<style>
#main-content > * > .meta {
  .categories {
    margin-bottom: 1px;
    font-size: 15px;
  }

  .date {
    font-weight: 500;
    font-size: 14px;
  }

  .title {
    font-size: 40px;
  }
}

.post > .content {
  font-size: 17px;
  line-height: 1.6;
  
  a {
    color: color-mix(in oklch, var(--color-text-primary), transparent 35%);

    &:hover, &:focus-visible {
      color: color-mix(in oklch, var(--color-text-primary), transparent 20%);
      text-decoration: underline;
    }
  }
}

.post hr.break-divider {
  max-width: 60px;
  border-color: color-mix(in oklch, var(--color-text-primary), transparent 75%);
}
</style>
