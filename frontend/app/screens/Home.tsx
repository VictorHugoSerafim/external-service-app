import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import {
  Alert,
  Image,
  ImageStyle,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import {
  AutoImage,
  Button,
  Card,
  Header,
  Icon,
  Text,
} from "../components";
import { isRTL } from "../i18n";
import { colors, spacing } from "../theme";
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle";
import { AppStackScreenProps } from "app/navigators";
import { TouchableOpacity } from "react-native/Libraries/Components/Touchable/TouchableOpacity";
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

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

const screenWidth = Dimensions.get("window").width;

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"]);
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const buttonWidthPercentage = 0.25;
  const bottomBarHeightPercentage = 0.1; // Porcentagem da altura da tela para a barra inferior
  const navigation = useNavigation()
  return (
    <SafeAreaView style={$container}>
      <View style={$welcomeLogoContainer}>
          <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
        </View>

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

      {/* <ScrollView>
        <View style={[$bottomContainer, $bottomContainerInsets]}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <View key={index} style={$rowContainer}>
              <TouchableWithoutFeedback>
                <Image style={$card} source={welcomeLogo} resizeMode="contain" />
              </TouchableWithoutFeedback>
              <View style={$textContainer}>
                <TouchableWithoutFeedback>
                  <Text text={`Chamado ${index}`} preset="bold" style={$textStyle} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                  <Text text="Visita técnica" style={[$textStyle, { fontSize: 8 }]} />
                </TouchableWithoutFeedback>
              </View>
              <Button
                style={[$buttonStyle, { width: screenWidth * 0.15 }]}
                pressedStyle={[$buttonPressedStyle, { width: screenWidth * 0.15 }]}
                textStyle={$buttonTextStyle}
                pressedTextStyle={$buttonPressedTextStyle}
                onPress={() => navigation.navigate("OrdemServico")}
              >
                <Icon color="#232938" icon="caretRight" />
              </Button>
            </View>
          ))}
        </View>
      </ScrollView> */}

      <ScrollView>
        <View style={[$bottomContainer, $bottomContainerInsets]}>

            <View style={$rowContainer}>
              <TouchableWithoutFeedback>
                <Image style={$card} source={donaNelzaLogo} resizeMode="contain" />
              </TouchableWithoutFeedback>
              <View style={$textContainer}>
                <TouchableWithoutFeedback>
                  <Text text={`Dona Nelza Alimentos`} preset="bold" style={$textStyle} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                  <Text text="R. 18, 2548 - Fortaleza" style={[$textStyle, { fontSize: 12 }]} />
                </TouchableWithoutFeedback>
              </View>
              <Button
                style={[$buttonStyle, { width: screenWidth * 0.15 }]}
                pressedStyle={[$buttonPressedStyle, { width: screenWidth * 0.15 }]}
                textStyle={$buttonTextStyle}
                pressedTextStyle={$buttonPressedTextStyle}
                onPress={() => navigation.navigate("OrdemServico")}
              >
                <Icon color="#232938" icon="caretRight" />
              </Button>
            </View>
          
            <View style={$rowContainer}>
              <TouchableWithoutFeedback>
                <Image style={$card} source={minervaShopLogo} resizeMode="contain" />
              </TouchableWithoutFeedback>
              <View style={$textContainer}>
                <TouchableWithoutFeedback>
                  <Text text={`Minerva Foods Shop`} preset="bold" style={$textStyle} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                  <Text text="Av. 43, 110 - Centro" style={[$textStyle, { fontSize: 12 }]} />
                </TouchableWithoutFeedback>
              </View>
              <Button
                style={[$buttonStyle, { width: screenWidth * 0.15 }]}
                pressedStyle={[$buttonPressedStyle, { width: screenWidth * 0.15 }]}
                textStyle={$buttonTextStyle}
                pressedTextStyle={$buttonPressedTextStyle}
                onPress={() => navigation.navigate("OrdemServico")}
              >
                <Icon color="#232938" icon="caretRight" />
              </Button>
            </View>

            <View style={$rowContainer}>
              <TouchableWithoutFeedback>
                <Image style={$card} source={barretesaoLogo} resizeMode="contain" />
              </TouchableWithoutFeedback>
              <View style={$textContainer}>
                <TouchableWithoutFeedback>
                  <Text text={`Barretesão Loja 2`} preset="bold" style={$textStyle} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                  <Text text="Av. Antonio José Junqueira de Azevedo, 151 - Jardim Allah" style={[$textStyle, { fontSize: 12 }]} />
                </TouchableWithoutFeedback>
              </View>
              <Button
                style={[$buttonStyle, { width: screenWidth * 0.15 }]}
                pressedStyle={[$buttonPressedStyle, { width: screenWidth * 0.15 }]}
                textStyle={$buttonTextStyle}
                pressedTextStyle={$buttonPressedTextStyle}
                onPress={() => navigation.navigate("OrdemServico")}
              >
                <Icon color="#232938" icon="caretRight" />
              </Button>
            </View>
            
            <View style={$rowContainer}>
              <TouchableWithoutFeedback>
                <Image style={$card} source={mariolLogo} resizeMode="contain" />
              </TouchableWithoutFeedback>
              <View style={$textContainer}>
                <TouchableWithoutFeedback>
                  <Text text={`Mariol Embalagens`} preset="bold" style={$textStyle} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                  <Text text="Av. Mario de Oliveira, 505 - Distrito Industrial II" style={[$textStyle, { fontSize: 12 }]} />
                </TouchableWithoutFeedback>
              </View>
              <Button
                style={[$buttonStyle, { width: screenWidth * 0.15 }]}
                pressedStyle={[$buttonPressedStyle, { width: screenWidth * 0.15 }]}
                textStyle={$buttonTextStyle}
                pressedTextStyle={$buttonPressedTextStyle}
                onPress={() => navigation.navigate("OrdemServico")}
              >
                <Icon color="#232938" icon="caretRight" />
              </Button>
            </View>

            <View style={$rowContainer}>
              <TouchableWithoutFeedback>
                <Image style={$card} source={minervaLogo} resizeMode="contain" />
              </TouchableWithoutFeedback>
              <View style={$textContainer}>
                <TouchableWithoutFeedback>
                  <Text text={`Minerva Foods`} preset="bold" style={$textStyle} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                  <Text text="Av. Antônio Manso Bernardes, S/N - Chácara Minerva" style={[$textStyle, { fontSize: 12 }]} />
                </TouchableWithoutFeedback>
              </View>
              <Button
                style={[$buttonStyle, { width: screenWidth * 0.15 }]}
                pressedStyle={[$buttonPressedStyle, { width: screenWidth * 0.15 }]}
                textStyle={$buttonTextStyle}
                pressedTextStyle={$buttonPressedTextStyle}
                onPress={() => navigation.navigate("OrdemServico")}
              >
                <Icon color="#232938" icon="caretRight" />
              </Button>
            </View>

            <View style={$rowContainer}>
              <TouchableWithoutFeedback>
                <Image style={$card} source={matutoLogo} resizeMode="contain" />
              </TouchableWithoutFeedback>
              <View style={$textContainer}>
                <TouchableWithoutFeedback>
                  <Text text={`Supermercados Matuto`} preset="bold" style={$textStyle} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                  <Text text="Av. João Cavalini, 205 - Benedito Realino Corrêa" style={[$textStyle, { fontSize: 12 }]} />
                </TouchableWithoutFeedback>
              </View>
              <Button
                style={[$buttonStyle, { width: screenWidth * 0.15 }]}
                pressedStyle={[$buttonPressedStyle, { width: screenWidth * 0.15 }]}
                textStyle={$buttonTextStyle}
                pressedTextStyle={$buttonPressedTextStyle}
                onPress={() => navigation.navigate("OrdemServico")}
              >
                <Icon color="#232938" icon="caretRight" />
              </Button>
            </View>

            <View style={$rowContainer}>
              <TouchableWithoutFeedback>
                <Image style={$card} source={penhaLogo} resizeMode="contain" />
              </TouchableWithoutFeedback>
              <View style={$textContainer}>
                <TouchableWithoutFeedback>
                  <Text text={`Escritório Penha`} preset="bold" style={$textStyle} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                  <Text text="R. Vinte e Dois, 252 - Centro" style={[$textStyle, { fontSize: 12 }]} />
                </TouchableWithoutFeedback>
              </View>
              <Button
                style={[$buttonStyle, { width: screenWidth * 0.15 }]}
                pressedStyle={[$buttonPressedStyle, { width: screenWidth * 0.15 }]}
                textStyle={$buttonTextStyle}
                pressedTextStyle={$buttonPressedTextStyle}
                onPress={() => navigation.navigate("OrdemServico")}
              >
                <Icon color="#232938" icon="caretRight" />
              </Button>
            </View>

            <View style={$rowContainer}>
              <TouchableWithoutFeedback>
                <Image style={$card} source={centralLogo} resizeMode="contain" />
              </TouchableWithoutFeedback>
              <View style={$textContainer}>
                <TouchableWithoutFeedback>
                  <Text text={`Escritório Central`} preset="bold" style={$textStyle} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                  <Text text="Av. Vinte e Três, 937 - Centro" style={[$textStyle, { fontSize: 12 }]} />
                </TouchableWithoutFeedback>
              </View>
              <Button
                style={[$buttonStyle, { width: screenWidth * 0.15 }]}
                pressedStyle={[$buttonPressedStyle, { width: screenWidth * 0.15 }]}
                textStyle={$buttonTextStyle}
                pressedTextStyle={$buttonPressedTextStyle}
                onPress={() => navigation.navigate("OrdemServico")}
              >
                <Icon color="#232938" icon="caretRight" />
              </Button>
            </View>

        </View>
      </ScrollView>

    </SafeAreaView>
  );
});

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: "white",
};

const $welcomeLogoContainer: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  marginTop: 24,
};

const $bottomContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
  paddingHorizontal: spacing.md,
  justifyContent: "space-evenly",
  paddingBottom: 20, // Adicionado para dar espaço ao final do ScrollView
};

const $rowContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 15,
};

const $card: ImageStyle = {
  height: 72,
  width: "20%",
  borderWidth: 1,
  borderRadius: 50,
  borderColor: "#999999",
};

const $textContainer: ViewStyle = {
  marginLeft: 10,
  flex: 1,
};

const $textStyle: TextStyle = {
  fontSize: 16,
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
  justifyContent: "center",
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

const $welcomeLogo: ImageStyle = {
  height: 88,
  width: "100%",
  marginBottom: spacing.xxl,
}