module.exports = function(grunt) {
	grunt.initConfig({
		// running `grunt less` will compile once
		pkg: grunt.file.readJSON("package.json"),
		cssmin: {
			minify: {
				expand: true,
				cwd: './css/',
				src: ['main.css'],
				dest: './css'
			}
		},
		concat: {
	      options: {
	        separator: ';'
	      },
	      dist: {
	        src: [],
	        dest: 'dist/<%= pkg.name %>.js'
	      }
	    },
	    uglify: {
	      options: {
	        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
	      },
	      dist: {
	        files: {
	          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
	        }
	      }

	    },
    	jshint: {
	      files: ['Gruntfile.js', 'js/**/*.js', 'test/**/*.js'],
	      options: {
	        // options here to override JSHint defaults
	        globals: {
	          jQuery: true,
	          console: true,
	          module: true,
	          document: true
	        }
	      }
	    },
		// running `grunt watch` will watch for changes
		watch: {
			files: "",
			tasks: []
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');

	 grunt.registerTask('default', ["concat","uglify","cssmin"]);

};
