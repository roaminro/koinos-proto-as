#!/bin/bash

COMMIT_HASH=`git rev-parse --short HEAD`

if [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
   cd ~

   git config --global user.email ${GITHUB_USER_EMAIL}
   git config --global user.name  ${GITHUB_USER_NAME}

   git clone https://${GITHUB_USER_TOKEN}@github.com/koinos/koinos-sdk-as.git

   pushd koinos-ask-as

   mkdir -p assembly/koinos-proto-as/koinos
   mkdir -p assembly/koinos-proto-as/google
   rsync -rvm --include "*.ts" --include "*/" --exclude "*" --delete $TRAVIS_BUILD_DIR/koinos/ ./assembly/koinos-proto-as/koinos/
   rsync -rvm --include "*.ts" --include "*/" --exclude "*" --delete $TRAVIS_BUILD_DIR/google/ ./assembly/koinos-proto-as/google/

   git add .

   if ! git diff --cached --quiet --exit-code; then
      if [ "$TRAVIS_BRANCH" != "master" ]; then
         git checkout -b $TRAVIS_BRANCH
      fi

      git commit -m "Update for koinos-proto-as commit $COMMIT_HASH"
      git push --force https://${GITHUB_USER_TOKEN}@github.com/koinos/koinos-proto-cpp.git $TRAVIS_BRANCH
   fi

   popd
fi
