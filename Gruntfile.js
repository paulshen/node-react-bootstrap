module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      app: {
        src:  './app/public_src/index.js',
        dest: './app/public/js/package.js'
      }
    },

    watch: {
      files: ['app/public_src/**'],
      tasks: ['browserify']
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'browserify'
  ]);
};
