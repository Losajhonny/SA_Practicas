pipeline {
    agent { label "master" }

    stages {
        stage ("prepare") {
            steps {
                sh "sudo apt install nodejs"
                sh "sudo apt install npm"
            }
        }
        stage ("build") {
            steps {
                    dir("Practica4") {
                    sh "npm install"
                }
            }
        }

        stage ("deploy") {
            steps {
                    dir("Practica4") {
                    sh "npm start"
                }
            }
        }
    }
}