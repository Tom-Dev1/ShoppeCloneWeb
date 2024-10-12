import { Product, ProductList, ProductListConfig } from 'src/types/product.type'
import { SuccessResponseAPI } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = 'products'
const productApi = {
  getProducts(params: ProductListConfig) {
    return http.get<SuccessResponseAPI<ProductList>>(URL, { params })
  },
  getProductDetail(id: string) {
    return http.get<SuccessResponseAPI<Product>>(`${URL}/${id}`)
  }
}

export default productApi
