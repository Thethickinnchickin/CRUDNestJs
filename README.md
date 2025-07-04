# Scalable Inventory Management System with NestJS and Kubernetes

## Author

Matthew Reiley
October 3, 2024

---

## 📋 Project Overview

This project demonstrates a **scalable inventory management system**, developed with **NestJS** and deployed with **Kubernetes** on IBM Cloud. It showcases expertise in cloud-native development, containerization, orchestration, and modern application architecture.

The backend is powered by NestJS, with **MongoDB** as the database, **Docker** for containerization, and **Kubernetes** for orchestration. The app supports CRUD operations for products, categories, and orders.

---

## 🛠 Key Technologies

* **NestJS**: A progressive Node.js framework for building scalable server-side applications.
* **MongoDB**: NoSQL database for flexible and efficient data storage.
* **Docker**: Containerization technology to ensure consistent app execution.
* **Kubernetes**: Orchestrates and scales containerized applications.
* **IBM Cloud Kubernetes Service**: Managed Kubernetes cluster on IBM Cloud.
* **Sanity.io**: Used for dynamic content management.

---

## 🚀 Features

✅ CRUD operations for inventory entities: **Product**, **Category**, **Order**
✅ RESTful API with validation and error handling
✅ MongoDB integration with Mongoose schemas
✅ Containerized with Docker for consistent deployments
✅ Kubernetes manifests for deployment, service, and scaling
✅ Unit and end-to-end tests to ensure reliability

---

## 📖 Setup Instructions

### Prerequisites

* Node.js >= 16.x
* npm >= 8.x
* Docker
* kubectl
* IBM Cloud account (or any Kubernetes cluster)

### 1️⃣ Clone the Repository

```bash
git clone <repository_url>
cd inventory-management
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the root directory:

```ini
MONGODB_URI=mongodb+srv://<your_mongo_uri>
PORT=3000
```

### 4️⃣ Run Locally

```bash
npm run start:dev
```

Visit `http://localhost:3000`.

---

## 🐳 Docker

### Build the Docker Image

```bash
docker build -t inventory-management:latest .
```

### Run the Docker Container

```bash
docker run -d -p 3000:3000 --env-file .env inventory-management:latest
```

---

## ☸️ Kubernetes Deployment

### Apply Kubernetes Manifests

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

Monitor pods and services:

```bash
kubectl get pods
kubectl get svc
```

---

## 🧪 Testing

Run unit and e2e tests:

```bash
npm run test
npm run test:e2e
```

---

## 📚 API Endpoints

| Method | Endpoint                        | Description          |
| ------ | ------------------------------- | -------------------- |
| GET    | /products                       | Get all products     |
| POST   | /products                       | Create a new product |
| GET    | /products/\:id                  | Get a product by ID  |
| PUT    | /products/\:id                  | Update a product     |
| DELETE | /products/\:id                  | Delete a product     |
| ...    | Similar for categories & orders |                      |

---

## 📄 Conclusion

This project demonstrates:

* Building scalable, cloud-native apps
* Containerization and orchestration using Docker & Kubernetes
* Designing maintainable NestJS backend systems
* Deploying and managing on IBM Cloud

It highlights the importance of modern development practices and equips me with real-world experience in cloud-native architectures.

---

For questions or feedback, feel free to contact me!

---

© Matthew Reiley, 2024

