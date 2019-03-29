import { Alert, Platform } from "react-native";

const server =
  Platform.OS === "ios" ? "http://localhost:8080" : "http://10.0.0.103:8080";

function showError(err) {
  Alert.alert("Ops! Ocorreu um problema!", `Mensagem: ${err}`);
}

export { server, showError };
