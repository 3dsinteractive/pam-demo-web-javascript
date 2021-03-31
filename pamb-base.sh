#!/bin/bash

function build() {
    local IMAGE=pam4-demo
    docker login -u $DOCKER_USER -p $DOCKER_PASS
    docker build \
    -t 3dsinteractive/$IMAGE:$NAMESPACE-$APP_VERSION.$TIMESTAMP .
    docker push 3dsinteractive/$IMAGE:$NAMESPACE-$APP_VERSION.$TIMESTAMP
}