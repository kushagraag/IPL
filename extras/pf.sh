#!/bin/sh
# sleep 10s;kubectl port-forward service/elasticsearch 9200:9200 & 
sleep 10s;kubectl port-forward service/client-service 3000:3000 & 
sleep 10s;kubectl port-forward service/server-service 5000:5000 & 
# sleep 30s;kubectl port-forward service/kibana 5601:5601 &
wait