#!/bin/bash

# install latest version node.js, if not found node command
which node > /dev/null 2>&1 \
&& curl -L https://git.io/n-install | bash
n latest

# install bower in global, which is frontend package manager
npm i -g bower

# install some dependencies
npm install \
&& bower install
