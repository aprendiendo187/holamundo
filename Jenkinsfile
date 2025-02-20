pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                    sh "npm install"
                
            }
        }

        stage('Build') {
            steps {
                
                    sh "npm run ng -- build"
                
            }
        }

        stage('Lint') {
            steps {
                
                    sh "npm run ng -- lint"
                
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
