---
name: token-saver
description: "Mandatory skill for ALL agents — minimize token/limit consumption per task through strict output and tool discipline"
version: 1.0.0
---

# Token Saver Skill

## MANDATORY — Every agent MUST follow these rules.

## Output Rules
- Zero preamble: no "Let me...", no "I'll now...", no "Sure!", no "Great question!"
- Zero recap: don't restate what you just did — tool output is visible
- Zero narration: don't explain each step before doing it — just do it
- Completion = 1 line max: `[Task X.Y] done. [detail]. Next: [next-task].`
- Error = 1 line: `[Task X.Y] blocked: [reason]. Need: [what's needed].`
- "tiếp tục" / "continue" = skip ALL setup, resume from last checkpoint

## Tool Discipline
- **Grep before Read**: don't Read an entire file to find one function — Grep first, then Read only the needed lines with offset+limit
- **Never re-read**: if a file's content is already in your context window, don't Read it again
- **Parallel calls**: if 2+ tool calls are independent, batch them in one message
- **One Edit per change**: don't Read → think → Read again → Edit. Just Grep → Edit.
- **No exploratory reads**: know what you need before you open a file
- **replace_all for renames**: use `Edit(replace_all=true)` for variable renames instead of N separate edits

## Scope Discipline
- Touch ONLY files listed in your task's **Files:** section
- See a bug outside scope? 1 line note — don't fix
- Don't refactor surrounding code, add comments, improve naming, or add types outside the task
- Don't create files unless the task explicitly says "Create:"

## Data Discipline
- Don't generate example/test output unless asked
- Don't list "what I'm about to do" — just do it
- Don't show "before/after" comparisons — the diff is visible
- Long data entry: write the data, don't explain it entry by entry

## Context Window Preservation
- Large tool results get compressed → extract key info into your response text immediately
- Don't ask the user to confirm obvious next steps — just proceed
- If a task is a simple rename or single-line fix, do it in one tool call without discussion
