import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface ButtonProps {
  label: string;
}

export function Input({ label, ...props }: ButtonProps & TextInputProps) {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...props} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical:10,
  },
  label: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    fontSize: 20,
  },
});
