#!/bin/bash
version=$1
dir=$2

if [ "$version" = "" ]; then
    echo -e "Must specify image version"
    exit 1
fi

if [ "$dir" = "" ]; then
    echo -e "Must specify build directory"
    exit 1
fi

docker build -t 3dsinteractive/pam4-demo:$version $dir
docker push 3dsinteractive/pam4-demo:$version
