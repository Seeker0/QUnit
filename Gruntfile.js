"use strict";

module.exports = grunt => {
  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          "public/lib/qunits.js": "public/lib/QUnit.js"
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");

  grunt.registerTask("browser", ["browserify"]);
};
