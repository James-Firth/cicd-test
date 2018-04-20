pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage("build") {
            steps {
                echo "Hello. Building branch: ${env.BRANCH_NAME}"
            }
        }
    }
}
