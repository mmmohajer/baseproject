deployToStagingWithCompose() {
getConfirmation "Are you willing to push it to github?"
local pushToGithub=$?

getConfirmation "Are you willing to build client folder in your local?"
local buildClientInLocal=$?

getConfirmation "Are you willing to deploy all new changes in the staging server?"
local mustBuildNewChangesInServer=$?

if [ $buildClientInLocal -eq 0 ]
then
    buildClient
fi
if [ $pushToGithub -eq 0 ]
then
    local commitMsg=$(readData "What is your commit message to git?")
    git add .
    git commit -m "$commitMsg"
    git push origin staging
fi

if [ $mustBuildNewChangesInServer -eq 0 ]
then
local script=$( cat << EOF
cd /var/www/app;
git pull origin staging;
docker container rm -f $(docker container ls -a -q)
docker image rm -f $(docker image ls -a -q)
docker-compose -f docker-compose-prod-ssl.yml down
sudo systemctl start nginx
docker-compose -f docker-compose-prod-ssl.yml build && sudo systemctl stop nginx && docker-compose -f docker-compose-prod-ssl.yml up -d && docker volume prune -f && docker builder prune -a -f && docker image prune -a -f && docker container prune -f && docker network prune -f
EOF
)
ssh $STAGING_SERVER_ALIAS "$script" 
fi

if [ $mustBuildNewChangesInServer -ne 0 ]
then
local script=$( cat << EOF
cd /var/www/app;
git pull origin staging;
EOF
)
ssh $STAGING_SERVER_ALIAS "$script" 
fi
}

deployToProdWithCompose() {
getConfirmation "Are you willing to push it to github?"
local pushToGithub=$?

getConfirmation "Are you willing to build client folder in your local?"
local buildClientInLocal=$?

getConfirmation "Are you willing to deploy all new changes in the prod server?"
local mustBuildNewChangesInServer=$?

if [ $buildClientInLocal -eq 0 ]
then
    buildClient
fi
if [ $pushToGithub -eq 0 ]
then
    local commitMsg=$(readData "What is your commit message to git?")
    git add .
    git commit -m "$commitMsg"
    git push origin master
fi

if [ $mustBuildNewChangesInServer -eq 0 ]
then
local script=$( cat << EOF
cd /var/www/app;
git pull origin master;
docker container rm -f $(docker container ls -a -q)
docker image rm -f $(docker image ls -a -q)
docker-compose -f docker-compose-prod-ssl.yml down
sudo systemctl start nginx
docker-compose -f docker-compose-prod-ssl.yml build && sudo systemctl stop nginx && docker-compose -f docker-compose-prod-ssl.yml up -d && docker volume prune -f && docker builder prune -a -f && docker image prune -a -f && docker container prune -f && docker network prune -f
EOF
)
ssh $PROD_SERVER_ALIAS "$script" 
fi

if [ $mustBuildNewChangesInServer -ne 0 ]
then
local script=$( cat << EOF
cd /var/www/app;
git pull origin master;
EOF
)
ssh $PROD_SERVER_ALIAS "$script" 
fi
}

deployToStagingWithSwarm() {
getConfirmation "Are you willing to push it to github?"
local pushToGithub=$?

getConfirmation "Are you willing to build client folder in your local?"
local buildClientInLocal=$?

getConfirmation "Are you willing to deploy all new changes in the staging server?"
local mustBuildNewChangesInServer=$?

if [ $buildClientInLocal -eq 0 ]
then
    buildClient
fi
if [ $pushToGithub -eq 0 ]
then
    local commitMsg=$(readData "What is your commit message to git?")
    git add .
    git commit -m "$commitMsg"
    git push origin staging
fi

if [ $mustBuildNewChangesInServer -eq 0 ]
then
local script=$( cat << EOF
cd /var/www/app;
git pull origin staging;
docker build -t $NGINX_REPO:$NGINX_VERSION -f nginx/Dockerfile.swarm ./nginx && docker build -t $CLIENT_REPO:$CLIENT_VERSION -f client/Dockerfile ./client && docker build -t $API_REPO:$API_VERSION -f api/Dockerfile ./api && docker push $NGINX_REPO:$NGINX_VERSION && docker push $CLIENT_REPO:$CLIENT_VERSION && docker push $API_REPO:$API_VERSION && docker stack deploy -c docker-swarm.yml app && docker system prune -a --volumes -f
EOF
)
ssh $STAGING_SERVER_ALIAS "$script" 
fi

if [ $mustBuildNewChangesInServer -ne 0 ]
then
local script=$( cat << EOF
cd /var/www/app;
git pull origin staging;
EOF
)
ssh $STAGING_SERVER_ALIAS "$script" 
fi
}

deployToProdWithSwarm() {
getConfirmation "Are you willing to push it to github?"
local pushToGithub=$?

getConfirmation "Are you willing to build client folder in your local?"
local buildClientInLocal=$?

getConfirmation "Are you willing to deploy all new changes in the staging server?"
local mustBuildNewChangesInServer=$?

if [ $buildClientInLocal -eq 0 ]
then
    buildClient
fi
if [ $pushToGithub -eq 0 ]
then
    local commitMsg=$(readData "What is your commit message to git?")
    git add .
    git commit -m "$commitMsg"
    git push origin master
fi

if [ $mustBuildNewChangesInServer -eq 0 ]
then
local script=$( cat << EOF
cd /var/www/app;
git pull origin master;
docker build -t $NGINX_REPO:$NGINX_VERSION -f nginx/Dockerfile.swarm ./nginx && docker build -t $CLIENT_REPO:$CLIENT_VERSION -f client/Dockerfile ./client && docker build -t $API_REPO:$API_VERSION -f api/Dockerfile ./api && docker push $NGINX_REPO:$NGINX_VERSION && docker push $CLIENT_REPO:$CLIENT_VERSION && docker push $API_REPO:$API_VERSION && docker stack deploy -c docker-swarm.yml app && docker system prune -a --volumes -f
EOF
)
ssh $STAGING_SERVER_ALIAS "$script" 
fi

if [ $mustBuildNewChangesInServer -ne 0 ]
then
local script=$( cat << EOF
cd /var/www/app;
git pull origin master;
EOF
)
ssh $STAGING_SERVER_ALIAS "$script" 
fi
}

deployToStaging() {
  local selected
  echo -en "${I_GREEN}"
  cat << EOF
1. Using Docker Swarm.
2. Using Docker Compose.
EOF
  echo -en "${DEFAULT_COLOR}"
  read -p "Choose an option: " selected
  local deploy_options=(1 2)
  
  if [[ " ${deploy_options[@]} " =~ " ${selected} " ]]; then
    if [ "$selected" -eq 1 ]; then
      deployToStagingWithSwarm
    elif [ "$selected" -eq 2 ]; then
      deployToStagingWithCompose
    fi
  else
    echo "Invalid option, please choose again."
    deployToStaging
  fi
}

deployToProd() {
  local selected
  echo -en "${I_GREEN}"
  cat << EOF
1. Using Docker Swarm.
2. Using Docker Compose.
EOF
  echo -en "${DEFAULT_COLOR}"
  read -p "Choose an option: " selected
  local deploy_options=(1 2)
  
  if [[ " ${deploy_options[@]} " =~ " ${selected} " ]]; then
    if [ "$selected" -eq 1 ]; then
      deployToProdWithSwarm
    elif [ "$selected" -eq 2 ]; then
      deployToProdWithCompose
    fi
  else
    echo "Invalid option, please choose again."
    deployToProd
  fi
}