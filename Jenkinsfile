pipeline {
     agent any
     stages {
        stage("Build") {
            steps { 
                 echo "Build!!"
13
                 sh "ls -al"
               sh "cd frontend && sudo npm install"
               // sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                 echo "deploy!!"
                 sh "ls -al"
                //sh "sudo rm -rf /var/www/html/sia-chatbot"
                //sh "sudo cp -r ${WORKSPACE}/build/ /var/www/html/sia-chatbot/"
            }
        }
    }
}
