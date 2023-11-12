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
  Header,
  Icon,
  Text,
  TextField,
} from "../components";
import { isRTL } from "../i18n";
import { colors, spacing } from "../theme";
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle";
import { AppStackScreenProps } from "app/navigators";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"]);

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
          <View style={{ marginTop: heightPercentageToDP("2%"), marginBottom: heightPercentageToDP("2%") }}>
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
                    paddingRight: widthPercentageToDP("1%"),
                    marginTop: heightPercentageToDP("1%"),
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
            <View style={{ flex: 1, marginRight: widthPercentageToDP("2%") }}>
              <Text text="N° OS" preset="bold" style={{ fontSize: heightPercentageToDP("2%"), marginTop: heightPercentageToDP("1%") }} />
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
              <Text text="Tipo de serviço" preset="bold" style={{ fontSize: heightPercentageToDP("2%"), marginTop: heightPercentageToDP("1%") }} />
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

          <Text text="Informações Cliente" preset="bold" style={{ fontSize: heightPercentageToDP("2.5%"), marginTop: heightPercentageToDP("3%") }} />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, marginRight: widthPercentageToDP("2%") }}>
              <Text text="Cliente" style={{ fontSize: heightPercentageToDP("2%") }} />
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
              <Text text="CPF/CNPJ" style={{ fontSize: heightPercentageToDP("2%") }} />
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

          <Text text="Endereço" style={{ fontSize: heightPercentageToDP("2%"), marginBottom: heightPercentageToDP("0.5%") }} />
          <TextField
            onChangeText={(value) => setEndereco(value)}
            LabelTextProps={{ style: { color: "black" } }}
            placeholder=""
            style={{ backgroundColor: "white" }}
            containerStyle={[{ backgroundColor: "transparent" }]}
            inputWrapperStyle={{ backgroundColor: "white" }}
          />

          <Text text="Descrição" preset="bold" style={{ fontSize: heightPercentageToDP("2%"), marginBottom: heightPercentageToDP("0.5%") }} />
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

        <Text text="Faça a Zona de drop aqui" style={{ fontSize: heightPercentageToDP("2%") }} />

        <View style={{ flexDirection: 'row', marginTop: heightPercentageToDP("2%") }}>
          <View style={{ flex: 1, marginRight: widthPercentageToDP("2%") }}>
            <Button
              text="Pegar"
              onPress={() => Alert.alert("aaiiinn!!")}
              style={[
                { paddingVertical: heightPercentageToDP("2%") },
                { backgroundColor: "#556B2F" },
                { borderColor: "#556B2F" },
                { marginBottom: heightPercentageToDP("1%") },
                { borderRadius: heightPercentageToDP("2%") },
              ]}
              pressedStyle={[
                { backgroundColor: "white" },
                { borderRadius: heightPercentageToDP("2%") },
              ]}
              textStyle={[
                { fontSize: heightPercentageToDP("2%") },
                { color: "white" },
              ]}
              pressedTextStyle={[
                { fontSize: heightPercentageToDP("2%") },
                { color: "#556B2F" },
              ]}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              text="Devolver"
              onPress={() => Alert.alert("aaiiinn!!")}
              style={[
                { paddingVertical: heightPercentageToDP("2%") },
                { backgroundColor: "#FFBF00" },
                { borderColor: "#FFBF00" },
                { marginBottom: heightPercentageToDP("1%") },
                { borderRadius: heightPercentageToDP("2%") },
              ]}
              pressedStyle={[
                { backgroundColor: "white" },
                { borderRadius: heightPercentageToDP("2%") },
              ]}
              textStyle={[
                { fontSize: heightPercentageToDP("2%") },
                { color: "white" },
              ]}
              pressedTextStyle={[
                { fontSize: heightPercentageToDP("2%") },
                { color: "#FFBF00" },
              ]}
            />
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "white", height: heightPercentageToDP("8%"), borderTopWidth: 2, borderColor: "#999999" }}>
        <Button
          style={[
            { width: widthPercentageToDP("25%"), height: heightPercentageToDP("8%") },
            { backgroundColor: "white" },
            { borderColor: "white", borderRadius: 0 },
          ]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[
            { fontSize: heightPercentageToDP("2%") },
            { color: "black" },
          ]}
          pressedTextStyle={[
            { fontSize: heightPercentageToDP("2%") },
            { color: "white" },
          ]}
          onPress={() => Alert.alert("uuii!")}
        >
          <Icon color="#232938" icon="menu" />
        </Button>

        <Button
          style={[
            { width: widthPercentageToDP("25%"), height: heightPercentageToDP("8%") },
            { backgroundColor: "white" },
            { borderColor: "white", borderRadius: 0 },
          ]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[
            { fontSize: heightPercentageToDP("2%") },
            { color: "black" },
          ]}
          pressedTextStyle={[
            { fontSize: heightPercentageToDP("2%") },
            { color: "white" },
          ]}
          onPress={() => Alert.alert("truco mareco!")}
        >
          <Icon color="#232938" icon="community" />
        </Button>

        <Button
          style={[
            { width: widthPercentageToDP("25%"), height: heightPercentageToDP("8%") },
            { backgroundColor: "white" },
            { borderColor: "white", borderRadius: 0 },
          ]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[
            { fontSize: heightPercentageToDP("2%") },
            { color: "black" },
          ]}
          pressedTextStyle={[
            { fontSize: heightPercentageToDP("2%") },
            { color: "white" },
          ]}
          onPress={() => Alert.alert("cavalo!!")}
        >
          <Icon color="#232938" icon="components" />
        </Button>

        <Button
          style={[
            { width: widthPercentageToDP("25%"), height: heightPercentageToDP("8%") },
            { backgroundColor: "white" },
            { borderColor: "white", borderRadius: 0 },
          ]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[
            { fontSize: heightPercentageToDP("2%") },
            { color: "black" },
          ]}
          pressedTextStyle={[
            { fontSize: heightPercentageToDP("2%") },
            { color: "white" },
          ]}
          onPress={() => Alert.alert("que isso meu filho, calma!")}
        >
          <Icon color="#232938" icon="view" />
        </Button>
      </View>
    </View>
  );
});

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
};

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "100%",
  borderTopLeftRadius: heightPercentageToDP("1%"),
  borderTopRightRadius: heightPercentageToDP("1%"),
  paddingHorizontal: spacing.lg,
  justifyContent: "space-around",
  backgroundColor: "white",
};
