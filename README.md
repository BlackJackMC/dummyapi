# DUMMYAPI

## Overview
dummy + api = dummyapi

No version divider

This api sucks because this is a dummy api

## Base URL

https://dummyapi-0uzr.onrender.com

## Endpoints

### Get a list of products

- URL: `/products`
- Method: `GET`
- URL parameters:
    - **`name`** (string): The name of the product
    - **`minPrice`** (int): The minimum price of the products
    - **`maxPrice`** (int): The maximum price of the products
    - **`start`** (int): Take products from the start-th product
    - **`end`** (int): Take products to the end-th product
- Response:
    - Status: `200 OK`
    - Body:
    ```json
    [
        {
            "_id": "Product id", //string
            "name": "Product name", //string
            "short_desc": "Product desc", //string
            "price": Product price, //int
            "unit_price": "Price unit (vnd, usd, ...)", //string
            "tag": "Product tag", //string
            "discount": Product discount, //int
            "image": "Product image", //base64
        }
    ]
    ```