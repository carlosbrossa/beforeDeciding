module.exports = function(grunt) {

  // A very basic default task.
  grunt.registerTask('default', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });

  grunt.registerTask('foo', 'A sample task that logs stuff.', function(arg1, arg2) {
  	if (arguments.length === 0) {
    	grunt.log.writeln(this.name + ", no args");
  	} else {
    	grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
  	}
  });

};