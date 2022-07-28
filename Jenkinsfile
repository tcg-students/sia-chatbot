pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                git branch: 'development', credentialsId: 'tcg-sia-chatbot', url: 'https://github.com/tcg-students/sia-chatbot'
               // sh "cd frontend && sudo npm install"
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
