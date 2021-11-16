package com.timeeapitan.rest.webservices.restfulwebservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


/**
 *
 * RESTful Web Services = REpresentational State Transfer
 * User -> Posts
 *
 * Retrieve all Users     - GET /users
 * Create a user          - POST /users
 * Retrieve one User      - GET /users/{id} -> /users/1
 * Delete a user          - DELETE /users/{id} -> /users/1
 *
 * Retrieve all posts for a User    - GET /users/{id}/posts
 * Create a posts for a User        - POST /users/{id}/post
 * Retrieve details of a post       - GET /users/{id}/posts/{post_id}
 *
 */


@SpringBootApplication
public class RestfulWebServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestfulWebServicesApplication.class, args);
	}

}
