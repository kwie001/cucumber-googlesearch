class Catalog {
  get error() {
    return $(".alert.alert-warning");
  }

  get products() {
    return $$(
      "#search .product_list .product-container .product-image-container"
    );
  }
}

module.exports = new Catalog();
