import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView, //renders all list items - good for shorter lists.
  FlatList, //renders only visible items - good for longer lists.
} from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
  //states -----------------------------------------------------
  const [goalsList, setGoalsList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  //------------------------------------------------------------

  const modalVisible = () => {
    setModalIsVisible(true);
  };

  //app components----------------------------------------------------
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Button
          title="Add New Item"
          color={"darkgreen"}
          onPress={modalVisible}
        />
        <TextInput>Your Items:</TextInput>
        <GoalInput
          setGoalsList={setGoalsList}
          modalIsVisible={modalIsVisible}
          setModalIsVisible={setModalIsVisible}
        />
        <GoalItem goalsList={goalsList} setGoalsList={setGoalsList} />
      </View>
    </>
  );
}
//-------------------------------------------------------

//Styling--------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "darkgrey",
  },
});
//----------------------------------------------
