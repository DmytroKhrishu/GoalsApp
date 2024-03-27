import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim() !== '') {
      setGoals((prevGoals) => [
        { text: enteredGoalText, id: Math.random().toString() },
        ...prevGoals,
      ]);
      endAddGoalHandler();
    } else {
      return;
    }
  }

  function removeGoalHandler(id) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.addGoalButton}>
          <Button
            title="Add New Goal"
            color="#a065ec"
            onPress={startAddGoalHandler}
          />
        </View>
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onRemove={() => removeGoalHandler(itemData.item.id)}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
          {/* ios only */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  addGoalButton: {
    marginVertical: 20
  },
  goalsContainer: {
    flex: 6,
  },
});
