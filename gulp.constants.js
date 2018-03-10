module.exports = {
  "TSCONFIG": 'tsconfig.json',
  "SRC": {
    "index": "./public/index.html",
    "ts_files": "./public/ts/**/*.ts",
  },
  "DEST": {
    "ts_compiled": ".tmp/index.js",
    "js_file": "bundle.js",
    "js_dir": "build/js",
    "temp_dir": ".tmp",
    "main_dir":"build"
  }
}