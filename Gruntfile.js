module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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
        }
    });

    // load
    grunt.loadNpmTasks('grunt-contrib-less');

    // task
    grunt.registerTask('default', ['less:cute', 'less:cute-debug']); // default
};