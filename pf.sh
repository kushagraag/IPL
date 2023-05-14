#!/bin/sh
sleep 10s;kubectl port-forward service/elasticsearch 9200:9200 & 
sleep 10s;kubectl port-forward client 3000:3000 & 
sleep 10s;kubectl port-forward server 5000:5000 & 
sleep 30s;kubectl port-forward service/kibana 5601:5601 &
wait