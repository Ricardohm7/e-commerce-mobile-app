import { FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchProducts, Product } from '../api/api';
import { ProductsScreenProps } from '../navigation/ProductStack';
import { SafeAreaView } from 'react-native-safe-area-context';

const Products = ({ navigation }: ProductsScreenProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchProducts();
      setProducts(data)
    }
    load()
  }, [])

  const renderProductItem: ListRenderItem<Product> = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => navigation.navigate('ProductDetails', { id: item.id })}
    >
      <Image style={styles.productImage} source={{ uri: item.product_image }} />
      <Text style={styles.productName}>
        {item.product_name}
      </Text>
      <Text style={styles.productPrice}>
        ${item.product_price}
      </Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      ></FlatList>
    </SafeAreaView>
  )
}

export default Products

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingBottom: 10
  },
  productItem: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  productName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold'
  },
  productPrice: {
    marginTop: 4,
    fontSize: 14,
    color: '#666'
  },
})