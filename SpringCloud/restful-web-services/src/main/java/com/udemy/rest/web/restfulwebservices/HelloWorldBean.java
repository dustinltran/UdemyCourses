package com.udemy.rest.web.restfulwebservices;

public class HelloWorldBean {
    private String message;

    public HelloWorldBean(String message){
        this.message = message;
    }

    public String getMessage(){
        return this.message;
    }
    public void setMessage(String message){
        this.message = message;
    }

    public String toString(){
        return String.format("Hello World Bean [message=%s]", message);
    }
}