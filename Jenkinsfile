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
        stage ("test") {
            steps {
                dir("Practica4") {
                    sh "echo test"
                }
            }
        }
        stage ("deploy") {
            steps {
                dir("Practica4") {
                    sh "echo deploy"
                }
            }
        }
        stage ("Artefact") {
            steps {
                sh "copy . ./build"
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: "./build"
            onlyIfSuccessful: true
        }
    }
}