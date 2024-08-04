import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import Products from "../screens/Products";
import ProductDetails from "../screens/ProductDetails";

type ProductsStackParamList = {
  Products: undefined,
  ProductDetails: { id: number }
  //TODO: Cart modal
}

const ProductsStack = createNativeStackNavigator<ProductsStackParamList>();
export type ProductsScreenProps = NativeStackScreenProps<ProductsStackParamList, 'Products'>
export type ProductsDetailsScreenProps = NativeStackScreenProps<ProductsStackParamList, 'ProductDetails'>

const ProductsStackNav = () => {
  return (
    <ProductsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1FE687'
      },
      headerTintColor: '#141414'
    }}>
      <ProductsStack.Screen
        name="Products"
        component={Products}
        options={{
          headerTitle: 'Neon Shop'
        }}
      />
      <ProductsStack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerTitle: ''
        }}
      />
    </ProductsStack.Navigator>
  )
}

export default ProductsStackNav