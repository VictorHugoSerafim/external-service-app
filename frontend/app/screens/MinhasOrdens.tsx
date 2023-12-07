import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Alert, Dimensions, Image, ImageStyle, ScrollView, TextStyle, TouchableOpacity, useWindowDimensions, TouchableWithoutFeedback, View, ViewStyle } from "react-native";
import { Button, Icon, Text, TextField } from "../components";
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle";
import { AppStackScreenProps } from "app/navigators";
import MapView, { Marker } from 'react-native-maps';
import { colors, spacing } from "app/theme";
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
const user = require("../../assets/images/user.png")

interface WelcomeScreenProps extends AppStackScreenProps<"Minhasorden"> {}

export const MinhasOrdens: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"]);
  const { width, height } = Dimensions.get("window");
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const navigation = useNavigation()

  return (
    <View style={$container}>

      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "white", height: height * 0.1, borderTopWidth: 2, borderColor: "#999999" }}>
        <Button
          style={[{ width: width * 0.25, height: height * 0.1 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: height * 0.03 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: height * 0.03 }, { color: "white" }]}
          onPress={() => navigation.navigate("Welcome")}
          >
          <Icon color="#232938" icon="menu" />
        </Button>
        <Button
          style={[{ width: width * 0.25, height: height * 0.1 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: height * 0.03 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: height * 0.03 }, { color: "white" }]}
          onPress={() => navigation.navigate("Minhasorden")}
          >
          <Icon color="#232938" icon="pin" />
        </Button>
        <Button
          style={[{ width: width * 0.25, height: height * 0.1 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: height * 0.03 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: height * 0.03 }, { color: "white" }]}
          onPress={() => navigation.navigate("OrdemServico")}
          >
          <Icon color="#232938" icon="components" />
        </Button>
        <Button
          style={[{ width: width * 0.25, height: height * 0.1 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: height * 0.03 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: height * 0.03 }, { color: "white" }]}
          onPress={() => navigation.navigate("Historico")}
          >
          <Icon color="#232938" icon="view" />
        </Button>
        
      </View>

      <View>
        <Text text="Meus Chamados" style={[{ fontSize: 20, marginTop: height * 0.02, marginLeft: width * 0.3, marginRight: width * 0.05}]} />
      </View>

      <View style={{ marginTop: height * 0.05, marginBottom: height * 0.03, marginLeft: width * 0.05, marginRight: width * 0.05 }}>
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
                paddingRight: width * 0.02,
                marginTop: height * 0.01,
              }}
            >
              <View>
                <Icon icon="lupa" />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={[$bottomContainer, $bottomContainerInsets, { marginBottom: height * 0.02 }]}>
        <View style={{ flex: 1, marginTop: height * 0.01, marginBottom: height * 0.03 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: -20.551981972192216,
              longitude: -48.566154079319375,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
              title="Marker Title"
              description="Marker Description"
            />
          </MapView>
        </View>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={$scrollViewContent}>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16,}}>
          <TouchableWithoutFeedback>
            <Image style={$card} source={user} resizeMode="contain" />
          </TouchableWithoutFeedback>
          <View style={{ marginLeft: 10 }}>
            <TouchableWithoutFeedback>
              <Text text="Jose Alves Pereira" preset="bold" style={{ fontSize: 16 }} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text text="Buscar PC para formatar                        " style={{ fontSize: 12,  alignSelf: 'flex-start'}} />
            </TouchableWithoutFeedback>
          </View>
          <Button style={[{ width: 50, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
            pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
            textStyle={[{ fontSize: 15 }, { color: "black" }]}
            pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => navigation.navigate("OrdemServico")}>
            <Icon color="#232938" icon="caretRight" />
          </Button>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16,}}>
          <TouchableWithoutFeedback>
            <Image style={$card} source={user} resizeMode="contain" />
          </TouchableWithoutFeedback>
          <View style={{ marginLeft: 10 }}>
            <TouchableWithoutFeedback>
              <Text text="Rodrigo da Silva " preset="bold" style={{ fontSize: 16 }} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text text="Ativar pacote Office                                 " style={{ fontSize: 12,  alignSelf: 'flex-start'}} />
            </TouchableWithoutFeedback>
          </View>
          <Button style={[{ width: 50, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
            pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
            textStyle={[{ fontSize: 15 }, { color: "black" }]}
            pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => navigation.navigate("OrdemServico")}>
            <Icon color="#232938" icon="caretRight" />
          </Button>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16,}}>
          <TouchableWithoutFeedback>
            <Image style={$card} source={user} resizeMode="contain" />
          </TouchableWithoutFeedback>
          <View style={{ marginLeft: 10 }}>
            <TouchableWithoutFeedback>
              <Text text="Thomas Turbano" preset="bold" style={{ fontSize: 16 }} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text text="Entregar notebook                                   " style={{ fontSize: 12,  alignSelf: 'flex-start'}} />
            </TouchableWithoutFeedback>
          </View>
          <Button style={[{ width: 50, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
            pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
            textStyle={[{ fontSize: 15 }, { color: "black" }]}
            pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => navigation.navigate("OrdemServico")}>
            <Icon color="#232938" icon="caretRight" />
          </Button>
        </View>

      {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16  }}>
        <TouchableWithoutFeedback>
          <Image style={$card} source={welcomeLogo} resizeMode="contain" />
        </TouchableWithoutFeedback>
        <View style={{ marginLeft: 10 }}>
          <TouchableWithoutFeedback>
            <Text text="Chamado 2" preset="bold" style={{ fontSize: 16 }} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." style={{ fontSize: 8 }} />
          </TouchableWithoutFeedback>
        </View>
        <Button style={[{ width: 50, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: 15 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => navigation.navigate("OrdemServico")}>
          <Icon color="#232938" icon="caretRight" />
        </Button>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16  }}>
        <TouchableWithoutFeedback>
          <Image style={$card} source={welcomeLogo} resizeMode="contain" />
        </TouchableWithoutFeedback>
        <View style={{ marginLeft: 10 }}>
          <TouchableWithoutFeedback>
            <Text text="Chamado 3" preset="bold" style={{ fontSize: 16 }} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." style={{ fontSize: 8 }} />
          </TouchableWithoutFeedback>
        </View>
        <Button style={[{ width: 50, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: 15 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => navigation.navigate("OrdemServico")}>
          <Icon color="#232938" icon="caretRight" />
        </Button>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16  }}>
        <TouchableWithoutFeedback>
          <Image style={$card} source={welcomeLogo} resizeMode="contain" />
        </TouchableWithoutFeedback>
        <View style={{ marginLeft: 10 }}>
          <TouchableWithoutFeedback>
            <Text text="Chamado 4" preset="bold" style={{ fontSize: 16 }} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." style={{ fontSize: 8 }} />
          </TouchableWithoutFeedback>
        </View>
        <Button style={[{ width: 50, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: 15 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => navigation.navigate("OrdemServico")}>
          <Icon color="#232938" icon="caretRight" />
        </Button>
      </View> */}


        </ScrollView>
      </View>


    </View>
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
  justifyContent: "center",
};

const $card: ImageStyle = {
  height: "80%",
  width: "16%",
  borderWidth: 1,
  borderRadius: 50,
  borderColor: "#999999",
};

const $scrollViewContent: ViewStyle = {
  flexGrow: 1,
};