# Maintainers Guide

This guide is intended for maintainers - anybody with committed access to one or
more Code Pattern repositories.

## Methodology

This repository does not have a traditional release management cycle but
should instead be maintained as a useful, working, and polished reference at
all times. While all work can therefore be focused on the master branch, the
quality of this branch should never be compromised.

The remainder of this document details how to merge pull requests to the
repositories.

## Merge approval

A change requires LGTMs from
two project maintainers. The project maintainers use LGTM (Looks Good To Me) in comments on the pull
request to indicate acceptance before merging. A maintainer writes the code, and the change
only requires one additional LGTM.

## Reviewing Pull Requests

We recommend reviewing pull requests directly within GitHub. This allows a
public commentary on changes, providing transparency for all users. When
providing feedback, be civil, courteous, and kind. Disagreement is acceptable so long
as the discourse is carried out politely. If we see a record of uncivil or
abusive comments, we will revoke your commit privileges and invite you to leave
the project.

During your review, consider the following points:

### Does the change have a positive impact?

Some proposed changes may not represent a positive impact on the project. Ask
whether or not the change will make understanding the code easier, or if it
could be a personal preference on the part of the author (see
[bikeshedding](https://en.wiktionary.org/wiki/bikeshedding)).

Pull requests that do not have a clear positive impact should be closed without
merging.

### Do the changes make sense?

If you do not understand what the changes are or what they accomplish, ask the
author for clarification. Ask the author to add comments and clarify test
case names to make the intentions clear.

At times, such clarification will reveal that the author may not be using the
code correctly or is unaware of features that accommodate their needs. If you
feel this is the case, work up a code sample that would address the pull
request for them, and feel free to close the pull request once they confirm.

### Does the change introduce a new feature?

For any given pull request, ask yourself, "Is this a new feature?" If so, does
the pull request (or associated issue) contains a narrative indicating the need
for the feature? If not, ask them to provide that information.

Are new unit tests in place that test all new behaviours introduced? If not, do
not merge the feature until they are! Is the documentation in place for the new
feature? (See the documentation guidelines). If not, do not merge the feature
until it is! Is the feature necessary for general use cases? Try and keep the
scope of any given component narrow. If a proposed feature does not fit that
scope, recommend that they maintain the feature independently and
close the request. You may also recommend that they see if the feature gains
traction among other users and suggest they re-submit when they can show such
support.
