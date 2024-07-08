pipeline {
    agent {
        node {
            label 'docker-agent-python'
            }
      }
    triggers {
        pollSCM '*/5 * * * *'
    }
    stages {
        stage('Get Commit Info') {
            steps {
                script {
                    def author = sh(script: "git log -1 --pretty=format:'%an'", returnStdout: true).trim()
                    def message = sh(script: "git log -1 --pretty=format:'%s'", returnStdout: true).trim()
                    def branch = sh(script: 'git rev-parse --abbrev-ref HEAD', returnStdout: true).trim()

                    echo "Author: ${author}"
                    echo "Message: ${message}"
                    echo "Branch: ${branch}"
                }
            }
        }
        stage('Build') {
            steps {
                echo "Building.."
                sh '''
                echo "jenkins pipeline python version: $(python3 -V)"
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                sh '''
                echo "doing test stuff.."
                '''
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh '''
                echo "doing delivery stuff.."
                '''
            }
        }
    }
}
