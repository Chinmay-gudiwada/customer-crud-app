package com.learn.fstproject;

public class CustomerModel {

    private int id;
    private String name;
    private String phone;

    public CustomerModel() {
    }

    public CustomerModel(int id, String name, String phone) {
        this.name = name;
        this.id = id;
        this.phone = phone;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "customerModel{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", phone=" + phone +'\''+
                '}';
    }
}
