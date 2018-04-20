pipeline {
  agent any
  stages {
    stage('build') {
      agent any
      steps {
        echo 'HELLO WORLD'
        git(poll: true, url: 'https://github.com/James-Firth/cicd-test', branch: 'master')
        echo "Hello. Building branch: ${env.BRANCH_NAME}"
      }
    }
  }
}