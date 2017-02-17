#!/usr/bin/env bash

curl https://s3.amazonaws.com/test-vicedev/wordpress.tar.gz | tar -xf -

cp sources/* ./
