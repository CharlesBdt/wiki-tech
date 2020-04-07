# Wiki Tech

Knowledge base created with [GitBook](https://www.gitbook.com/) and host on [GitHub Pages](https://pages.github.com/) with [Gulp](https://gulpjs.com/)

Browse Wiki Tech [website](https://charlesbdt.github.io/wiki-tech/) or [repository](https://github.com/CharlesBdt/wiki-tech)

## Installation

```sh
# If you don't have GitBook CLI
npm install -g gitbook-cli

# Run the project
gitbook serve
```

**N.B** : You can run the project on every branches created but not on `gh-pages`.
> Gulp self-run this branch to serve this GitBook on GitHub pages.

---

## How to serve GitBook on GitHub Pages with Gulp

### GitBook

```sh
# Install GitBook CLI
npm install -g gitbook-cli

# Create a GitBook in your repository
gitbook init

# Test it
gitbook serve
```

### GitHub

Set your current directory as a repository following GitHub basic setup

```sh
# After pushing your modification to your main branch (master by default)
# Create and push this new branch to publish your site
git checkout -b gh-pages
git push -u origin gh-pages

# Back to master branch for the next steps
git checkout master
```

### Gulp task to publish

Prerequisite install

```sh
# If you don't have gulp
npm install -g gulp

# If you don't have yarn
npm install -g yarn
```

Main install

```sh
# Create a package.json with yarn
yarn init

# Add the following required dependencies
yarn add gulp gulp-gh-pages gulp-load-plugins --dev
```

Create a `gulpfile.js` in your root directory

```js
// ~/gulpfile.js
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

// Publishes the site to GitHub Pages
gulp.task('deploy', () => {
  console.log('Publishing to GH Pages');
  return gulp.src('./_book/**/*')
    .pipe($.ghPages({
      origin: 'origin',
      // Branch to deploy on
      // Change to "master" for username.github.io projects
      branch: 'gh-pages'
      // More options at https://www.npmjs.com/package/gulp-gh-pages
    }));
});
```

### Last steps

```sh
# Run locally
gitbook serve

# Or create the build
gitbook build

# Both will make sure that the .publish is updated to serve the Gitbook

# So don't forget to commit and push your files to your remote branch
git add .
git commit -m <commit_message>
git push origin <current_branch_name>

# Publish it online
gulp deploy

# The script will :
#  - Clone the repo
#  - Checkout branch gh-pages
#  - Update repo
#  - Copy files to repository (based on .publish)
#  - Deploy it on Github pages

# Check it online at https://<github_username>.github.io/<repository_name>

```
