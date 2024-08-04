import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import Products from "../screens/Products";
import ProductDetails from "../screens/ProductDetails";
import CartModal from "../screens/CartModal";
import { NavigationProp } from "@react-navigation/native";
import CartButton from "./CartButton";

type ProductsStackParamList = {
  Products: undefined,
  ProductDetails: { id: number }
  CartModal: undefined
}

const ProductsStack = createNativeStackNavigator<ProductsStackParamList>();

export type ProductsScreenProps = NativeStackScreenProps<ProductsStackParamList, 'Products'>
export type ProductsDetailsScreenProps = NativeStackScreenProps<ProductsStackParamList, 'ProductDetails'>
export type StackNavigation = NavigationProp<ProductsStackParamList>

const ProductsStackNav = () => {
  return (
    <ProductsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1FE687'
      },
      headerTintColor: '#141414',
      headerRight: () => <CartButton />,
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
      <ProductsStack.Screen
        name="CartModal"
        component={CartModal}
        options={{
          headerShown: false,
          presentation: 'modal'
        }}
      />
    </ProductsStack.Navigator>
  )
}

export default ProductsStackNav