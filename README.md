# OpenDaylight Toolkit

Quick HowTo
-----------

1 Install the archetype-app-simple under main/archetypes [do mvn clean install within each archetype directory]
            Note: more archetypes will be supported in the near term 

2 Go to root and generate an app using one of the local archetypes you just installed [mvn archetype:generate -DarchetypeCatalog=local]

            groupId: org.bar.foo <or any you wish> 
            artifactId: simple <or any you wish> 
            version: <press enter, default> 
            package: <press enter, default> 

3 [optional] Install the necessary web bower components, under directories web/src/main/resources/js and web/src/main/resources/css issue bower install
            Note: you may need to install bower on your system using npm -g install bower 
            Setting up Node.js and npm on Mac OSX 

4 [important] Install the base controller, within root directory (where common, main, web are located) issue mvn clean install
            Note: This may take a while if you're on a new system 

5 [important] Go into common/ and issue mvn clean install
            Note: This is a temporary workaround to bug https://github.com/opendaylight-toolkit/opendaylight-toolkit/issues/6 

6 Then go into one of the apps you just generated and issue mvn clean install to install that bundle 7 Then start the controller under main/target/main-osgipackage/opendaylight and ./run.sh -console 8 [optional] If you installed the bower components, you can access the toolkit web UI at http://localhost:8080


Troubleshoot
------------

Very rough workaround, if you're seeing a similar problem regarding Maven

[ERROR] Failed to execute goal on project app: Could not resolve dependencies for project org.opendaylight.phoenix:app:bundle:0.0.1-SNAPSHOT: Failed to collect dependencies for [org.opendaylight.phoenix:web:jar:0.0.1-SNAPSHOT (compile), org.opendaylight.controller:sal:jar:0.8.1-SNAPSHOT (compile), org.springframework:spring-web:jar:4.0.2.RELEASE (compile)]: Failed to read artifact descriptor for org.opendaylight.phoenix:web:jar:0.0.1-SNAPSHOT: Failure to find org.opendaylight.phoenix:common:pom:0.0.1-SNAPSHOT in http://nexus.opendaylight.org/content/repositories/opendaylight.snapshot/ was cached in the local repository, resolution will not be reattempted until the update interval of opendaylight-snapshot has elapsed or updates are forced -> [Help 1]

Try 'mvn clean install -U' within each individual directory common/, main/, web/, etc 


[![Build Status](https://travis-ci.org/opendaylight-toolkit/opendaylight-toolkit.svg?branch=master)](https://travis-ci.org/opendaylight-toolkit/opendaylight-toolkit)

![alt text](http://media.playdota.com/items/121/icon.jpg "Mekansm")
