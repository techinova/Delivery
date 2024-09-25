package com.modUp.beta.service;


import com.modUp.beta.model.Orders;
import com.modUp.beta.model.Products;
import com.modUp.beta.repository.OrdersRepository;
import com.modUp.beta.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class OrdersService {



    @Autowired
    private OrdersRepository repository;
    @Autowired
    private ProductsRepository productsRepository;


    public Orders save(Orders order){

        order.setDataOrders(LocalDateTime.now());
        Set<Products> products = new HashSet<>();
        order.getProducts().forEach(product -> products.add(productsRepository.getReferenceById(product.getId())));
        order.setProducts(products);

        return repository.save(order);
    }


    public Orders findById(Long id){
        return repository.findById(id).orElse(null);
    }


    public List<Orders>findAll(){
        return repository.findAll();
    }
}
