#!/bin/sh
sleep 10s;kubectl port-forward client 3000:3000 & 
sleep 10s;kubectl port-forward server 5000:5000 & 
wait