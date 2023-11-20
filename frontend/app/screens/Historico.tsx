import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Alert, Image, ImageStyle, TextStyle, TouchableOpacity, TouchableWithoutFeedback, View, ViewStyle, Dimensions, useWindowDimensions, ScrollView } from "react-native";
import { Button, Icon, Text, TextField } from "../components";
import { colors, spacing } from "../theme";
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle";
import { AppStackScreenProps } from "app/navigators";

const welcomeLogo = require("../../assets/images/FD-logo.jpg");

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"]);
 
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const buttonWidthPercentage = 0.25;
  const bottomBarHeightPercentage = 0.1; // Porcentagem da altura da tela para a barra inferior

  function setInput(value: any) {
    throw new Error("Function not implemented.");
  }

  const renderCard = (title: string, subtitle: string) => (
    <View style={$rowContainer}>
      <TouchableWithoutFeedback onPress={() => Alert.alert('Imagem clicada!')}>
        <Image style={$card} source={welcomeLogo} resizeMode="contain" />
      </TouchableWithoutFeedback>
      <View style={{ marginLeft: 10 }}>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 1 clicado!')}>
          <Text text={title} preset="bold" style={{ fontSize: 16 }} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 2 clicado!')}>
          <Text text={subtitle} style={{ fontSize: 8 }} />
        </TouchableWithoutFeedback>
      </View>
      <Button
        style={[$buttonStyle, { width: screenWidth * 0.15 }]}
        pressedStyle={[$buttonPressedStyle, { width: screenWidth * 0.15 }]}
        textStyle={$buttonTextStyle}
        pressedTextStyle={$buttonPressedTextStyle}
        onPress={() => Alert.alert("uuii!")}
      >
        <Icon color="#232938" icon="caretRight" />
      </Button>
    </View>
  );

  return (
    <>
      <View style={$container}>

        <View style={{ marginTop: 40, marginBottom: 24, marginLeft: 24, marginRight: 24 }}>
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
            )} />
        </View>
        <ScrollView style={[$bottomContainer, $bottomContainerInsets]}>
          {renderCard("Opção 1", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Opção 2", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Opção 3", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Opção 4", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Opção 5", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Opção 6", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Opção 7", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Opção 8", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Opção 9", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Opção 10", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Opção 11", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}
          {renderCard("Opção 12", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")}

        </ScrollView>
      </View><View style={[$bottomBar, { height: screenHeight * bottomBarHeightPercentage }]}>
        <Button
          style={[$bottomBarButton, { width: screenWidth * buttonWidthPercentage }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={$bottomBarButtonPressed}
          textStyle={$bottomBarButtonText}
          pressedTextStyle={$bottomBarButtonTextPressed}
          onPress={() => Alert.alert("uuii!")}
        >
          <Icon color="#232938" icon="menu" />
        </Button>
        <Button
          style={[$bottomBarButton, { width: screenWidth * buttonWidthPercentage }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={$bottomBarButtonPressed}
          textStyle={$bottomBarButtonText}
          pressedTextStyle={$bottomBarButtonTextPressed}
          onPress={() => Alert.alert("truco mareco!")}
        >
          <Icon color="#232938" icon="community" />
        </Button>
        <Button
          style={[$bottomBarButton, { width: screenWidth * buttonWidthPercentage }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={$bottomBarButtonPressed}
          textStyle={$bottomBarButtonText}
          pressedTextStyle={$bottomBarButtonTextPressed}
          onPress={() => Alert.alert("cavalo!!")}
        >
          <Icon color="#232938" icon="components" />
        </Button>
        <Button
          style={[$bottomBarButton, { width: screenWidth * buttonWidthPercentage }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={$bottomBarButtonPressed}
          textStyle={$bottomBarButtonText}
          pressedTextStyle={$bottomBarButtonTextPressed}
          onPress={() => Alert.alert("que isso meu filho, calma!")}
        >
          <Icon color="#232938" icon="view" />
        </Button>
      </View></>
  
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
