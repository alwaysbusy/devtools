---
layout: tool
title: GitHub
type: Hosting
languages: git
platforms: Web, Windows, OS X, Android, iOS
description: Git repository hosting with Issues, Wiki and Website for individuals and teams
homepage: http://www.github.com
price: Free
---

GitHub provide a great range of services for people wanting to use Git source control or collaborate with others.

## Key Features

### Repositories
A repository can be hosted by either an individual or a team.  Repositories can be either public or private, which means that you aren't forced to share your work with the world.  Access is controlled to invited individuals in teams and individual repositories, as well as allowing the use of deploy keys to give read only access to private repositories.

All files in a repository are previewable at any point in history in a browser window, along with the blame and revision history.  Basic operations, such as editing text files or uploading other file types, is available in the browser without any need for a Git client.  Markdown files are processed for viewing in the browser.  By default, any files called README.md are automatically displayed when a folder is viewed.

Point in time snapshots of a repository can be made as a release, which can also have separate brinaries attached to it, to give a stable point in the project.

### Issues
GitHub Issues allow for easy tracking of bugs and work to be done.  Issues all have a title and description, and can have any number of definable lables attached to them to make tracking easier.  Issues can be assigned to a person, so it's easy to see who is/will be doing what in team projects.  Milestones also make it easier to see how close you are to a goal, by showing progress through issues assigned to that milestone.  Milestones can be converted into releases once they are complete.

### Wiki
Wikis are attached to repositories and allow for more freeform content around projects which aren't appropriate for README files.  They can normally only be edited by those who have push permissions on the repo.

### Pages
Using a special `gh-pages` branch in a project, or a specially named `username.github.io` repository, it's possible to create websites to accompany any project on GitHub.  GitHub Pages can only host static content, but parses all pushes throgh Jekyll allowing Markdown and Scss content to be formatted into websites using layouts.  Jekyll makes it quite easy to run a blog as it has built in logic for handling posts with metadata about tags, categories and times attached.

An automatic page builder is included to make starting a website easier with pre-built templates.

### LFS
Large File Storage was recently introduced which means that large files can be efficiently version controlled.  This is on optional extra for most plans, but some do have a storage allowance included.  Normal repository content doesn't count towards storage usage.

### Forks
To continue work from other code bases, it is easy to fork code.  GitHub tracks work across all forks, so it is possible to see how many commits behind the original a fork is easily.  The level of data provided makes it easy to update forked repositories by pulling in code from the parent.  Additional data, which is particuarly of use to teams where management is required, is available in Pulse.

## Other Features

### Desktop Clients
GitHub produces desktop clients for Windows and OS X, which are targeted at entry level users who may have little coding experience.  These provide automatic push and pull, as well as simple management of commits and branching.  More advanced git features are not available through the UI, but can be used through the included Git Shell.

### Mobile Apps
Apps are available for iOS and Android platforms, which allow code browsing, starring, and working with issues.

### Watching/Starring
Watching a repository allows you to receive notifications when certain events occur within a repository.  These can be by email or through broadcast on GitHub.

Starring a repositoiry is much like creating a bookmarks list of repositorys you like and want to investigate in the future.

### Gist
Gist allows quick sharing of notes and code samples that should not be/do not require a repository.  These can be single or multiple file examples.  They are easy to preview on the web with code highlighting.  Much like actual code, Gists can be forked and built upon as well as starred so you can come back to them later on.

## Availability
GitHub offers several plans ranging from Free to $50/month for their individual, cloud hosted accounts.  For organisations it can cost up to $200 a month depending on how many private repositories you need.  All plans include unlimited public repositories and collaborators, so the cost only depends on how many private repositories are needed and any LFS storage/bandwidth used.

### GitHub Enterprise
GitHub also offer an on-premise solution, which hosts both the GitHub backend and UI on a server.  It includes several enterprise grade features, such as SSO and advanced auditing.  Images are also available to bring instances up on popular cloud providers AWS and Azure.  Licencing for Enterprise is based on user numbers and sold as an annual subscription with volume discounting available.