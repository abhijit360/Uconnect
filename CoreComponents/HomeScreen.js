import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailValiditiy, setEmailValidity] = useState(true);
  const EmailRegex = new RegExp("([a-zA-Z0-9]+@)([a-zA-Z0-9]+.)com");

  function checkEmail(text) {
    console.log(text);
    setEmailValidity(EmailRegex.test(text));
    console.log("testing");
  }
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text Style={styles.Header}>Login</Text>
        </View>
        <View>
          <Text Style={styles.Text}>E-mail</Text>
          <TextInput
            placeholder="Enter an E-mail"
            style={styles.inputField}
            onBlur={(e) => checkEmail(e.target.value)}
          ></TextInput>
          {!emailValiditiy && <Text style={{color:"red"}}>*Email Invalid</Text>}
        </View>
        <View>
            
        </View>
        <View>
          <Text Style={styles.Text}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Enter a Password"
              style={styles.inputField}
              name="password"
              secureTextEntry={showPassword}
              
            ></TextInput>

            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={32}
              color="#aaa"
              style={styles.icon}
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    height: 50,
    width: 150,
    padding: 2,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  passwordContainer: {
    flexDirection: "row",
    alignContent: 'flex-end',
    justifyContent:"center",
    gap: 10,
  },
  Header: {
    fontSize: 200,
    fontWeight: "bold",
  },

  Text: {
    fontFamily: "Cochin",
    fontSize: 16,
    fontWeight: "300",
  },

  inputField: {
    backgroundColor: "#ECECEC",
    height: 50,
    width: 300,
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    alignSelf: "center",

  },
  contOne: {
    // justifyContent: "center",
    backgroundColor: "grey",
    padding: 12,
    margin: 10,
    borderRadius: 10,
    height: 50,
    width: 300,
  },
});
