package com.learn.fstproject;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CustomerRepo {

    @Autowired
    JdbcTemplate jdbctemplate;

    public List<CustomerModel> getData() {
        String sql="select * from customer";
        return jdbctemplate.query(sql,(rs, rowNum)-> new CustomerModel(
                rs.getInt("id"),
                rs.getString("name"),
                rs.getString("phone")

        ));
    }

    public String addCustomer(CustomerModel customer) {
        String sql="Insert into customer(id,name,phone)  values(?,?,?)";
        int rows= jdbctemplate.update(
                sql,
                customer.getId(),
                customer.getName(),
                customer.getPhone()
        );
        if(rows>0)
            return "Customer added successfully. ";
        else
            return "Customer doesnt added.";

    }
    public String deleteCustomer(Integer id){
        String sql="delete from customer where id=?";
        int rows=jdbctemplate.update(sql,id);
        if(rows>0)
            return "customer deleted successfully..";
        else return "Failed..";
    }

    public String updateCustomer(CustomerModel customer) {
        String sql = "Update customer set name=?,phone=?  where id=?";
        int rows=jdbctemplate.update(sql,
                customer.getName(),
                customer.getPhone(),
                customer.getId()
                );
        if(rows>0) return "Updated...";
        else return "Failed...";
    }
}
