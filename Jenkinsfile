pipeline {
    agent any

    stages {
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