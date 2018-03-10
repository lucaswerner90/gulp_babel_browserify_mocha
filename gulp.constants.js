module.exports = {
  "TSCONFIG": 'tsconfig.json',
  "SERVER": {
    livereload: true,
    open: true
  },
  "SRC": {
    "index": "public/index.html",
    "ts_files": "public/ts/**/*.ts",
    "sass_files":"public/scss/**/*.scss"
  },
  "DEST": {
    "ts_compiled": ".tmp/index.js",
    "js_file": "bundle.js",
    "js_dir": "build/js",
    "css_dir": "build/css",
    "css_file": "main.css",
    "temp_dir": ".tmp",
    "main_dir":"build"
  }
}