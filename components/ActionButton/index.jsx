import { Pressable, StyleSheet, Text } from "react-native";

export const ActionButton = ({ active, onPress, display }) => {
  return (
    <Pressable
      style={active ? styles.contexButtonActive : null}
      onPress={onPress}
    >
      <Text style={styles.contexButtonText}>{display}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  contexButtonActive: { backgroundColor: "#144480", borderRadius: 8 },
  contexButtonText: {
    fontSize: 12.5,
    color: "#fff",
    padding: 8,
  },
});
