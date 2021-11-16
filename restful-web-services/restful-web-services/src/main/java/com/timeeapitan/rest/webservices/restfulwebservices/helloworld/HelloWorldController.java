package com.timeeapitan.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

// Controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
// http://localhost:4200
public class HelloWorldController {

    // GET
    // URI - /hello-world (URI - Uniform Resource Identifier)
    // method - "Hello World"

    @GetMapping(path = "/hello-world")
    public String helloWorld() {
        return "Hello World";
    }

    // /hello-world-bean
    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("Hello World");
    }

    // /hello-world/path-variable/timeeapitan
    @GetMapping(path = "/hello-world/path-variable/{name}+{color}+{gender}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name, @PathVariable String color, @PathVariable String gender) {
        return new HelloWorldBean(String.format("Hello World, %s! Your associated color is %s. Your gender is %s.", name, color, gender));
        // throw new RuntimeException("Something went wrong");
    }

}
