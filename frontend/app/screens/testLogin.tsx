import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Alert, Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
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

  function setInput(value: string): void {
    throw new Error("Function not implemented.")
  }

  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
      </View>

      <View style={[$bottomContainer, $bottomContainerInsets]}>
      <TextField
        onChangeText={(value) => setInput(value)}
        LabelTextProps={{ style: { color: "black" } }}
        placeholder="Nome"
        placeholderTxOptions={{ name: "John" }}
        style={{ backgroundColor: "lightgray" }}
        containerStyle={{ backgroundColor: "white" }}
        inputWrapperStyle={{ backgroundColor: "lightgray" }}
      />
      <TextField
        onChangeText={(value) => setInput(value)}
        LabelTextProps={{ style: { color: "black" } }}
        placeholder="Senha"
        placeholderTxOptions={{ name: "John" }}
        style={{ backgroundColor: "lightgray" }}
        containerStyle={{ backgroundColor: "white" }}
        inputWrapperStyle={{ backgroundColor: "lightgray" }}
      />
      <Button
        text="Entrar"
        onPress={() => Alert.alert("aaiiinn!!")}
        style={[{ paddingVertical: 15 }, { backgroundColor: "#232938" }, { borderRadius: 30 }]}
        pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 30 }]}
        textStyle={[{ fontSize: 18 }, { color: "white" }]}
        pressedTextStyle={[{ fontSize: 18 }, { color: "#232938" }]}
      />
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
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.lg,
  justifyContent: "space-evenly",
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
