# CompletedTask
Contains 2 tasks.

Steps for launch:

1. Install the NightWatch js: https://nightwatchjs.org/gettingstarted/installation/. 

2. In the "nightwatch.conf.js" file should be: 

module.exports = {
  "src_folders" : ["test"],
  "page_objects_path" : ["page-objects"],

3. Put: "auth_not_registered_user.js" and "auth_registered_user.js" in created folder "Test".
4. Put "sbzendSettings.js" in "page-objects" in created folder.

5. Command for running tests: npm test.
