pipeline {
  agent {
    node {
      label 'nodelabel'
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