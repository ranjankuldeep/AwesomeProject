import type { Node } from "react";
import PhoneScreen from "./components/PhoneScreen";
import { SafeAreaView, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import OtpScreen from "./components/OtpScreen";
import DialCodeScreen from "./components/DialCodeScreen";
import ContextProvider from "./Store/context";

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  return (
    <NavigationContainer>
    <ContextProvider>
        <Stack.Navigator>
          <Stack.Screen component={PhoneScreen} name="Home" />
          <Stack.Screen component={OtpScreen} name="OtpScreen" />
          <Stack.Screen
            component={DialCodeScreen}
            name="DialCodeScreen"
            options={{ headerShown: false, presentation: "modal" }}
          />
        </Stack.Navigator>
        </ContextProvider>
      </NavigationContainer>
  );
};

export default App;
