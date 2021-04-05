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
                    sh "npm test"
                }
            }
        }
        stage ("SonarQube analysis") {
            environment {
                scannerHome = tool "SonarQubeScanner"
            }
            steps {
                withSonarQubeEnv("Sonarqube") {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        // token sonar 3c6bcf125bd3beba7eb392a822f1f0f088a9b7db
        // esto estoy usando bc3005c8d5958527427a2741a46923b9a9ccb346
        stage ("Quality gate") {
            steps {
                waitForQualityGate abortPipeline: true
            }
        }
        /*
        stage ("artifact") {
            steps {
                dir("Practica4") {
                    sh "zip zipFile: art.zip archive:trhe dir:."
                }
            }
        }
        */
    }
    /*
    post {
        always {
            archiveArtifacts artifacts: "Practica4", onlyIfSuccessful: true
        }
    }
    */
}