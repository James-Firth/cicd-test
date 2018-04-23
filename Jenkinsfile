pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo "Hello. Building branch: ${env.BRANCH_NAME}"
        nodejs(nodeJSInstallationName: 'Default') {
            sh 'npm --version'
        }
      }
    }
  }
}
