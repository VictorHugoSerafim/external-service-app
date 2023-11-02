import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { Alert, Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import {
  Button,
  Header,
  Icon,
  Text,
  TextField,
} from "../components"
import { isRTL } from "../i18n"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { AppStackScreenProps } from "app/navigators"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
) {

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  function setNome(value: string): void {
    throw new Error("Function not implemented.")
  }

  function setCPF(value: string): void {
    throw new Error("Function not implemented.")
  }

  function setEndereco(value: string): void {
    throw new Error("Function not implemented.")
  }

  return (
    <View style={$container}>
      <Header
          title="Ordem de Serviço"
          leftIcon="back"
          rightIcon="settings"
          onLeftPress={() => Alert.alert("Voltou!")}
          onRightPress={() => Alert.alert("nada mais!")}
          style={{ height: 100 }}
          titleStyle={{ color: "black" }}
        />

      <View style={[$bottomContainer, $bottomContainerInsets]}>
        
        <View>
          <Text text="Informações Gerais" preset="bold" style={{ fontSize: 24 }} />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, marginRight: 16 }}>
              <Text text="Cliente" style={{ fontSize: 16 }} />
              <TextField
                onChangeText={(value) => setNome(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                placeholderTxOptions={{ name: "John" }}
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text text="CPF/CNPJ" style={{ fontSize: 16 }} />
              <TextField
                onChangeText={(value) => setCPF(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                placeholderTxOptions={{ name: "John" }}
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>
          </View>

          <Text text="Endereço" style={{ fontSize: 16, marginBottom: 8 }} />
          <TextField
            onChangeText={(value) => setEndereco(value)}
            LabelTextProps={{ style: { color: "black" } }}
            placeholder=""
            placeholderTxOptions={{ name: "John" }}
            style={{ backgroundColor: "white" }}
            containerStyle={[{ backgroundColor: "transparent" }]}
            inputWrapperStyle={{ backgroundColor: "white" }}
          />
          <Text text="Técnico" preset="bold" style={{ fontSize: 24,  marginTop: 16 }} />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, marginRight: 16 }}>
              <Text text="Nome" style={{ fontSize: 16 }} />
              <TextField
                onChangeText={(value) => setNome(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                placeholderTxOptions={{ name: "John" }}
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text text="Cargo" style={{ fontSize: 16 }} />
              <TextField
                onChangeText={(value) => setCPF(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                placeholderTxOptions={{ name: "John" }}
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, marginRight: 16 }}>
              <Text text="Veículo" style={{ fontSize: 16, marginBottom: 8 }} />
              <TextField
                onChangeText={(value) => setEndereco(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                placeholderTxOptions={{ name: "John" }}
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text text="Telefone" style={{ fontSize: 16, marginBottom: 8 }} />
              <TextField
                onChangeText={(value) => setEndereco(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                placeholderTxOptions={{ name: "John" }}
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>
          </View>
          <View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, marginRight: 16 }}>
              <Text text="Tipo de Serviço" preset="bold" style={{ fontSize: 16 }} />
              <TextField
                onChangeText={(value) => setNome(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                placeholderTxOptions={{ name: "John" }}
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text text="Protocolo" preset="bold" style={{ fontSize: 16 }} />
              <TextField
                onChangeText={(value) => setCPF(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                placeholderTxOptions={{ name: "John" }}
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>
          </View>
        </View>

        <Text text="Descrição" preset="bold" style={{ fontSize: 16, marginBottom: 8 }} />
        <TextField
          onChangeText={(value) => setEndereco(value)}
          LabelTextProps={{ style: { color: "black" } }}
          placeholder=""
          multiline={true}
          placeholderTxOptions={{ name: "John" }}
          style={{ backgroundColor: "white" }}
          containerStyle={[{ backgroundColor: "transparent" }]}
          inputWrapperStyle={{ backgroundColor: "white" }}
        />

      </View>

      <Button
        text="N°264649"
        onPress={() => Alert.alert("aaiiinn!!")}
        style={[{ paddingVertical: 15 }, { backgroundColor: "#437ED7" }, { marginBottom: 16 }]}
        pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 30 }]}
        textStyle={[{ fontSize: 18 }, { color: "white" }]}
        pressedTextStyle={[{ fontSize: 18 }, { color: "#437ED7" }]}
      />

      </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#232938", height: 70 }}>
          <Button style={[{ width: 103, height: 70 }, { backgroundColor: "#232938" }, { borderColor: "#232938" }]}
                pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 20 }]}
                textStyle={[{ fontSize: 15 }, { color: "white" }]}
                pressedTextStyle={[{ fontSize: 15 }, { color: "#232938" }]} onPress={() => Alert.alert("uuii!")}><Icon color="white" icon="menu" /></Button>
          <Button style={[{ width: 103, height: 70 }, { backgroundColor: "#232938" }, { borderColor: "#232938" }]}
                pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 20 }]}
                textStyle={[{ fontSize: 15 }, { color: "white" }]}
                pressedTextStyle={[{ fontSize: 15 }, { color: "#232938" }]} onPress={() => Alert.alert("truco mareco!")}><Icon color="white" icon="community" /></Button>
          <Button style={[{ width: 103, height: 70 }, { backgroundColor: "#232938" }, { borderColor: "#232938" }]}
                pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 20 }]}
                textStyle={[{ fontSize: 15 }, { color: "white" }]}
                pressedTextStyle={[{ fontSize: 15 }, { color: "#232938" }]} onPress={() => Alert.alert("cavalo!!")}><Icon color="white" icon="components" /></Button>
          <Button style={[{ width: 103, height: 70 }, { backgroundColor: "#232938" }, { borderColor: "#232938" }]}
                pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 20 }]}
                textStyle={[{ fontSize: 15 }, { color: "white" }]}
                pressedTextStyle={[{ fontSize: 15 }, { color: "#232938" }]} onPress={() => Alert.alert("que isso meu filho, calma!")}><Icon color="white" icon="view" /></Button>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "100%",
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.lg,
  justifyContent: "space-around",
}
