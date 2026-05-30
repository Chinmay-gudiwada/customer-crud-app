package com.learn.fstproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepo repo;
    public List<CustomerModel> getData() {
        return repo.getData();
    }

    public String addCustomer(CustomerModel customer) {
        return repo.addCustomer(customer);
    }

    public String deleteCustomer(Integer id){
        return  repo.deleteCustomer(id);
    }

    public String updateCustomer(CustomerModel customer) {
        return repo.updateCustomer(customer);
    }
}
