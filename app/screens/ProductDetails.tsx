import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductsDetailsScreenProps } from '../navigation/ProductStack'
import { fetchProductDetails, Product } from '../api/api'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProductDetails = ({ route }: ProductsDetailsScreenProps) => {
  const { id } = route.params
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchProductDetails(id);
        setProduct(data)
      } catch (error) {
        console.log('error: ', error)
      }
    }
    fetchProduct()
  }, [id])

  return (
    <SafeAreaView style={styles.container}>
      {product && (
        <>
          <Image style={styles.productImage} source={{ uri: product.product_image }} />
          <Text style={styles.productName}>{product.product_name}</Text>

          <Text style={styles.productCategory}>{product.product_category}</Text>
          <Text style={styles.productDescription}>{product.product_description}</Text>
          <Text style={styles.productPrice}>{product.product_price}</Text>
        </>
      )}
    </SafeAreaView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  productImage: {
    height: 300,
    resizeMode: 'contain',
    borderRadius: 8
  },
  productName: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: 'bold'
  },
  productPrice: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  productCategory: {
    marginTop: 5,
    fontSize: 16,
    color: '#666'
  },
  productDescription: {
    marginTop: 10,
    fontSize: 16,
  },
})