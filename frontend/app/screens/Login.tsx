import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { Alert, Image, ImageStyle, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import {
  Button,
  Icon,
  Text,
  TextField,
} from "../components"
import { isRTL } from "../i18n"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { AppStackScreenProps } from "app/navigators/AppNavigator"
const welcomeLogo = require("../../assets/images/FD-logo.jpg")

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
) {

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  const [mostrarSenha, setMostrarSenha] = useState(true)

  function setInput(value: string): void {
    throw new Error("Function not implemented.")
  }

  function handleForgotPassword(event: GestureResponderEvent): void {
    throw new Error("Function not implemented.")
  }

  function setNome(value: string): void {
    
  }

  function setSenha(value: string): void {

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
        placeholderTxOptions={{ name: "John" }}
        style={{ backgroundColor: "lightgray" }}
        containerStyle={[{ backgroundColor: "white" }, { marginBottom: 24 }]}
        inputWrapperStyle={{ backgroundColor: "lightgray" }}
      />

      <TextField
        onChangeText={(value) => setSenha(value)}
        LabelTextProps={{ style: { color: "black" } }}
        secureTextEntry={mostrarSenha}
        placeholder="Senha"
        style={{ backgroundColor: "lightgray" }}
        containerStyle={[{ backgroundColor: "white" }, { marginBottom: 53 }]}
        inputWrapperStyle={{ backgroundColor: "lightgray" }}
        RightAccessory={() => (
          <TouchableOpacity
          onPress={() => setMostrarSenha(!mostrarSenha)}
          style={{
            paddingRight: 8,
            marginTop: 4,
          }}
        >
          <View>
            <Text  style={{ textAlign: 'center', color: 'black', fontWeight: 'bold'}}>  {mostrarSenha ? 'Mostrar' : 'Ocultar'}</Text>
          </View>
        </TouchableOpacity>
        )}
      />

      <Button
        text="Entrar"
        onPress={() => Alert.alert("aaiiinn!!")}
        style={[{ paddingVertical: 15 }, { backgroundColor: "#232938" }, { borderRadius: 30 }, { marginBottom: 16 }]}
        pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 30 }]}
        textStyle={[{ fontSize: 18 }, { color: "white" }]}
        pressedTextStyle={[{ fontSize: 18 }, { color: "#232938" }]}
      />

      <Text style={{ textAlign: 'center', color: 'black' }} onPress={() => Alert.alert("iiii não lembra a senha kkkkk bobão!")}>
        Esqueceu sua senha?
      </Text>

      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  backgroundColor: colors.palette.neutral100,
  paddingHorizontal: spacing.lg,
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "50%",
  backgroundColor: colors.palette.neutral100,
  paddingHorizontal: spacing.lg,
  justifyContent: "flex-start",
}

const $welcomeLogo: ImageStyle = {
  height: 88,
  width: "100%",
  marginBottom: spacing.xxl,
}

const $welcomeFace: ImageStyle = {
  height: 169,
  width: 269,
  position: "absolute",
  bottom: -47,
  right: -80,
  transform: [{ scaleX: isRTL ? -1 : 1 }],
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.md,
}
