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
        stage('Cypress') {
            steps {
              bat '''npm run cypress:open'''
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
