---
description: Prevent scope creep and unnecessary changes
globs: ["*"]
---

# Scope Control

## Must Follow
- Only modify files directly related to the current task
- Never refactor, add comments, or "improve" code outside the task
- Never create new files unless explicitly asked
- Bug outside scope? Mention in 1 line — don't fix it

## Token Efficiency
- No greetings, no task restatement, no "Let me..." preamble
- No recap of actions — tool output is visible
- Task completion notification: 1 line max
  Format: `[task] done. [count] total. Next: [next-task].`

## Tool Usage
- Don't Read a file just to Edit one line — Grep first, then Edit
- Parallel tool calls: batch independent operations
- One Edit call per sub-task
- Don't re-read files already in context window
- "tiếp tục" / "continue" = skip all setup, go straight to work
