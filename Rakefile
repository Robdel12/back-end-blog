# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Backend::Application.load_tasks

task :deploy, :env, :remote do |t, args|
  sh "git checkout #{args[:env]}"
  sh 'git merge master -m "Merging for deployment"'
  sh './build.sh'

  sh 'git add -A'
  sh 'git commit -m "Compile for deployment"'

  sh "git push #{args[:remote]} head:master"
end
