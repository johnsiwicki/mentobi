module.exports = function(grunt) {

  grunt.initConfig({

    surge: {
      'Mentobi': {
        options: {
          // The path or directory to your compiled project
          project: '/',
          // The domain or subdomain to deploy to
          domain: 'mentobi.surge.sh'
        }
      }
    }
  });

  // Load in the grunt-surge plugin
  grunt.loadNpmTasks('grunt-surge'); 

  // Add a `grunt deploy` task that runs Surge
  grunt.registerTask('deploy', ['surge']);
};