pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
              echo "Performing npm build..."
              bat '''npm install'''
            }
        }

        stage('Build') {
            steps {
              bat '''npm run ng -- build'''
            }
        }

        stage('Lint') {
            steps {
              bat '''npm run ng -- lint'''
            }
        }
    }
}
