#!/bin/bash

function commit() {
    local IMAGE=$1
    docker login -u $DOCKER_USER -p $DOCKER_PASS
    docker push $IMAGE.$TIMESTAMP
}

function build_demoecommerce() {
    local IMAGE=3dsinteractive/pam4-demo:ecommerce-stg-1.0
    docker build -t $IMAGE.$TIMESTAMP e-commerce/
    commit $IMAGE
}
