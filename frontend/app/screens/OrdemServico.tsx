import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { Alert, Image, ImageStyle, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
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
import UploadButton from "app/components/UploadButton"
import { useNavigation } from "@react-navigation/native"

interface WelcomeScreenProps extends AppStackScreenProps<"OrdemServico"> {}

export const OrdemServico: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
) {

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  const navigation = useNavigation()

  function setNome(value: string): void {
  }

  function setCPF(value: string): void {
  }

  function setEndereco(value: string): void {
  }

  function setInput(value: string): void {
  }

  return (
    <View style={$container}>
      <View style={[$bottomContainer, $bottomContainerInsets]}>
        
        <View>

          <View style={{ marginTop: 20, marginBottom: 20 }}>
          <TextField
            onChangeText={(value) => setInput(value)}
            LabelTextProps={{ style: { color: "black" } }}
            placeholder=""
            style={{ backgroundColor: "white" }}
            containerStyle={[{ backgroundColor: "transparent" }]}
            inputWrapperStyle={{ backgroundColor: "white" }}
            RightAccessory={() => (
              <TouchableOpacity
              onPress={() => Alert.alert("Olha lá em!")}
              style={{
                paddingRight: 8,
                marginTop: 8,
              }}
            >
              <View>
                <Icon icon="view" />
              </View>
            </TouchableOpacity>
            )}
          />
          </View>

        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, marginRight: 16 }}>
              <Text text="N° OS" preset="bold" style={{ fontSize: 16, marginTop: 16 }} />
              <TextField
                onChangeText={(value) => setNome(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text text="Tipo de serviço" preset="bold" style={{ fontSize: 16, marginTop: 16  }} />
              <TextField
                onChangeText={(value) => setCPF(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>
          </View>

          <Text text="Informações Cliente" preset="bold" style={{ fontSize: 24, marginTop: 24 }} />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, marginRight: 16 }}>
              <Text text="Cliente" style={{ fontSize: 16 }} />
              <TextField
                onChangeText={(value) => setNome(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
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
            style={{ backgroundColor: "white" }}
            containerStyle={[{ backgroundColor: "transparent" }]}
            inputWrapperStyle={{ backgroundColor: "white" }}
          />

        <Text text="Descrição" preset="bold" style={{ fontSize: 16, marginBottom: 8 }} />
        <TextField
          onChangeText={(value) => setEndereco(value)}
          LabelTextProps={{ style: { color: "black" } }}
          placeholder=""
          multiline={true}
          style={{ backgroundColor: "white" }}
          containerStyle={[{ backgroundColor: "transparent" }]}
          inputWrapperStyle={{ backgroundColor: "white" }}
        />

      </View>

      <UploadButton />

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <View style={{ flex: 1, marginRight: 16 }}>
          <Button
            text="Pegar"
            onPress={() => Alert.alert("aaiiinn!!")}
            style={[{ paddingVertical: 15 }, { backgroundColor: "#556B2F" }, { borderColor: "#556B2F" }, { marginBottom: 16 }, { borderRadius: 15 }]}
            pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 15 }]}
            textStyle={[{ fontSize: 18 }, { color: "white" }]}
            pressedTextStyle={[{ fontSize: 18 }, { color: "#556B2F" }]}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            text="Devolver"
            onPress={() => Alert.alert("aaiiinn!!")}
            style={[{ paddingVertical: 15 }, { backgroundColor: "#FFBF00" }, { borderColor: "#FFBF00" }, { marginBottom: 16 }, { borderRadius: 15 }]}
            pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 15 }]}
            textStyle={[{ fontSize: 18 }, { color: "white" }]}
            pressedTextStyle={[{ fontSize: 18 }, { color: "#FFBF00" }]}
          />
        </View>
      </View>

      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "white", height: 70, borderTopWidth: 2, borderColor: "#999999" }}>
          <Button style={[{ width: 103, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
                pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 0 }]}
                textStyle={[{ fontSize: 15 }, { color: "black" }]}
                pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => navigation.navigate("Welcome")}><Icon color="#232938" icon="menu" /></Button>
          <Button style={[{ width: 103, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
                pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 0 }]}
                textStyle={[{ fontSize: 15 }, { color: "black" }]}
                pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => navigation.navigate("Historico")}><Icon color="#232938" icon="community" /></Button>
          <Button style={[{ width: 103, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
                pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 0 }]}
                textStyle={[{ fontSize: 15 }, { color: "black" }]}
                pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => navigation.navigate("Minhasorden")}><Icon color="#232938" icon="components" /></Button>
          <Button style={[{ width: 103, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
                pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 0 }]}
                textStyle={[{ fontSize: 15 }, { color: "black" }]}
                pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => navigation.navigate("OrdemServico")}><Icon color="#232938" icon="view" /></Button>
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
  backgroundColor: "white",
}
