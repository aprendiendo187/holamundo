pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
              echo "Performing npm build..."
              sh "npm install"
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
