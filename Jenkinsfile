pipeline {
  agent {
    node {
      label '6.10.3'
    }

  }
  stages {
    stage('build') {
      steps {
        echo "Hello. Building branch: ${env.BRANCH_NAME}"
      }
    }
  }
}