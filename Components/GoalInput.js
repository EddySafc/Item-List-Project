import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView, //renders all list items - good for shorter lists.
  FlatList, //renders only visible items - good for longer lists.
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = ({ setGoalsList, modalIsVisible, setModalIsVisible }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const textInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  //------Different Scroll types--------------
  //scrollview:
  const addGoalHandler = () => {
    setGoalsList((currentGoals) => [...currentGoals, enteredGoalText]);
    setEnteredGoalText("");
    //setModalIsVisible(false);
  };

  //FlatList:
  // const addGoalHandler = () => {
  //   setGoalsList((currentGoals) => [
  //     ...currentGoals,
  //     { text: enteredGoalText, id: Math.random().toString() },
  //   ]);
  // }
  //--------------------------------------------

  return (
    <Modal visible={modalIsVisible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.goalImage}
        />
        <TextInput
          style={styles.textInput}
          placeholder="your new item..."
          onChangeText={textInputHandler}
          value={enteredGoalText} //clears box when text is entered.
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Item"
              color={"darkgreen"}
              onPress={addGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Finished"
              color={"darkred"}
              onPress={() => {
                setModalIsVisible(false);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "darkgrey",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    width: "95%",
    marginRight: 10,
    padding: 10,
    backgroundColor: "lightgrey",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    margin: 10,
  },
  goalImage: {
    marginBottom: 80,
  },
});

export default GoalInput;
