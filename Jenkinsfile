pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Asegúrate de que estás en el directorio correcto
                    npm install
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    npm run ng -- build
                }
            }
        }

        stage('Lint') {
            steps {
                script {
                    npm run ng -- lint
                }
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
