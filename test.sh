source ./utils/shellScripting/constants/colours.sh
source ./utils/shellScripting/constants/constants.sh
source ./utils/shellScripting/constants/versioning.sh
source ./utils/shellScripting/funcs/helpers.sh
source ./utils/shellScripting/funcs/contexts.sh
source ./utils/shellScripting/funcs/client.sh
source ./utils/shellScripting/funcs/api.sh
source ./utils/shellScripting/funcs/deploy.sh
source ./utils/shellScripting/funcs/initialSetup.sh
source ./utils/shellScripting/funcs/db_backup_local.sh

increment_version() {
  local version=$1
  local type=$2
  IFS='.' read -r major minor patch <<< "$version"

  case $type in
    major)
      major=$((major + 1))
      minor=0
      patch=0
      ;;
    minor)
      minor=$((minor + 1))
      patch=0
      ;;
    patch)
      patch=$((patch + 1))
      ;;
    none)
      echo "$version"
      return 0
      ;;
    *)
      echo "Invalid version increment type: $type"
      return 1
      ;;
  esac

  echo "$major.$minor.$patch"
}

prompt_for_version_bump() {
    local component=$1
    local bump
  
    bump=$(readData "What is the build for $component? (patch|minor|major|none)")
    if [[ "$bump" =~ ^(patch|minor|major|none)$ ]]; then
      echo "$bump"
      return 0
    else
      prompt_for_version_bump $component
    fi
  
}

update_constants_file() {
    local nginx_ver=$1
    local client_ver=$2
    local api_ver=$3
    cat << EOF > ./utils/shellScripting/constants/versioning.sh
NGINX_VERSION="$nginx_ver"
CLIENT_VERSION="$client_ver"
API_VERSION="$api_ver"
EOF
}

deployToProdWithSwarm() {
    # Prompt for version increments
    local nginxBump=$(prompt_for_version_bump "nginx")
    local clientBump=$(prompt_for_version_bump "client")
    local apiBump=$(prompt_for_version_bump "API")

    # Update versions in constants.sh
    local ninx_ver=$(increment_version "$NGINX_VERSION" "$nginxBump")
    local client_ver=$(increment_version "$CLIENT_VERSION" "$clientBump")
    local api_ver=$(increment_version "$API_VERSION" "$apiBump")

    update_constants_file "$ninx_ver" "$client_ver" "$api_ver"
}

deployToProdWithSwarm