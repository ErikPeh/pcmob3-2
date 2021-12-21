import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import * as SQLite from "expo-sqlite";
import { Entypo } from "@expo/vector-icons";
import NotesStack from "./screens/noteStack";
import AddScreen from "./screens/addScreen";

const db = SQLite.openDatabase("notes.db");

// export default function AddScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>This is the add screen</Text>
//       <TouchableOpacity
//         onPress={() => navigation.goBack()}
//         style={{ padding: 10 }}
//       >
//         <Text style={{ color: "orange" }}>Dismiss</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Notes Stack"
          component={NotesStack}
          options={{ headerShown: false, presentation: "modal" }}
        />
        <Stack.Screen name="Add Note" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightcyan",
    alignItems: "center",
    justifyContent: "center",
  },
});
