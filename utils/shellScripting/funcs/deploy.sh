deployToStaging() {
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
git pull origin master;
EOF
)
ssh $STAGING_SERVER_ALIAS "$script" 
fi
}

deployToProd() {
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