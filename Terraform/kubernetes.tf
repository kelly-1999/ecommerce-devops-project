resource "kubernetes_config_map" "ecommerce_config" {

  metadata {
    name      = "ecommerce-config"
    namespace = kubernetes_namespace.ecommerce.metadata[0].name
  }

  data = {
    PRODUCT_SERVICE_URL = "http://product-service:8080"
  }
}