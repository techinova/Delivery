package com.modUp.beta.model;

import jakarta.persistence.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.time.LocalDateTime;
import java.util.Set;

@Entity
public class Orders {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id", length = 1, nullable = true)
    private Long id;


    @Column( length = 100, nullable = true)
    private String product_name;

    @Column(length = 10, nullable = true)
    private Double price;

    @Column(length = 100, nullable = true)
    private String description;

    @Column(length = 8, nullable = true)
    private LocalDateTime dataOrders;


    @ManyToMany
    @Fetch(FetchMode.SELECT)
    private Set<Products> products;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public LocalDateTime getDataOrders() {
        return dataOrders;
    }

    public void setDataOrders(LocalDateTime dataOrders){this.dataOrders = dataOrders;}

    @Override
    public String toString() {
        return "Orders{" +
                "id=" + id +
                ", product_name='" + product_name + '\'' +
                ", price=" + price +
                ", description='" + description + '\'' +
                '}';
    }

    public Set<Products> getProducts() {
        return products;
    }

    public void setProducts(Set<Products> products) {
        this.products = products;
    }
}
