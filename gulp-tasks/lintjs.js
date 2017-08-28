const Eslint = require('gulp-eslint');
const Gulp = require('gulp');
const Path = require('path');


const root = Path.join(__dirname, '..');


module.exports = function () {

    return Gulp.src(
        [`${root}/**/*.js`, `!${root}/+(.git|coverage|dist|node_modules)/**/*.js`]
            .concat([`${root}/tests/**/*.js`])
    )
        .pipe(Eslint())
        .pipe(Eslint.format())
        .pipe(Eslint.failAfterError());
};
