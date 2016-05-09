var gulp = require("gulp");
var uglify = require('gulp-uglifyjs');
var rename = require("gulp-rename");
var karma = require("gulp-karma");

var config = require('./config/config.js');

gulp.task("test", ["minify"], function(){
    gulp.src(config.testFiles)
        .pipe(karma({
            configFile: 'config/karma.conf.js',
            action: 'run'
        }));
});

gulp.task("build", function(){
    gulp.src(["src/*.module.js","src/*.js"])
        .pipe(uglify("gen-form.min.js"))
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["minify", "test"]);