pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
              echo "npm install"
            }
        }

        stage('Build') {
            steps {
              echo "npm run ng -- build"
            }
        }

        stage('Lint') {
            steps {
              echo "npm run ng -- lint"
            }
        }
    }
}
