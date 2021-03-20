const gulp = require("gulp");
const zip = require("gulp-zip");
const inject = require("gulp-inject-string");
const replace = require("gulp-replace");

gulp.task("insert", function (done) {
  gulp.src("./GenericExt/index-*.html").pipe(inject.before("<title>", '<script defer="defer" src="../vendorlib/vendor.js"></script>')).pipe(gulp.dest("./GenericExt/"));
  console.log("Insert task done!");
  done();
});

gulp.task("zip", function (done) {
  gulp.src("GenericExt/**/*.*").pipe(zip("GenericExt.zip")).pipe(gulp.dest("."));
  console.log("Zip task done");
  done();
});

gulp.task("copy", function () {
  console.log("Copy task done");
  return gulp.src(["./vendorlib/**/*"]).pipe(gulp.dest("./GenericExt/vendorlib"));
});

gulp.task("replace", function (done) {
  gulp.src(["./GenericExt/index.html"]).pipe(replace("../vendorlib", "vendorlib")).pipe(gulp.dest("./GenericExt/"));
  console.log("replace task done");
  done();
});
