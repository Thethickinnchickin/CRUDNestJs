<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

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

This project is a showcase of my technical skills in cloud-native development, built using the [Nest](https://github.com/nestjs/nest) framework. It demonstrates how to set up a full-stack application with Kubernetes, NestJS, MongoDB, and Docker, deployed on **IBM Cloud Kubernetes Service**. The project is designed for job applications, allowing potential employers to evaluate my expertise in containerization and cloud deployment.

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

## Project setup

```bash
$ npm install
