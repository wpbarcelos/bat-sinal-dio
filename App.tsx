import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import { Input } from "./src/components/Input";
import { Btn } from "./src/components/Btn";
import { useMemo, useState } from "react";

type FormType = {
  nome: string;
  telefone: string;
  localizacao: string;
  urgencia: string;
};
export default function App() {
  const [component, setComponent] = useState("inicio");

  const [form, setForm] = useState<FormType>({
    nome: "",
    telefone: "",
    localizacao: "",
    urgencia: "",
  });

  const formValid = useMemo<string>(() => {
    if (form.nome.length === 0) {
      return "Preencha o campo nome";
    }

    if (form.telefone.length === 0) {
      return "Preencha o campo telefone";
    }

    if (form.localizacao.length === 0) {
      return "Preencha o campo localização";
    }

    if (form.urgencia.length === 0) {
      return "Preencha o campo urgência";
    }

    return "";
  }, [form]);

  function handleSubmit() {
    let message = formValid;
    if (message.length > 0) {
      ToastAndroid.show(message, ToastAndroid.SHORT);
      return;
    }

    setComponent("sucesso");
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={{ flex: 1 }} style={{ flex: 1 }}>
        <StatusBar style="auto" />
        {component == "inicio" && (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./src/assets/img/Logo.png")}
              style={styles.logo}
            />

            <View style={{ marginTop: 30, width: "85%" }}>
              <Btn
                title="Ativar Bat Sinal"
                onPress={() => setComponent("formulario")}
              />
            </View>
          </View>
        )}

        {component == "formulario" && (
          <View
            style={{
              flex: 1,
              width: "100%",
              paddingTop: 30,
              paddingHorizontal: 10,
            }}
          >
            <Image
              source={require("./src/assets/img/Logo.png")}
              style={styles.logoSmall}
            />

            <Input
              label="Nome"
              value={form.nome}
              onChangeText={(text) => setForm({ ...form, nome: text })}
            />

            <Input
              label="Telefone"
              value={form.telefone}
              onChangeText={(text) => setForm({ ...form, telefone: text })}
            />

            <Input
              label="Localização"
              value={form.localizacao}
              onChangeText={(text) => setForm({ ...form, localizacao: text })}
            />

            <Input
              label="Qual a sua urgência?"
              value={form.urgencia}
              onChangeText={(text) => setForm({ ...form, urgencia: text })}
            />

            <Btn title="Enviar" onPress={handleSubmit} />
          </View>
        )}

        {component == "sucesso" && (
          <>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.h2}>Seu chamado foi registrado</Text>
              <Text style={styles.h2}>Aguarde o morcegão te ajudar</Text>

              <View style={{ width: "90%", marginTop: 20 }}>
                <Btn
                  title="Voltar para o início"
                  onPress={() => setComponent("inicio")}
                />
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7EE46",
  },
  logo: {
    width: 150,
    height: 150,
  },

  logoSmall: {
    width: 70,
    height: 70,
  },
  h2: {
    fontWeight: "bold",
    fontSize: 22,
  },
});
