import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Alert, Image, ImageStyle, TextStyle, TouchableOpacity, TouchableWithoutFeedback, View, ViewStyle, Dimensions, useWindowDimensions, ScrollView } from "react-native";
import { Button, Icon, Text, TextField } from "../components";
import { colors, spacing } from "../theme";
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle";
import { AppStackScreenProps } from "app/navigators";
import { useNavigation } from "@react-navigation/native"

// const welcomeLogo = require("../../assets/images/FD-logo.jpg");
const welcomeLogo = require("../../assets/images/barretech-logo.png");
const donaNelzaLogo = require("../../assets/images/dona-nelza.png");
const barretesaoLogo = require("../../assets/images/barretesao.png");
const mariolLogo = require("../../assets/images/mariol.png");
const minervaShopLogo = require("../../assets/images/minerva-shop.png");
const minervaLogo = require("../../assets/images/minerva.png");
const matutoLogo = require("../../assets/images/matuto.png");
const penhaLogo = require("../../assets/images/escritorio-penha.png")
const centralLogo = require("../../assets/images/escritorio-central.png")

interface WelcomeScreenProps extends AppStackScreenProps<"Historico"> {}

export const Historico: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"]);
 
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const buttonWidthPercentage = 0.25;
  const bottomBarHeightPercentage = 0.1; // Porcentagem da altura da tela para a barra inferior
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation()
  
  function setInput(value: any) {
  }

  const renderCard = (title: string, subtitle: string) => (
    <View style={$rowContainer}>
      <TouchableWithoutFeedback>
        <Image style={$card} source={welcomeLogo} resizeMode="contain" />
      </TouchableWithoutFeedback>
      <View style={{ marginLeft: 10 }}>
        <TouchableWithoutFeedback>
          <Text text={title} preset="bold" style={{ fontSize: 16 }} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text text={subtitle} style={{ fontSize: 8 }} />
        </TouchableWithoutFeedback>
      </View>
      <Button
        style={[$buttonStyle, { width: screenWidth * 0.15 }]}
        pressedStyle={[$buttonPressedStyle, { width: screenWidth * 0.15 }]}
        textStyle={$buttonTextStyle}
        pressedTextStyle={$buttonPressedTextStyle}
      >
        <Icon color="#232938" icon="view" />
      </Button>
    </View>
  );

  return (
    <>
      <View style={$container}>
      <View style={[$bottomBar, { height: screenHeight * bottomBarHeightPercentage }]}>
      <Button
            style={[$bottomBarButton, { width: screenWidth * buttonWidthPercentage }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
            pressedStyle={$bottomBarButtonPressed}
            textStyle={$bottomBarButtonText}
            pressedTextStyle={$bottomBarButtonTextPressed}
            onPress={() => navigation.navigate("Welcome")}
          >
            <Icon color="#232938" icon="menu" />
          </Button>
          <Button
            style={[$bottomBarButton, { width: screenWidth * buttonWidthPercentage }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
            pressedStyle={$bottomBarButtonPressed}
            textStyle={$bottomBarButtonText}
            pressedTextStyle={$bottomBarButtonTextPressed}
            onPress={() => navigation.navigate("Minhasorden")}
          >
            <Icon color="#232938" icon="pin" />
          </Button>
          <Button
            style={[$bottomBarButton, { width: screenWidth * buttonWidthPercentage }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
            pressedStyle={$bottomBarButtonPressed}
            textStyle={$bottomBarButtonText}
            pressedTextStyle={$bottomBarButtonTextPressed}
            onPress={() => navigation.navigate("OrdemServico")}
          >
            <Icon color="#232938" icon="components" />
          </Button>
          <Button
            style={[$bottomBarButton, { width: screenWidth * buttonWidthPercentage }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
            pressedStyle={$bottomBarButtonPressed}
            textStyle={$bottomBarButtonText}
            pressedTextStyle={$bottomBarButtonTextPressed}
            onPress={() => navigation.navigate("Historico")}
          >
            <Icon color="#232938" icon="view" />
          </Button>
      </View>

      <View>
        <Text text="Ordens Finalizadas" style={[{ fontSize: 20, marginTop: height * 0.02, marginLeft: width * 0.3, marginRight: width * 0.05}]} />
      </View>

        <View style={{ marginTop: height * 0.05, marginBottom: 24, marginLeft: 24, marginRight: 24 }}>
          <TextField
            onChangeText={(value) => setInput(value)}
            LabelTextProps={{ style: { color: "black" } }}
            placeholder=""
            style={{ backgroundColor: "white" }}
            containerStyle={[{ backgroundColor: "transparent" }]}
            inputWrapperStyle={{ backgroundColor: "white" }}
            RightAccessory={() => (
              <TouchableOpacity
                style={{
                  paddingRight: 8,
                  marginTop: 8,
                }}
              >
                <View>
                  <Icon icon="lupa" />
                </View>
              </TouchableOpacity>
            )} />
        </View>
        <ScrollView style={[$bottomContainer, $bottomContainerInsets]}>
          {renderCard("Chamado Finalizado 1", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Chamado Finalizado 2", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Chamado Finalizado 3", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Chamado Finalizado 4", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Chamado Finalizado 5", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Chamado Finalizado 6", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Chamado Finalizado 7", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Chamado Finalizado 8", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Chamado Finalizado 9", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Chamado Finalizado 10", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Chamado Finalizado 11", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Chamado Finalizado 12", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}

        </ScrollView>
      </View>
      
      </>
  
  );
});

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: "white",
};

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "100%",
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.lg,
};

const $rowContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 16,
};

const $card: ImageStyle = {
  height: "80%",
  width: "16%",
  borderWidth: 1,
  borderRadius: 50,
  borderColor: "#999999",
};

const $buttonStyle: ViewStyle = {
  width: 50,
  height: 70,
  backgroundColor: "white",
  borderColor: "white",
  borderRadius: 0,
};

const $buttonPressedStyle: ViewStyle = {
  backgroundColor: "lightgray",
  borderRadius: 0,
};

const $buttonTextStyle: TextStyle = {
  fontSize: 15,
  color: "black",
};

const $buttonPressedTextStyle: TextStyle = {
  fontSize: 15,
  color: "white",
};

// Estilos da barra inferior
const $bottomBar: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "white",
  height: 70,
  borderTopWidth: 2,
  borderColor: "#999999",
};

const $bottomBarButton: ViewStyle = {
  flex: 1,
  height: "100%",
  alignItems: "center",
};

const $bottomBarButtonPressed: ViewStyle = {
  backgroundColor: "lightgray",
  borderColor: "white",
  borderRadius: 0,
};

const $bottomBarButtonText: TextStyle = {
  fontSize: 15,
  color: "black",
};

const $bottomBarButtonTextPressed: TextStyle = {
  fontSize: 15,
  color: "white",
};
