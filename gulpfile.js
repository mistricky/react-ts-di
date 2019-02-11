const { task, src, dest, parallel, series } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

task("compress", done => {
  src(["bld/**/*.js"])
    .pipe(concat("di.js"))
    .pipe(uglify())
    .pipe(dest("./dist"));

  src(["bld/**/*.d.ts"]).pipe(dest("./dist"));

  done();
});

task("default", parallel("compress"));
