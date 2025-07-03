import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25,
    Image: require("../assets/images/foco.png"),
  },
  {
    id: "short",
    initialValue: 5,
    Image: require("../assets/images/short.png"),
  },
  {
    id: "long",
    initialValue: 15,
    Image: require("../assets/images/long.png"),
  },
];

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);

  return (
    <View style={styles.container}>
      <Image source={timerType.Image} />

      <View style={styles.actions}>
        <View style={styles.contex}>
          <Pressable style={styles.contexButtonActive}>
            <Text style={styles.contexButtonText}>foco</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.contexButtonText}>Pausa curta</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.contexButtonText}>Pausa longa</Text>
          </Pressable>
        </View>
        <Text style={styles.timer}>
          {" "}
          {new Date(timerType.initialValue * 1000).toLocaleTimeString("pt-BR", {
            minute: "2-digit",
            second: "2-digit",
          })}
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
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
  timer: {
    fontSize: 54,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#b872ff",
    borderRadius: 32,
    padding: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
    fontWeight: "bold",
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
  contexButtonActive: { backgroundColor: "#144480", borderRadius: 8 },
  contexButtonText: {
    fontSize: 12.5,
    color: "#fff",
    padding: 8,
  },
});
