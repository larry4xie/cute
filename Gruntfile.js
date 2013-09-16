module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            lib:{
                files: [{
                    src: ['src/css/lib.less'],
                    dest: 'dist/lib.less'
                }]
            },
            "cute-ie67":{
                files: [{
                    src: ['src/js/cute-ie67.js'],
                    dest: 'dist/cute-ie67.js'
                }]
            }
        },

        less: {
            cute: {
                options: {
                    yuicompress: true,
                    report: 'gzip'
                },
                files:  {
                    'dist/cute.css' : 'src/css/cute.less'
                }
            },
            'cute-debug': {
                files:  {
                    'dist/cute-debug.css' : 'src/css/cute.less'
                }
            }
        },

        uglify: {
            "cute-ie67": {
                files: {
                    'dist/cute-ie67.js': ['dist/cute-ie67.js']
                }
            }
        }
    });

    // load
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // task
    grunt.registerTask('default', ['copy:lib', 'less:cute', 'less:cute-debug', 'copy:cute-ie67', 'uglify:cute-ie67']); // default
};