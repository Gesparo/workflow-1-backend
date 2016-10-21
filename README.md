# Выпускной проект №1 Мельника Максима

Stack:
 - Gulp 4.0
 
Getting started:

1. git clone https://github.com/Gesparo/workflow-1.git workflow-1
2. cd workflow-1
3. npm install bower -g // instal bower if not exist
4. npm install gulpjs/gulp-cli -g  // Install the latest Gulp CLI tools globally
5. npm install // install dependenses
6. gulp // to start gulp collector and run watchers
7. gulp sftp to push new site on production // **Don't forget to add login/password in gulp/tasts/sftp.js**

## Changes
1. Added png sprite generator $ gulp sprite:png    
2. Added font copier  $ gulp copy:fonts