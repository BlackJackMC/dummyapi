# DUMMYAPI

## Overview
dummy + api = dummyapi

No version divider

This api sucks because this is a dummy api

## Base URL

https://dummyapi-0uzr.onrender.com

## Endpoints

### Get a introduction

- URL: `/`
- Method: `GET`
- Response:
    - Status: `200 OK`
    - Body:
    ```html
    <p> An API for web training in LHPSC </p>
    ```

### Get a pong

- URL: `/ping`
- Method: `GET`
- Response:
    - Status: `200 OK`
    - Body:
    ```html
    <p> Pong </p>
    ```

### Get a list of products

- URL: `/products`
- Method: `GET`
- URL parameters:
    - **`name`** (string): The name of the product
    - **`minPrice`** (int): The minimum price of the products
    - **`maxPrice`** (int): The maximum price of the products
    - **`skip`** (int): Skip a number of products
    - **`limit`** (int): Products list limit (default: 8)
- Response:
    - Status: `200 OK`
    - Body:
    ```json
    {
        "product_list": [
            {
                "_id": "Product id", //string
                "name": "Product name", //string
                "short_desc": "Product desc", //string
                "price": Product price, //int
                "unit_price": "Price unit (vnd, usd, ...)", //string
                "tag": "Product tag", //string
                "discount": Product discount, //int
                "image": "Product image", //base64
            },
            // More product
        ],
        "metadata": {
            // Here is the parameters of the query
        }
    }
    ```