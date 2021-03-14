pipeline {
    agent any

    tools { nodejs "node" }

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