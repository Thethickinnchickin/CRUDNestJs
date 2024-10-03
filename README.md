<p align="center">
    <a href="http://nestjs.com/" target="blank">
        <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
    </a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

<p align="center">
    <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
    <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
    <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
    <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
    <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
    <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
    <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
    <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
    <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Description

This project is a showcase of my technical skills in cloud-native development, built using the 
[Nest](https://github.com/nestjs/nest) framework. It demonstrates how to set up a full-stack application with 
Kubernetes, NestJS, MongoDB, and Docker, deployed on **IBM Cloud Kubernetes Service**. The project is designed for job applications, allowing potential employers to evaluate my expertise in containerization and cloud deployment.

## Key Technologies

- **NestJS**: A progressive Node.js framework for building scalable server-side applications.
- **MongoDB**: A NoSQL database to manage application data.
- **Docker**: Containerization platform to build and deploy consistent environments.
- **Kubernetes**: Orchestration system to manage deployments and services.
- **IBM Cloud Kubernetes Service**: Cloud-based Kubernetes platform for hosting the project.
- **Nginx Ingress**: For routing HTTP traffic to the application.

## Kubernetes Overview

This project is deployed on a Kubernetes cluster hosted on IBM Cloud. The following components are used:
- **Deployments**: The NestJS app and MongoDB run in separate pods with scalability options.
- **Services**: Kubernetes `ClusterIP` services expose the application and database within the cluster.
- **Ingress**: Nginx Ingress routes public traffic to the services securely.
- **SSL/TLS**: Configured via Ingress to ensure encrypted communication.

For a visual representation, check out the architecture diagram [here](#link-to-diagram).

## Project Setup

1. Install the dependencies.
2. Compile and run the project:
   - Development mode
   - Watch mode
   - Production mode

3. Run tests:
   - Unit tests
   - End-to-end tests
   - Test coverage

## Running the Application in Kubernetes

To deploy the application using Kubernetes:

1. Build the Docker image.
2. Push the image to DockerHub.
3. Create the Kubernetes deployment.
4. Set up services.
5. Apply Ingress for traffic routing.

Now your NestJS application will be accessible via the Ingress route you've defined.

## Resources

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- Check out our [official video courses](https://www.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://nestjs.dev/tools/devtools).
- Need help with your project? Check out our [official enterprise support](https://nestjs.com/support).
- Follow us on [Twitter](https://twitter.com/nestframework) and [LinkedIn](https://www.linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our [official Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open-source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please read more [here](https://opencollective.com/nest#backer).
