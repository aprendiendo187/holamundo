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

        stage('Test') {
            steps {
              bat '''npm run ng -- test'''
            }
        }

        stage('Lint') {
            steps {
              bat '''npm run ng -- lint'''
            }
        }
        stage('Cypress') {
            steps {
              bat '''npx cypress run'''
            }
        }
    }
    post {
      always {
          // Puedes agregar acciones a realizar siempre, como limpiar
          echo "cleanWs()"
      }
      success {
          // Acciones a realizar si el pipeline fue exitoso
          echo 'Pipeline completed successfully!'
      }
      failure {
          // Acciones a realizar si el pipeline falló
          echo 'Pipeline failed!'
      }
    }
}