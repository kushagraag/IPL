# Project Title

IPL Website

## Description

This project is a website dedicated to the Indian Premier League (IPL). It provides live scores, point tables, schedules, and player statistics for IPL matches. Users can register and log in to the website to view available matches and book seats in the venue. The data is fetched from the ESPN website using web scraping, and it is not stored anywhere. MongoDB is used to store user details.

## Tech Specs

- Frontend: ReactJS
- Backend: NodeJS
- Database: MongoDB
- Automation: Ansible
- Pipeline: Jenkins
- Containerization: Docker
- Orchestration of containers: Kubernetes (Minikube)
- Logging: Elastic Search and Kibana

## Features

- View live scores
- View point table, match schedule, and player statistics
- Login and register, book tickets for matches
- View live logs on the ELK stack (Elastic Search, Logstash, Kibana)

## Installation

Make sure you have the following dependencies installed on an Ubuntu-based operating system:

- Docker
- Docker Compose
- Minikube
- Kubectl
- Jenkins
- Node.js v16.x.x
- Ansible

## Running the Project

### Locally

1. Start the server by running `npx nodemon` or `npm start`. The server runs on localhost:5000 by default.
2. By default, API calls are made to localhost:5000/pointstable, /schedule, etc.
3. Run the client with `npm start`. The client runs on localhost:3000 by default.
4. After following the above steps, the server should fetch data from ESPN and display it on the client (e.g., live scores, statistics, point table, schedule).
5. Logging:
   - To run Elastic Search and Kibana together, navigate to the `extras` directory and run `docker-compose up -d`. Wait for some time as Kibana may take around 1 minute to start. Adjust the timeline in the Kibana dashboard to see the live stream of data.
   - Inside the server folder, you will find a `combined.log` file that contains the same logs sent to Elastic Search and forwarded to Kibana.

### Using Pipeline / Automation

1. Ensure that Ansible is installed and configured inside Jenkins. Also, make sure Minikube is running.
2. Run Jenkins on the default port 8080. Create a new pipeline project and paste the script provided in the `/extras/pipeline_testing.txt` file.
3. Once the pipeline is completed, four new pods will be created in Minikube: one for the client, one for the server, one for Elastic Search, and one for Kibana.
4. To see the running project on your local system, you need to forward ports from Minikube. Use the bash script provided in `/extras/pf.sh` to enable port forwarding for the server and client pods. Refer to the script to forward ports for Elastic Search and Kibana. Note that while in Minikube, the server cannot send data to Elastic Search, so it has been omitted from port forwarding. Feel free to experiment and raise a PR if it works.
5. After port forwarding, you can access the client and server at `localhost:3000` and `localhost:5000`, respectively.

## Default Ports

- Server: `localhost:5000`
- Client: `localhost:3000`
- Elastic Search: `localhost:9200`
- Kibana: `localhost:5601`


## Extra info

- `/yml_files/kube.sh` is a bash file to run all minikube containers using kubectl apply command at once either in ansible playbook or in localsystem
- `./server-client-deployment.yml` can be run with kubectl to run inly client and server pods 
- `/Screenshot` directory contains all of project screenshots
- Default user login is `kohli@gmail.com` and pass `1234` and admin is `Deepak.Deepak@iiitb.ac.in` same pass as above.
- Client on port 3000 may persist for few seconds after you kill process and logs may be shown for same