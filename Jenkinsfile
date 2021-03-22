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
            def scannerHome = tool "Sonar"
            steps {
                withSonarQubeEnv("Sonarqube") {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        // token sonar 3c6bcf125bd3beba7eb392a822f1f0f088a9b7db
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