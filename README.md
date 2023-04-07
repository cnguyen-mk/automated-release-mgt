[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
## Commit message format
This repo employs an automated release strategy which leverages **semantic release** and **commitizen**. 

#### How does semantic-release work
**semantic-release** uses the commit messages to determine the consumer impact of changes in the codebase.
Following formalized conventions for commit messages, **semantic-release** automatically determines the next [semantic version](https://semver.org) number, generates a changelog and publishes the release.

By default, **semantic-release** uses [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).
The commit message format can be changed with the [`preset` or `config` options](docs/usage/configuration.md#options) of the [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer#options) and [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator#options) plugins.

Tools such as [commitizen](https://github.com/commitizen/cz-cli) or [commitlint](https://github.com/conventional-changelog/commitlint) can be used to help contributors and enforce valid commit messages.

The table below shows which commit message gets you which release type when `semantic-release` runs (using the default configuration):

| Commit message                                                                                                                                                                                   | Release type                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | ~~Patch~~ Fix Release                                                                                           |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release                                                                                       |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release <br /> (Note that the `BREAKING CHANGE: ` token must be in the footer of the commit) |

### Using semantic-release on github protected branch
1. create a dedicated user
2. assign this machine user admin permission on the repo
3. create a personal access token by this user
4. use the token in the pipeline

#### How does commitizen work
**commitizen** ensures your commit message is clear by context and easy to understand by other developer. When you commit with Commitizen, you will be prompted to fill out a commit based on the context such as `fix`, `feature` or `perf`, etc... This way we establish a consistent way of writing commit messages and make sure they conform to semantic-release standard and can be picked up by the tool for automated release management.
