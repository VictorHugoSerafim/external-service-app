import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import {
  Alert,
  Image,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import {
  Button,
  Icon,
  Text,
  TextField,
} from "../components";
import { isRTL } from "../i18n";
import { colors, spacing } from "../theme";
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle";
import { AppStackScreenProps, navigation } from "app/navigators/AppNavigator";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native"

const welcomeLogo = require("../../assets/images/FD-logo.jpg");

interface WelcomeScreenProps extends AppStackScreenProps<"Login"> {}

export const Login: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"]);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigation = useNavigation()

  function setNome(value: string): void {
    // Implement your logic here
  }

  function setSenha(value: string): void {
    // Implement your logic here
  }

  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
      </View>

      <View style={[$bottomContainer, $bottomContainerInsets]}>
        <TextField
          onChangeText={(value) => setNome(value)}
          LabelTextProps={{ style: { color: "black" } }}
          placeholder="Nome"
          style={{ backgroundColor: "white" }}
          containerStyle={[
            { backgroundColor: "white" },
            { marginBottom: heightPercentageToDP("2%") },
          ]}
          inputWrapperStyle={{ backgroundColor: "white" }}
        />

        <TextField
          onChangeText={(value) => setSenha(value)}
          LabelTextProps={{ style: { color: "black" } }}
          secureTextEntry={mostrarSenha}
          placeholder="Senha"
          style={{ backgroundColor: "white" }}
          containerStyle={[
            { backgroundColor: "white" },
            { marginBottom: heightPercentageToDP("5.3%") },
          ]}
          inputWrapperStyle={{ backgroundColor: "white" }}
          RightAccessory={() => (
            <TouchableOpacity
              onPress={() => setMostrarSenha(!mostrarSenha)}
              style={{
                paddingRight: widthPercentageToDP("0.8%"),
                marginTop: heightPercentageToDP("0.4%"),
              }}
            >
              <View>
                <Text
                  style={{
                    marginTop: 4,
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {mostrarSenha ? 'Mostrar' : 'Ocultar'}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <Button
          text="Entrar"
          style={[
            { paddingVertical: heightPercentageToDP("1.5%") },
            { backgroundColor: "#232938" },
            { borderRadius: heightPercentageToDP("3%") },
            { marginBottom: heightPercentageToDP("1.6%") },
          ]}
          pressedStyle={[
            { backgroundColor: "white" },
            { borderRadius: heightPercentageToDP("3%") },
          ]}
          textStyle={[
            { fontSize: heightPercentageToDP("1.8%") },
            { color: "white" },
          ]}
          pressedTextStyle={[
            { fontSize: heightPercentageToDP("1.8%") },
            { color: "#232938" },
          ]}
          onPress={() => navigation.navigate("Welcome")}
        />

        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            marginBottom: heightPercentageToDP("1.6%"),
          }}
          onPress={() => Alert.alert("iiii não lembra a senha kkkkk bobão!")}
        >
          Esqueceu sua senha?
        </Text>
      </View>
    </View>
  );
});

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
};

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  backgroundColor: colors.palette.neutral100,
  paddingHorizontal: spacing.lg,
};

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "50%",
  backgroundColor: colors.palette.neutral100,
  paddingHorizontal: spacing.lg,
  justifyContent: "flex-start",
};

const $welcomeLogo: ImageStyle = {
  height: heightPercentageToDP("8.8%"),
  width: "100%",
  marginBottom: spacing.xxl,
};
