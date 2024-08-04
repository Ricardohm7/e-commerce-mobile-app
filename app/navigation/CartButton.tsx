import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "./ProductStack";
import useCartStore from "../state/cartStore";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const CartButton = () => {
  const navigation = useNavigation<StackNavigation>()
  const { products } = useCartStore((state) => ({ products: state.products }))

  const [count, setCount] = useState(0);

  useEffect(() => {
    const count = products.reduce((prev, products) => prev + products.quantity, 0);
    setCount(count);
  }, [products]);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('CartModal');
      }}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <Ionicons name="cart" size={28} color={'#000'} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  countContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: -5,
    right: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});


export default CartButton