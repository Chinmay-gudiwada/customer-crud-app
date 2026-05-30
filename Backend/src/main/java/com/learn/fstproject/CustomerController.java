package com.learn.fstproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
public class CustomerController {
    @Autowired
    private CustomerService service;

    @GetMapping("/")
    public String greet(){
        return "Welcome to My world";
    }
    @GetMapping("/customer")
    public List<CustomerModel> getData(){
        return service.getData();
    }

    @PostMapping("/add")
    public String addCustomer(@RequestBody CustomerModel customer){
        return service.addCustomer(customer);
    }
    @PutMapping("/update")
    public String updateCustomer(@RequestBody CustomerModel customer){
        return service.updateCustomer(customer);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteCustomer(@PathVariable Integer id){
        return service.deleteCustomer(id);
    }


}
