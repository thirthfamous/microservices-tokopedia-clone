# Microservices Tokopedia Clone 
Microservices Tokopedia Clone made with Dockerized NodeJS, NGINX and MongoDB. To be added : test

---

### Features
* Register User
* Login User
* See Profile User
* See Shopping Details
* Add Address
* See Wishlist
* Create Order
* Create Product
* Get All Product
* Get Product Details
* Get All Product Category
* Add to Wishlist
* Add to Cart
* Delete from Wishlist
* Delete from Cart

### Prerequisite
* Install Docker at [Docker official site](https://www.docker.com/products/docker-desktop/)

---

### Installation
1. Run Docker
2. Run the commands 
```sh
// clone the project
git clone https://github.com/thirthfamous/microservices-tokopedia-clone.git

// go to the project directory
cd microservices-tokopedia-clone

// build images
docker-compose build --no-cache 

// run the app
// hit the api at localhost:80
docker-compose up
```
Wait around 1 minute, because RabbitMQ service is slow to start

3. Import postman.json
4. Register at Customer_Signup request
5. Login at Customer_Login request
6. Add token to your environment
7. Enjoy the app

---


![microservices tokopedia clone drawio](https://user-images.githubusercontent.com/30696403/167250318-28a5fc99-9acf-413f-abd5-ba9f4c734915.png)
