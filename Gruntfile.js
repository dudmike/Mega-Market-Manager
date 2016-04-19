module.exports = function(grunt) {

	//Configure main project settings
	grunt.initConfig({

		//Basic settings and info about plugins
		pkg: grunt.file.readJSON('package.json'),

		//Name of plugin (plugin without the "grunt-contrib-")
		cssmin: {
			combine: {
				files: {
					'css/customStyles.min.css': ['css/customersView.css','css/navigationBar.css','css/tableView.css','css/viewHoldplacer.css']
				}
			}
		}
	});

	//Load the plugin
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	//Do the task
	grunt.registerTask('default', ['cssmin']);

	
}