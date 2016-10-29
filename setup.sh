#!/bin/bash

# install latest version node.js, if not found node command
type node > /dev/null 2>&1 || curl -L https://git.io/n-install | bash -s -- -y
export N_PREFIX="$HOME/n"; [[ :$PATH: == *":$N_PREFIX/bin:"* ]] || PATH+=":$N_PREFIX/bin"

# install bower, which is frontend package manager
npm i -g bower

# install some dependencies
npm install
bower install

# make release resources
npm run release
