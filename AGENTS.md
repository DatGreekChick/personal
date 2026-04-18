# Agent Conventions

## Commit Messages

All commits must follow [Conventional Commits].

### Subject line format

```
<type>(<scope>): <short description>
```

Scope is optional. If present, it must be from the allowed list.

### Allowed types

`build` `chore` `ci` `docs` `feat` `fix` `perf` `refactor` `revert` `style` `test`

### Allowed scopes

`about` `api` `app` `articles` `contact` `deps` `fallbacks` `firebase` `home` `nav` `uses` `work`

### Semver impact

| Commit | Release |
|--------|---------|
| `fix:` | patch |
| `feat:` | minor |
| `BREAKING CHANGE` footer or `!` after type | major |
| all others | no release |

### Commit body

Follow the template in [`.gitmessage`]. To activate it as your local commit
template (run once):

```sh
git config commit.template .gitmessage
```

## Validation rules

A `commit-msg` git hook runs `commitlint` on every commit. A Claude Code `PreToolUse` hook
intercepts `git commit -m` commands before they reach git.

**Never bypass hooks** — `--no-verify` is forbidden. On hook failure, rewrite the commit
message and retry without user intervention.

[Conventional Commits]: https://www.conventionalcommits.org/
[`.gitmessage`]: .gitmessage
