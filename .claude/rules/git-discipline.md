---
description: Git workflow rules
globs: ["*"]
---

# Git Discipline

## The Golden Rule
Never commit without reviewing first.
- `git diff` before every commit
- Meaningful commit messages describing WHAT changed and WHY

## Branch Strategy
- Never experiment directly on `main`
- Feature branches: `feature/<task-name>`
- Bug fixes: `fix/<bug-description>`
- Data entry: `data/<tier-description>`

## Commit Message Format
```
[component] action: brief description

Examples:
[tarot] add: Major×Pentacles interaction pairs (Task 9a, 80 entries)
[natal] fix: Triệt formula using correct chiIdx
[css] refactor: move inline styles to natal_chart.css
```

## Security
- NEVER commit API keys, passwords, or tokens
- `.env` files in `.gitignore`
- Check `git diff` for accidental credential exposure before committing
