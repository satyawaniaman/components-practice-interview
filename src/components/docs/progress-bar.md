# Progress Bar Component - Technical Interview Documentation

## Interview Conversation

**Interviewer**: "Can you walk me through this progress bar component you've built?"

**Developer**: "Absolutely! I've built a highly customizable and performant progress bar component using React and TypeScript. Let me break down the key technical aspects:
“So this is a reusable ProgressBar component I built in React with Tailwind.

It takes a value and an optional max prop, calculates the percentage, and renders a bar that fills up accordingly. I’ve added options for size, color, a label, and whether to show the percentage text above the bar.

The interesting part is the animation. Instead of manually running requestAnimationFrame or easing functions, I just rely on CSS transitions. On the first render, the bar starts at 0, then once the component mounts, it smoothly animates to the actual percentage. When the value changes, it animates again to the new width — so it feels smooth without extra JS logic.

There’s also an optional shimmer effect, which is just a keyframe animation that moves a gradient across the bar. It’s nice for cases like showing “Downloading…” where you want the progress to look active.

I also made it accessible — it has role="progressbar" and ARIA attributes for screen readers.

Overall, it’s simple, clean, and easy to reuse across different contexts — like scores, uploads, or completion tracking — while still feeling polished because of the animation and shimmer.”
