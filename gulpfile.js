var gulp = require("gulp");
var uglify = require("gulp-uglify");
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

gulp.task("minify", function(){
    gulp.src("src/*.js")
        .pipe(uglify())
        .pipe(rename("gen-form.min.js"))
        .pipe(gulp.dest("./"));
});

gulp.task("default", ["minify", "test"]);