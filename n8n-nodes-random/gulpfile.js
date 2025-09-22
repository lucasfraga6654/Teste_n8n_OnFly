const { src, dest, series } = require('gulp');

function copyIcons() {
    // Copia todos os SVGs dos nodes
    return src('src/nodes/**/*.svg').pipe(dest('dist/nodes'));
}

exports.copyIcons = copyIcons;
exports.default = series(copyIcons);
