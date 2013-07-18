module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            cute: {
                options: {
                    report: 'gzip',
                    yuicompress: true
                },
                files:  {
                    'dist/cute.css' : 'src/css/cute.less'
                }
            }
        },

        uglify: {
            util: {
                options: {
                    report: 'gzip'
                },
                files: {
                    'src/js/util.min.js': 'src/js/util.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less']);

    grunt.registerTask('util', ['uglify']);
};