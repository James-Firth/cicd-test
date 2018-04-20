pipeline {
  agent any
  stages {
    stage('build') {
      agent any
      steps {
        echo "Hello. Building branch: ${env.BRANCH_NAME}"
        sh '''

ls; npm install; echo "Finished script"'''
      }
    }
  }
}