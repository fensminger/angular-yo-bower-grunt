#!/bin/sh

npm install -g yo
npm install -g generator-angular  # install generator
yo angular                        # scaffold out a AngularJS project
bower install angular-ui          # install a dependency for your project from Bower
grunt test                        # test your app
grunt server                      # preview your app (formerly `grunt server`)
grunt                             # build the application for deployment

# Après installation de maven
cd /Users/fer/Documents/gitrepo/SID/demo-grunt/src/main/
mkdir node
cd node
yo angular

# transformation de grunt pour utiliser less
npm install -g less
npm install -g grunt-contrib-less
npm install grunt-include-bootstrap --save-dev

npm install -g connect


# installation de gulp et de quelques plugins
npm install -g gulp
npm install --save-dev gulp gulp-util
npm install gulp-ngmin
npm install gulp-uglify
npm install gulp-clean
npm install gulp-replace
npm install gulp-styl
npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-clean gulp-notify gulp-rename gulp-livereload tiny-lr gulp-cache --save-dev
