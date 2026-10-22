
# Task 01: Automate Code Deployment Using CI/CD Pipeline

## Project Overview

This project demonstrates how to automate a CI/CD pipeline using GitHub Actions, Node.js, and Docker.

The pipeline runs automated tests, builds a Docker image, and publishes the image to Docker Hub when code is pushed to the `main` branch.

## Technologies Used

- Node.js
- GitHub
- GitHub Actions
- Docker
- Docker Hub

## Project Structure

- `index.js` — Node.js application.
- `index.test.js` — Automated tests.
- `Dockerfile` — Instructions to build the Docker image.
- `package.json` — Project configuration and scripts.
- `.github/workflows/ci-cd.yml` — CI/CD workflow.

## CI/CD Pipeline

1. Checkout the repository.
2. Set up Node.js.
3. Install dependencies.
4. Run automated tests.
5. Build the Docker image.
6. Push the image to Docker Hub.

The Docker build and push job runs only after the test job succeeds.

## Docker Hub Image

Image: `anayag/task-01-cicd-pipeline:latest`

[View Docker Hub Image](https://hub.docker.com/r/anayag/task-01-cicd-pipeline/tags)

## Run Locally

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm start
```

Run automated tests:

```bash
npm test
```

The application listens on port `3000`.

## Author

Ana Yancy Aguilar Prado
