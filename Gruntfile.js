module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cacheBust: {
      test: {
        options: {
          assets: ['dist/**'],
          deleteOriginals: true
        },
        src: ['dist/*.html']
      }
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: '**',
            dest: 'dist'
          }
        ]
      }
    },
    clean: {
      dist: ['dist']
    }
  });

  grunt.loadNpmTasks('grunt-cache-bust');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean:dist', 'copy:dist', 'cacheBust:test']);
};
