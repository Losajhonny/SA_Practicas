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
        stage ("artifact") {
            steps {
                dir("Practica4") {
                    sh "zip zipFile: art.zip archive:trhe dir:."
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: "Practica4", onlyIfSuccessful: true
        }
    }
}