module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      compile: {
        options: {
          style: 'expanded'
        },
        files: [
          {
            expand: true,
            cwd: 'public/sass',
            src: ['**/*.scss'],
            dest: 'public/css',
            ext: '.css'
          }
        ]
      }
    },
    coffee: {
      compile: {
        expand: true,
        cwd: '.',
        src: ['**/*.coffee'],
        dest: '.',
        ext: '.js',
        options: {
          bare: true,
          preserve_dirs: true
        }
      }
    },
    watch: {
      html: {
        files: ['**/*.html']
      },
      sass: {
        files: '<%= sass.compile.files[0].src %>',
        tasks: ['sass']
      },
      coffee: {
        files: '<%= coffee.compile.src %>',
        tasks: ['coffee']
      },
      options: {
        livereload: true
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  return grunt.registerTask('default', ['sass', 'coffee', 'watch']);
};
