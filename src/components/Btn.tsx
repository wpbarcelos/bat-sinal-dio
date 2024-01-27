import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type BtnProps = {
  title: string;
};
export function Btn({ title, ...props }: BtnProps & TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props} style={styles.buttonContainer} activeOpacity={0.7}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#DFD73F",
    borderRadius: 4,
    marginTop: 20,
    padding: 10,
    elevation:3
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
