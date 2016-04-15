module.exports = (grunt) ->
  @initConfig
    pkg: @file.readJSON('package.json')
    watch:
      files: [
        'js/college_scripts.js',
        'src/**/*.scss'
      ]
      tasks: ['develop']
    compass:
      dist:
        options:
          config: 'config.rb'
          specify: ['src/**/*.scss']
    jshint:
      files: ['js/src/admin/*.js', 'js/src/public/*.js']
      options:
        globals:
          jQuery: true
          console: true
          module: true
          document: true
        force: true
    csslint:
      options:
        'star-property-hack': false
        'duplicate-properties': false
        'unique-headings': false
      # 'ids': false
        'display-property-grouping': false
        'floats': false
        'outline-none': false
        'box-model': false
        'adjoining-classes': false
        'box-sizing': false
        'universal-selector': false
        'font-sizes': false
        'overqualified-elements': false
        force: true
      src: ['css/*.css']
    concat:
      presentationaljs:
        src: ['bower_components/superfish/dist/js/superfish.js', 'bower_components/letteringjs/jquery.lettering.js','bower_components/fitvids/jquery.fitvids.js','bower_components/fittext/jquery.fittext.js']
        dest: 'js/presentational-ck.js'
      publicjs:
        src: ['js/college_scripts.js', 'js/off-canvas.js', 'bower_components/picturefill/picturefill.js']
        dest: 'js/college_scripts-ck.js'
    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      build:
        src: 'js/college_scripts-ck.js',
        dest: 'js/college_scripts-ck.js'
      buildpresentational:
        src: 'js/presentational-ck.js',
        dest: 'js/presentational-ck.js'


  # @loadNpmTasks 'grunt-contrib-coffee'
  @loadNpmTasks 'grunt-contrib-uglify'
  @loadNpmTasks 'grunt-contrib-compass'
  @loadNpmTasks 'grunt-contrib-jshint'
  @loadNpmTasks 'grunt-contrib-csslint'
  @loadNpmTasks 'grunt-contrib-concat'
  @loadNpmTasks 'grunt-contrib-watch'

  @registerTask 'default', ['compass', 'concat', 'uglify']
  @registerTask 'develop', ['compass', 'jshint', 'concat']
  @registerTask 'package', ['default', 'csslint', 'jshint']

  @event.on 'watch', (action, filepath) =>
    @log.writeln('#{filepath} has #{action}')