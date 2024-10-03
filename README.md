<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project README</title>
</head>
<body>
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

    <h2>Description</h2>
    <p>
        This project is a showcase of my technical skills in cloud-native development, built using the 
        <a href="https://github.com/nestjs/nest">Nest</a> framework. It demonstrates how to set up a full-stack application with 
        Kubernetes, NestJS, MongoDB, and Docker, deployed on <strong>IBM Cloud Kubernetes Service</strong>. The project is designed for job applications, allowing potential employers to evaluate my expertise in containerization and cloud deployment.
    </p>

    <h2>Key Technologies</h2>
    <ul>
        <li><strong>NestJS</strong>: A progressive Node.js framework for building scalable server-side applications.</li>
        <li><strong>MongoDB</strong>: A NoSQL database to manage application data.</li>
        <li><strong>Docker</strong>: Containerization platform to build and deploy consistent environments.</li>
        <li><strong>Kubernetes</strong>: Orchestration system to manage deployments and services.</li>
        <li><strong>IBM Cloud Kubernetes Service</strong>: Cloud-based Kubernetes platform for hosting the project.</li>
        <li><strong>Nginx Ingress</strong>: For routing HTTP traffic to the application.</li>
    </ul>

    <h2>Kubernetes Overview</h2>
    <p>
        This project is deployed on a Kubernetes cluster hosted on IBM Cloud. The following components are used:
    </p>
    <ul>
        <li><strong>Deployments</strong>: The NestJS app and MongoDB run in separate pods with scalability options.</li>
        <li><strong>Services</strong>: Kubernetes <code>ClusterIP</code> services expose the application and database within the cluster.</li>
        <li><strong>Ingress</strong>: Nginx Ingress routes public traffic to the services securely.</li>
        <li><strong>SSL/TLS</strong>: Configured via Ingress to ensure encrypted communication.</li>
    </ul>
    <p>
        For a visual representation, check out the architecture diagram <a href="#link-to-diagram">here</a>.
    </p>

    <h2>Project setup</h2>
    <pre>
        <code>
$ npm install
        </code>
    </pre>

    <h2>Compile and run the project</h2>
    <pre>
        <code>
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
        </code>
    </pre>

    <h2>Run tests</h2>
    <pre>
        <code>
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
        </code>
    </pre>

    <h2>Running the Application in Kubernetes</h2>
    <p>To deploy the application using Kubernetes:</p>
    <ol>
        <li>Build the Docker image:
            <pre><code>docker build -t yourdockerhubusername/nestjs-app .</code></pre>
        </li>
        <li>Push the image to DockerHub:
            <pre><code>docker push yourdockerhubusername/nestjs-app</code></pre>
        </li>
        <li>Create the Kubernetes deployment:
            <pre><code>kubectl apply -f k8s/deployment.yaml</code></pre>
        </li>
        <li>Set up services:
            <pre><code>kubectl apply -f k8s/service.yaml</code></pre>
        </li>
        <li>Apply Ingress for traffic routing:
            <pre><code>kubectl apply -f k8s/ingress.yaml</code></pre>
        </li>
    </ol>
    <p>Now your NestJS application will be accessible via the Ingress route you've defined.</p>

    <h2>Resources</h2>
    <p>Check out a few resources that may come in handy when working with NestJS:</p>
    <ul>
        <li>Visit the <a href="https://docs.nestjs.com">NestJS Documentation</a> to learn more about the framework.</li>
        <li>For questions and support, please visit our <a href="https://discord.gg/G7Qnnhy">Discord channel</a>.</li>
        <li>To dive deeper and get more hands-on experience, check out our official <a href="https://courses.nestjs.com/">video courses</a>.</li>
        <li>Visualize your application graph and interact with the NestJS application in real-time using <a href="https://devtools.nestjs.com">NestJS Devtools</a>.</li>
        <li>Need help with your project (part-time to full-time)? Check out our official <a href="https://enterprise.nestjs.com">enterprise support</a>.</li>
        <li>To stay in the loop and get updates, follow us on <a href="https://x.com/nestframework">X</a> and <a href="https://linkedin.com/company/nestjs">LinkedIn</a>.</li>
        <li>Looking for a job, or have a job to offer? Check out our official <a href="https://jobs.nestjs.com">Jobs board</a>.</li>
    </ul>

    <h2>Support</h2>
    <p>Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please <a href="https://docs.nestjs.com/support">read more here</a>.</p>


    <h2>License</h2>
    <p>Nest is MIT licensed.</p>
</body>
</html>
