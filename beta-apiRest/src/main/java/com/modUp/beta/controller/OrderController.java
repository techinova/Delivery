package com.modUp.beta.controller;



import com.modUp.beta.model.Products;
import com.modUp.beta.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping(value = "/order")
public class OrderController {

    @Autowired
    private ProductsService productsService;

    @PostMapping("/save")
    public ResponseEntity<Products> saveProduct(@RequestBody Products product) throws Exception{
        product = productsService.save(product);

        return ResponseEntity.ok().body(product);
    }

    @GetMapping(value= "/{id}")
    public ResponseEntity<List<Products>> findProduct(@PathVariable Long id){
        Products product = productsService.findById(id);
        return ResponseEntity.ok().body(Collections.singletonList(product));
    }

    @GetMapping(value = "/findAllProducts")
    public ResponseEntity<List<Products>> findAllProducts(){
        List<Products> product = productsService.findAllProducts();

        return ResponseEntity.ok().body(product);
    }



}
