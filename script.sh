#!/bin/sh

npm install -g yo
npm install -g generator-angular  # install generator
yo angular                        # scaffold out a AngularJS project
bower install angular-ui          # install a dependency for your project from Bower
grunt test                        # test your app
grunt server                      # preview your app (formerly `grunt server`)
grunt                             # build the application for deployment

