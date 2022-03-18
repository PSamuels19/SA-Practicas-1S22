pipeline {
	agent any
	tools {
		nodejs 'NODEJS'
		git 'Git 2.20.1'
		terraform 'terraform-1.1.7'
	}
	stages {
		stage("feature") {
            when {
                branch 'feature/practica7'
            }
            steps {
				dir("Practica_7/web-page") {
					echo 'PRACTICA 6'
					sh 'ls'
				}
            }
        }
        stage("BuildTests") {
			when {
				branch 'feature/practica7'
			}
			steps {
				dir("Practica_7/web-page") {
					echo 'BUILD TEST'
					sh 'ls'
					sh 'npm install'
				}
			}
		}
		stage("RunTests") {
			when {
				branch 'feature/practica7'
			}
			steps {
				dir("Practica_7/web-page") {
					echo 'RUN TEST'
					sh 'npm run test'
				}
			}
		}
		stage("Terraform Init") {
			when {
				branch 'feature/practica7'
			}
			steps {
				dir("Practica_7/") {
					echo 'RUN TERRAFORM'
					sh 'ls'
					sh 'terraform init'
				}
			}
		}
		stage("Terraform Apply") {
			when {
				branch 'feature/practica7'
			}
			steps {
				dir("Practica_7/") {
					echo 'RUN TERRAFORM'
					sh 'ls'
					sh 'terraform apply --auto-approve'
				}
			}
		}
		stage("SanarQube") {
			when {
				branch 'develop'
			}
			steps {
				dir("Practica_7/web-page") {
					echo 'RUN SONARQUBE'
				}
			}
		}
		stage("Build") {
			when {
				branch 'develop'
			}
			steps {
				dir("Practica_6/") {
					echo 'BUILD'
					sh '''
					ls
					docker --version
					docker-compose --version
					'''
					sh '''
					docker-compose -f docker-compose-dev.yml down
					docker-compose -f docker-compose-dev.yml build
					'''
				}
			}
		}
		stage("PushBuilds") {
			when {
				branch 'develop'
			}
			steps {
				dir("Practica_6/") {
					echo "PUSH BUILD"
					withCredentials([string(credentialsId: 'dockerhub_password', variable: 'dockerPwd')]) {
						sh "docker login -u macochave -p ${dockerPwd}"
					}
					sh 'docker-compose -f docker-compose-dev.yml push'
				}
			}
		}
		stage("DeployDev") {
			when {
				branch 'develop'
			}
			steps {
				dir("Practica_6/") {
					echo "DEPLOY DEVELOP"
					sh 'echo "New deployment" >> deployments.txt'
					sh 'scp -v -o StrictHostKeyChecking=no deployments.txt marco@${PUPPET_AGENT_URL_DEV}:${PUPPET_AGENT_HOME}/'
					
					sh 'scp -v -o StrictHostKeyChecking=no docker-compose-dev.yml marco@${PUPPET_MASTER_URL}:${PUPPET_MASTER_HOME}/docker-compose.yml'
					sh 'scp -v -o StrictHostKeyChecking=no site.pp marco@${PUPPET_MASTER_URL}:${PUPPET_MASTER_HOME}/'
					sh 'scp -v -o StrictHostKeyChecking=no init.pp marco@${PUPPET_MASTER_URL}:${PUPPET_MASTER_HOME}/'
					sh 'ls'
					sh 'ssh marco@${PUPPET_MASTER_URL} sudo mv ${PUPPET_MASTER_HOME}/docker-compose.yml ${PUPPET_MASTER_DEV_FILES_DIR}/'
					sh 'ssh marco@${PUPPET_MASTER_URL} sudo mv ${PUPPET_MASTER_HOME}/site.pp ${PUPPET_MASTER_MANIFEST_DIR}/'
					sh 'ssh marco@${PUPPET_MASTER_URL} sudo mv ${PUPPET_MASTER_HOME}/init.pp ${PUPPET_MASTER_MODULE_MANIFEST_DIR}/'
				}
			}
		}
		stage("DeployProd") {
			when {
				branch 'master'
			}
			steps {
				dir("Practica_6/") {
					echo 'DEPLOY PRODUCTION'
					sh '''
						echo "New deployment" >> deployments.txt
						scp -v -o StrictHostKeyChecking=no deployments.txt marco@${PUPPET_AGENT_URL_PROD}:${PUPPET_AGENT_HOME}/
						scp -v -o StrictHostKeyChecking=no docker-compose-prod.yml marco@${PUPPET_MASTER_URL}:${PUPPET_MASTER_HOME}/
						scp -v -o StrictHostKeyChecking=no site.pp marco@${PUPPET_MASTER_URL}:${PUPPET_MASTER_HOME}/
						scp -v -o StrictHostKeyChecking=no init.pp marco@${PUPPET_MASTER_URL}:${PUPPET_MASTER_HOME}/
						ssh marco@${PUPPET_MASTER_URL} sudo mv ${PUPPET_MASTER_HOME}/docker-compose-dev.yml ${PUPPET_MASTER_DEV_FILES_DIR}/
						ssh marco@${PUPPET_MASTER_URL} sudo mv ${PUPPET_MASTER_HOME}/site.pp ${PUPPET_MASTER_MANIFEST_DIR}/
						ssh marco@${PUPPET_MASTER_URL} sudo mv ${PUPPET_MASTER_HOME}/init.pp ${PUPPET_MASTER_MODULE_MANIFEST_DIR}/
						
					''' 
				}
			}
		}
	}
}