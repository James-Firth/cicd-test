pipeline {
  agent any
  stages {
    stage('build') {
      agent any
      steps {
        echo "Hello. Building branch: ${env.BRANCH_NAME}"
        nodejs('Default') {
            // some block
            sh 'npm --version'
        }
      }
    }
  }
}
