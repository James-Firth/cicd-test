pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo "Hello. Building branch: ${env.BRANCH_NAME}"
        nodejs(nodeJSInstallationName: 'Default') {
            sh '''
            export PATH=/sbin:/usr/sbin:/usr/bin:/usr/local/bin;
            npm --version
            '''
        }
      }
    }
  }
}
