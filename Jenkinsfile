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

        stage('Start Server') {
            steps {
              script {
                  // Iniciar el servidor de Angular en segundo plano
                  bat 'npm run ng -- serve - o'
                  // Esperar unos segundos para asegurarse de que el servidor esté en funcionamiento
                  sleep(10) // Ajusta el tiempo según sea necesario
              }
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