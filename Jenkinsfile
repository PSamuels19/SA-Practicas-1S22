pipeline {
	agent any
	tools {
		nodejs "NODEJS"
		git "Git 2.20.1"
	}
	environment {

        DOCKERHUB_USER     = credentials('dockerhub_user')
        DOCKERHUB_PASSWORD = credentials('dockerhub_password')

		PUPPET_MASTER_URL  = '34.125.23.65'
		PUPPET_AGENT_URL_DEV = "34.125.80.48"
		PUPPET_AGENT_URL_PROD = "34.125.52.144"

		PUPPET_MASTER_HOME = '/home/jenkins'
		PUPPET_AGENT_HOME = '/home/jenkins'

		PUPPET_MASTER_MANIFEST_DIR = '/etc/puppet/code/environments/production/manifests'
		PUPPET_MASTER_MODULE_MANIFEST_DIR = '/etc/puppet/code/environments/production/modules/mymodule/manifests'
		PUPPET_MASTER_DEV_FILES_DIR = '/etc/puppet/code/environments/production/modules/mymodule/files'
		PUPPET_MASTER_PROD_FILES_DIR = '/etc/puppet/code/environments/production/modules/mymodule/files'

    }
	stages {
		stage("feature/practica6") {
            when {
                branch 'feature/practica6'
            }
            steps {
				dir("Practica_6/") {
					echo 'PRACTICA 6'
					sh 'ls'
				}
            }
        }
        stage("BuildTests") {
			when {
				branch 'develop'
			}
			steps {
				dir("Practica_6/web-page") {
					echo 'BUILD TEST'
					sh 'ls'
					sh 'npm install'
				}
			}
		}
		stage("RunTests") {
			when {
				branch 'develop'
			}
			steps {
				dir("Practica_6/web-page") {
					echo 'RUN TEST'
					sh 'npm run test'
				}
			}
		}
		stage("SanarQube") {
			when {
				branch 'develop'
			}
			steps {
				dir("Practica_6/web_page") {
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
					// sh '''
					// 	docker-compose -f docker-compose-dev.yml down
					// 	docker-compose -f docker-compose-dev.yml build
					// '''
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
					// sh '''
					// 	docker login -u $DOCKERHUB_USER -p $DOCKERHUB_PASSWORD
					// 	docker-compose -f docker-compose-dev.yml push
					// '''
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
					sh '''
						echo "New deployment" >> deployments.txt
						scp deployments.txt jenkins@${PUPPET_AGENT_URL_DEV}:${PUPPET_AGENT_HOME}/
						
						scp docker-compose-dev.yml jenkins@${PUPPET_MASTER_URL}:${PUPPET_MASTER_HOME}/docker-compose.yml
						scp site.pp jenkins@${PUPPET_MASTER_URL}:${PUPPET_MASTER_HOME}/
						scp init.pp jenkins@${PUPPET_MASTER_URL}:${PUPPET_MASTER_HOME}/
						ssh jenkins@${PUPPET_MASTER_URL} sudo mv ${PUPPET_MASTER_HOME}/docker-compose.yml ${PUPPET_MASTER_DEV_FILES_DIR}/
						ssh jenkins@${PUPPET_MASTER_URL} sudo mv ${PUPPET_MASTER_HOME}/site.pp ${PUPPET_MASTER_MANIFEST_DIR}/
						ssh jenkins@${PUPPET_MASTER_URL} sudo mv ${PUPPET_MASTER_HOME}/init.pp ${PUPPET_MASTER_MODULE_MANIFEST_DIR}/
					'''
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
					// sh '''
					// 	echo "New deployment" >> deployments.txt
					// 	scp deployments.txt jenkins@${PUPPET_AGENT_URL_PROD}:${PUPPET_AGENT_HOME}/
					// 	scp docker-compose-prod.yml jenkins@${PUPPET_MASTER_URL}:${PUPPET_MASTER_HOME}/docker-compose.yml
					// 	scp site.pp jenkins@${PUPPET_MASTER_URL}:${PUPPET_MASTER_HOME}/
					// 	scp init.pp jenkins@${PUPPET_MASTER_URL}:${PUPPET_MASTER_HOME}/
					// 	ssh jenkins@${PUPPET_MASTER_URL} sudo mv ${PUPPET_MASTER_HOME}/docker-compose.yml ${PUPPET_MASTER_DEV_FILES_DIR}/
					// 	ssh jenkins@${PUPPET_MASTER_URL} sudo mv ${PUPPET_MASTER_HOME}/site.pp ${PUPPET_MASTER_MANIFEST_DIR}/
					// 	ssh jenkins@${PUPPET_MASTER_URL} sudo mv ${PUPPET_MASTER_HOME}/init.pp ${PUPPET_MASTER_MODULE_MANIFEST_DIR}/
						
					// ''' 
				}
			}
		}
	}
}