pipeline {
     agent any
     stages {
        stage("Build") {
            steps { 
                 echo "Build!!"
                 sh "ls -al"
                 sh "cd frontend && rm -rf package-lock.json yarn-lock" 
                 sh "cd frontend && sudo npm install"
                 sh "cd frontend && sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                 echo "deploy!!"
                 sh "ls -al"
                //sh "sudo rm -rf /var/www/html/sia-chatbot"
                sh "cp -r ${WORKSPACE}/frontend/build ${WORKSPACE}/backend/public"
            }
        }
    }
}
