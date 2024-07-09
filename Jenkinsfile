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
                    def branch = env.GIT_BRANCH

                    echo "Author: ${author}"
                    echo "Message: ${message}"
                    echo "Branch: ${branch}"

                    def wrongBranch = false 
                    if (author == 'wfckl789' && branch == 'main') {
                        error("${author} shouldn't commit to brach: ${branch}!")
                    }
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

    post {
        failure {
            script {
                emailext(
                    subject: "Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL}) - FAILURE",
                    body: """<p>Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL}) failed.</p>
                             <p>Reason: ${env.FAILURE_REASON}</p>""",
                    mimeType: 'text/html',
                    to: "${env.RECIPIENTS}"
                )
            }
        }
    }
}
