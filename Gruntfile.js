'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    var Promise = require('es6-promise').Promise;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


		postcss: {
			options: {
				sourceMap: false,

				processors: [
					require('autoprefixer')({browsers: 'last 2 versions'}),
					require('cssnano')()
				]
			},
			files: {
		    	src: 'app/src/css/main.css',
				dest: 'app/dist/css/main.min.css'
		    }
		},


		babel: {
	        options: {
	            sourceMap: false,
	            plugins: ['transform-react-jsx'],
	            presets: ['es2015', 'react']
	        },
	        jsx: {
				files: {
					'app/src/js/components/react-es5.js': 'app/src/js/components/react.jsx'
				}
			},
	        dist: {
	            files: {
	                'app/src/js/components/main-es5.js': 'app/src/js/components/main.js'
	            }
	        }
	    },


	    uglify: {
			my_target: {
				files: {
					'app/dist/js/main.min.js': 'app/src/js/components/main-es5.js',
					'app/dist/js/react.min.js': 'app/src/js/components/react-es5.js'
				}
			}
		},

		watch: {
			scripts: {
				files: ['app/*', 'app/src/**/**/*'],
				tasks: ['postcss', 'babel', 'uglify'],
				options: {
					spawn: false,
				}
			}
		},
        
        jasmine: {
            components: {
              src: [
              'TDD/src/*js'
              ],
              options: {
                specs: 'TDD/spec/*Spec.js',
                keepRunner : true//,
                //helpers: 'test/spec/*.js'
              }
            }
        }
    });



    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');



    grunt.registerTask('default', ['postcss', 'babel', 'uglify', 'jasmine']);
    grunt.registerTask('css', ['postcss']);
    grunt.registerTask('js', ['babel', 'uglify']);


};