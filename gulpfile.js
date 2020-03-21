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
