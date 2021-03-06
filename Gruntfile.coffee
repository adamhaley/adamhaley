module.exports = (grunt) ->
 
  # configuration
  grunt.initConfig
 
    # grunt sass
    sass:
      compile:
        options:
          style: 'expanded'
        files: [
          expand: true
          cwd: 'public/sass'
          src: ['**/*.scss']
          dest: 'public/css'
          ext: '.css'
        ]
 
    # grunt coffee
    coffee:
      compile:
        expand: true
        cwd: '.'
        src: ['**/*.coffee']
        dest: '.'
        ext: '.js'
        options:
          bare: true
          preserve_dirs: true
 
    # grunt watch (or simply grunt)
    watch:
      html:
        files: ['**/*.html']
      sass:
        files: '<%= sass.compile.files[0].src %>'
        tasks: ['sass']
      coffee:
        files: '<%= coffee.compile.src %>'
        tasks: ['coffee']
      options:
        livereload: true
 
  # load plugins
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
 
  # tasks
  grunt.registerTask 'default', ['sass', 'coffee', 'watch']