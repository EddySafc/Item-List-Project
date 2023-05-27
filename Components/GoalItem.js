import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";

const GoalItem = ({ goalsList, setGoalsList }) => {
  return (
    <View style={styles.goals}>
      {/* <FlatList
      data={goalsList}
      renderItem={(itemData) => {
        return <Text style={styles.goalText}>{itemData.item.text}</Text>;
      }}
      //key extractor only required if property name isnt 'key'.
      keyExtractor={(item, index) => {
        return item.id;
      }}
    /> */}
      <ScrollView>
        {goalsList.map((goal) => (
          <View key={Math.random().toString()}>
            <Pressable
              android_ripple={{ color: "red" }}
              onPress={() =>
                setGoalsList((currentGoals) => {
                  return currentGoals.filter((goalName) => {
                    return goalName !== goal;
                  });
                })
              }
            >
              <Text style={styles.goalText}>{goal}</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  goalText: {
    padding: 6,
    margin: 8,
    backgroundColor: "lightgrey",
    borderRadius: 8,
  },
  goals: {
    flex: 5,
  },
});

export default GoalItem;
