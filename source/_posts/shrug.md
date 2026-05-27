---
title: Teaching AI When to Stay Silent
date: 2026-05-27 16:57:23
cover_image: /img/000095.svg
cover_image_alt: A emoticon that shrugs (¯\_(ツ)_/¯).
tags:
  - ai
  - ml
categories: Work
mathjax: true
about_extra_description: <small class="about-aigc-note">This post is written by <a href="https://www.kimi.com/ai-models/kimi-k2-6" target="_blank">Kimi K2.6</a> under human guidance and review.</small>
---

Have you ever been in a group chat where someone says "lol" and an AI bot immediately responds with a full paragraph? Or sent a quick "ok" to a friend and watched the assistant generate a thoughtful essay in reply?

This is the problem that inspired [Shrug](https://github.com/MrWillCom/Shrug). AI chatbots always respond. It doesn't matter if you sent a meme, a one-word acknowledgement, or a message clearly not directed at them. They reply anyway, because that's what they're trained to do: generate text. No one taught them the more fundamental skill of deciding *whether* to speak at all.

## A Decision Gate, Not a Generator

Shrug is a reply-decision model. It doesn't decide *what* to say — it decides *whether* to reply at all.

The idea is simple: instead of feeding every message directly into a language model and asking it to generate a response, you first run it through Shrug. Shrug looks at the conversation context and outputs a single number $p \in [0, 1]$ — the probability that a reply is appropriate. If $p$ is low, the bot simply stays silent.

This sounds obvious, but most chatbots don't do this. They treat every incoming message as a prompt that demands an answer. Shrug introduces a filter, a moment of hesitation between receiving a message and deciding to speak.

## Humans Are Not Threshold Machines

The most interesting design decision in Shrug is how it uses that probability. You might expect a simple rule: reply if $p > 0.5$, stay silent otherwise. But that's not how humans work.

Think about your own behavior in conversations. Sometimes you see a message at $p = 0.9$ and still decide not to reply. Other times something at $p = 0.2$ catches your attention and you interject anyway. Humans are probabilistic, not deterministic.

Shrug embraces this. The model outputs only the probability $p$. It's up to the client — your application code — to draw a random number $r \sim U(0, 1)$ and decide: if $r < p$, reply. This means:

- At $p = 0.9$, there's still a $10\%$ chance of silence
- At $p = 0.1$, there's still a $10\%$ chance of an interjection

This naturally introduces the imperfections that make human conversation feel real: hesitation, omission, and impulse.

<div class="container">
  <div class="shrug-demo">
    <div class="demo-header">
      <label for="probability-slider">Reply Probability: <span id="probability-value">0.50</span></label>
      <input type="range" id="probability-slider" min="0" max="100" value="50">
    </div>
    <div class="demo-visualization-container">
      <div class="demo-row" id="demo-row"></div>
    </div>
    <p class="demo-caption">Each dot represents one decision. Green = replied, Gray = silent. Click "Regenerate" to see new random outcomes.</p>
    <button id="regenerate-btn" class="action-button-primary">Regenerate</button>
  </div>
</div>

## How It Works

Under the hood, Shrug is a binary classifier built on top of a language model. I use Qwen3-8B with LoRA adapters for efficient fine-tuning, which means only a small fraction of the model's parameters are updated during training.

The training data is remarkably simple: a chronological stream of messages from my own conversations, tagged as either `<me>` or `<others>`. A sliding window moves over this stream and asks one question: given these last N messages, did I send the next one? If yes, the label is 1. If no, the label is 0.

What's interesting is that consecutive messages from me are valid positives. The task isn't turn-taking detection ("is it my turn?"); it's reply-decision modeling ("would I have replied to this?"). Even if I just sent three messages in a row, the model learns that I might send a fourth.

All messages are considered read. Silence is treated as a deliberate decision, not as "didn't see it." This is an important philosophical choice: in human conversation, not replying is itself a form of communication.

If you want to see the exact architecture, data pipeline, and training code, it's all in the [Shrug repository](https://github.com/MrWillCom/Shrug).

## From 2 Hours to 38 Minutes

My first training run took 1 hour and 59 minutes. For a model that just outputs a single number, this felt unexpectedly long. But after iterating on the training configuration, I got it down to 38 minutes.

The biggest gains came from reducing the context window: from 36 messages down to 16. Looking at my own message history, most reply decisions don't require that much context. Smaller windows mean fewer tokens per sample, which directly translates to faster training.

I also cut the training from 3 epochs to 2. The model converged quickly, so that third epoch was mostly redundant. Other changes — a lower learning rate with a constant-with-warmup scheduler, reduced warmup ratio, and larger LoRA rank and alpha — helped the model learn more efficiently per epoch rather than simply training longer.

A subtler but important addition was dynamic class weighting. In conversation data, "not replying" is far more common than "replying." By weighting the loss function inversely to class frequency, the model learned faster from the minority class instead of defaulting to "always silent."

Here's what the training looked like before and after:

<figure>
  <img src="/img/000093.webp" alt="Original 3-epoch training run taking 1 hour 59 minutes">
  <figcaption>Original 3-epoch training. Loss hovered around 4–6 with unstable gradients (peak 664.2). The third epoch showed diminishing returns.</figcaption>
</figure>

<figure>
  <img src="/img/000094.webp" alt="Optimized 2-epoch training run taking 38 minutes">
  <figcaption>Optimized 2-epoch training. Loss dropped to ~0.5, gradient spikes tamed to 60.9, and the confusion matrix shows strong performance (816 true negatives, 486 true positives).</figcaption>
</figure>

## Where This Could Go

Shrug is currently a personal experiment, but the concept has broader implications. Any chatbot living in a group chat or handling DMs could benefit from a reply-decision layer. Imagine:

- A Discord bot that knows when a conversation doesn't involve it
- A customer support AI that stays quiet when users are clearly talking to each other
- A personal assistant that doesn't interrupt your flow with unnecessary confirmations

The ultimate goal is making AI feel less robotic by giving it the ability to choose silence. Real conversation isn't just about what you say — it's about when you choose not to say anything at all.

If this idea resonates with you, the code is open source at [MrWillCom/Shrug](https://github.com/MrWillCom/Shrug).

## Why "Shrug"?

The name comes from that moment of hesitation before deciding whether to reply. You read a message, shrug to yourself, and make a call. Sometimes you respond. Sometimes you don't. The shrug is the decision.

¯\\\_(ツ)\_/¯

<style>
.shrug-demo {
  margin: 24px 0;
}

.demo-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.demo-header label {
  font-weight: 500;
  font-size: 15px;
  color: var(--color-text-secondary);
}

#probability-slider {
  flex: 1;
  min-width: 200px;
  accent-color: var(--color-background-accent);
}

#probability-value {
  color: var(--color-text-primary);
  font-family: var(--font-monospace);
  font-weight: 600;
  min-width: 40px;
  display: inline-block;
}

.demo-visualization-container {
  container: demo-viz / inline-size;
  width: 100%;
  margin-bottom: 12px;
}

.demo-row {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(12, 1fr);
}

@container demo-viz (min-width: 300px) {
  .demo-row {
    grid-template-columns: repeat(16, 1fr);
  }
}

@container demo-viz (min-width: 500px) {
  .demo-row {
    grid-template-columns: repeat(24, 1fr);
  }
}

.demo-dot {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: var(--color-border-secondary);
  transition: background-color 0.15s;
}

.demo-dot.replied {
  background-color: #34c759;
}

.demo-caption {
  color: var(--color-text-secondary);
  font-size: 13px;
  text-align: center;
  margin-bottom: 16px;
}

#regenerate-btn {
  display: block;
  margin: 0 auto;
}
</style>

<script>
(() => {
  const slider = document.getElementById('probability-slider');
  const valueDisplay = document.getElementById('probability-value');
  const demoRow = document.getElementById('demo-row');
  const regenerateBtn = document.getElementById('regenerate-btn');
  const dots = Array.from({ length: 48 }, () => {
    const dot = document.createElement('div');
    dot.className = 'demo-dot';
    demoRow.appendChild(dot);
    return dot;
  });

  function update() {
    const p = parseInt(slider.value) / 100;
    valueDisplay.textContent = p.toFixed(2);
    dots.forEach(dot => dot.classList.toggle('replied', Math.random() < p));
  }

  slider.addEventListener('input', update);
  regenerateBtn.addEventListener('click', update);
  update();
})();
</script>

<style>
@import url('https://unpkg.com/@ibm/plex-serif@1/css/ibm-plex-serif-all.min.css');

.post .meta, .post .content {
  font-family: 'IBM Plex Serif', var(--font-sans-serif);
}

.about-aigc-note {
  color: var(--color-text-secondary);
}
</style>
