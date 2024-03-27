import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function GoalItem({ text, onRemove }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={onRemove}
        style={({ pressed }) => {
          pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#5e0acc',
    margin: 5,
    borderRadius: 7,
    width: '90%',
    alignSelf: 'center',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    padding: 8,
  },
});
