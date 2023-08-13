import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import NewsOverview from "../screens/NewsOverview"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home"
import Saved from "../screens/Saved"

const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()

function HomeScreen() {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Saved" component={Saved} />
		</Tab.Navigator>
	)
}

export default function Navigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					options={{ headerShown: false }}
					name="Newsfeed"
					component={HomeScreen}
				/>
				<Stack.Screen name="News Overview" component={NewsOverview} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
