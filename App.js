import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
import { ActivityIndicator } from "react-native";

import AllExpenses from "./screens/AllExpenses";
import ExpensesContextProvider from "./store/expenses-context";
import { GlobalStyles } from "./constants/styles";
import IconBtn from "./components/UI/iconBtn";
import ManageExpense from "./screens/ManageExpense";
import RrecentExpenses from "./screens/RecentExpenses";
import Calculator from "./screens/Calculator";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
function ExpensesOverview() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary400 },
        headerTintColor: "white",

        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary400 },
        drawerContentStyle: { backgroundColor: "#58111A" },
        tabBarInactiveTintColor: "white",
        tabBarActiveTintColor: GlobalStyles.colors.accent500,

        headerRight: ({ tintColor }) => {
          return (
            <IconBtn
              icon="plus"
              color={tintColor}
              size={24}
              onPress={() => {
                navigation.navigate("ManageExpenses");
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="recentExpenses"
        component={RrecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recents",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="hourglass" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Calculator"
        component={Calculator}
        options={{
          title: "Calculator",
          tabBarLabel: "Calculator",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="calculator" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ size, color }) => {
            return <AntDesign name="calendar" size={size} color={color} />;
          },
          tabBarLabel: "All expenses",
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    // return <AppLoading />;
    return (
      <ActivityIndicator size="large" color={GlobalStyles.colors.accent500} />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
              contentStyle: { backgroundColor: GlobalStyles.colors.primary700 },
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpenses"
              component={ManageExpense}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
