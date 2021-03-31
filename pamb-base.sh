#!/bin/bash

function commit() {
    local IMAGE=$1
    docker login -u $DOCKER_USER -p $DOCKER_PASS
    docker push $IMAGE.$TIMESTAMP
}

function build_demoecommerce() {
    local IMAGE=3dsinteractive/pam4-demo:pam-demo-web
    docker build -t $IMAGE.$TIMESTAMP .
    commit $IMAGE
}