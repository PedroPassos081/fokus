import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { Timer } from "../components/Timer";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25,
    Image: require("../assets/images/foco.png"),
    display: "foco",
  },
  {
    id: "short",
    initialValue: 5,
    Image: require("../assets/images/short.png"),
    display: "pausa curta",
  },
  {
    id: "long",
    initialValue: 15,
    Image: require("../assets/images/long.png"),
    display: "pausa longa",
  },
];

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);

  return (
    <View style={styles.container}>
      <Image source={timerType.Image} />

      <View style={styles.actions}>
        <View style={styles.contex}>
          {pomodoro.map((p) => (
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => setTimerType(p)}
              display={p.display}
            />
          ))}
        </View>
        <Timer totalSeconds={timerType.initialValue * 60} />
        <FokusButton />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
  },
  footer: { width: "80%" },
  footerText: {
    textAlign: "center",
    color: "#98A0AB",
    fontSize: 12.5,
  },
  contex: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
