pipeline {
    agent any

    stages {
        stage ("build") {
            steps {
                dir("Practica4") {
                    sh "echo install"
                }
            }
        }

        stage ("deploy") {
            steps {
                dir("Practica4") {
                    sh "echo start"
                }
            }
        }
    }
}