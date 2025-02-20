pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
              "npm install"
            }
        }

        stage('Build') {
            steps {
              "npm run ng -- build"
            }
        }

        stage('Lint') {
            steps {
              "npm run ng -- lint"
            }
        }
    }

    post {
        always {
            // Puedes agregar acciones a realizar siempre, como limpiar
            cleanWs()
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
