#!/bin/sh
kubectl apply -f ./elasticsearch-deployment.yml
kubectl apply -f ./elasticsearch-service.yml
kubectl apply -f ./kibana-deployment.yml
kubectl apply -f ./server-deployment.yml
kubectl apply -f ./client-deployment.yml
kubectl apply -f ./server-service.yml
kubectl apply -f ./client-service.yml


