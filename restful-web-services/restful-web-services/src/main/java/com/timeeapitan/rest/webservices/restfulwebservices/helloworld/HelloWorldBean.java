package com.timeeapitan.rest.webservices.restfulwebservices.helloworld;

public class HelloWorldBean {
    private String message;
    private String name;
    private String color;

    public HelloWorldBean(String message) {
        this.message = message;
        this.name = "Timeea";
        this.color = "red";
    }

    public String getMessage() {
        return message;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return String.format("HelloWorldBean [message=%s]", message);
    }
}
