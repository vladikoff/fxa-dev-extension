'use strict';

var path = require('path');

var gulp = require('gulp');
var zip = require('gulp-zip');
var crx = require('gulp-crx');

var files = ['manifest.json', 'background.js', '*.png'];
var buildPath = path.join('dist', '.');
var xpiName = 'fxa-dev.xpi';
var crxName = 'fxa-dev.crx';

gulp.task('default', function () {
  gulp.src(files)
    .pipe(zip(xpiName))
    .pipe(gulp.dest(buildPath));
});

gulp.task('crx', function() {
  return gulp.src('.')
    .pipe(crx({
      filename: crxName
    }))
    .pipe(gulp.dest(buildPath));
});