pipeline {
     agent any
     stages {
        stage("Build Frontend") {
            steps { 
                 echo "Build Frontend!!"
                 sh "cd frontend && rm -rf package-lock.json yarn-lock" 
                 sh "cd frontend && sudo npm install"
                 sh "cd frontend && sudo npm run build"
            }
        }
          stage("Build Backend") {
            steps { 
                 echo "Build Backend!!"
                 sh "cd backend && rm -rf package-lock.json yarn-lock" 
                 sh "cd backend && sudo npm install
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
