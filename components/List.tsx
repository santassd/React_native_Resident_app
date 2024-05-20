import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const AnnouncementScreen: React.FC = () => (
  <View style={styles.screenContainer}>
    <Text>Current announcement</Text>
  </View>
);

const BulletinsScreen: React.FC = () => (
  <View style={styles.screenContainer}>
    <Text>Bulletins Screen</Text>
  </View>
);

const RepairRequestScreen: React.FC = () => (
  <View style={styles.screenContainer}>
    <Text>Repair Request Screen</Text>
  </View>
);

type RootStackParamList = {
  List: undefined;
  Announcement: undefined;
  Bulletins: undefined;
  RepairRequest: undefined;
};

type ListScreenNavigationProp = StackNavigationProp<RootStackParamList, "List">;

// Define your navigation stack
const Stack = createStackNavigator<RootStackParamList>();

interface ListItemProps {
  title: string;
  onPress: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const List: React.FC<{ navigation: ListScreenNavigationProp }> = ({
  navigation,
}) => {
  const data: { title: string; screen: keyof RootStackParamList }[] = [
    { title: "Announcement", screen: "Announcement" },
    { title: "Bulletins", screen: "Bulletins" },
    { title: "Repair Request", screen: "RepairRequest" },
  ];

  console.log("Rendering List component");
  console.log("Data:", data);

  const navigateToScreen = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          onPress={() => navigateToScreen(item.screen)}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.list}
    />
  );
};

const App: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Announcement" component={AnnouncementScreen} />
      <Stack.Screen name="Bulletins" component={BulletinsScreen} />
      <Stack.Screen name="RepairRequest" component={RepairRequestScreen} />
    </Stack.Navigator>
  );
};


const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
    gap: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 12,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    borderRadius: 5,
    padding: 5,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    color: "black",
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom:300,
    marginTop:0,
    marginLeft:15,
    fontStyle:'italic',
    
    
    
    
    
  },
});

export default App;
