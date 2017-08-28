const Gulp = require('gulp');
const GulpTasks = require('gulp-task-loader');

GulpTasks('./gulp-tasks');

Gulp.task('lint', ['jsonlint', 'packagelint', 'lintjs']);
