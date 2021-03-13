pipeline {
    agent { label "master" }

    stages {
        stage ("build") {
            dir("Practica4") {
                sh "npm install"
            }
        }

        stage ("deploy") {
            dir("Practica4") {
                sh "npm start"
            }
        }
    }
}