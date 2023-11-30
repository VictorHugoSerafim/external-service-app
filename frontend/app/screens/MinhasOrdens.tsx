import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Alert, Dimensions, Image, ImageStyle, ScrollView, TextStyle, TouchableOpacity, TouchableWithoutFeedback, View, ViewStyle } from "react-native";
import { Button, Icon, Text, TextField } from "../components";
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle";
import { AppStackScreenProps } from "app/navigators";
import MapView, { Marker } from 'react-native-maps';
import { spacing } from "app/theme";
import { useNavigation } from "@react-navigation/native"

const welcomeLogo = require("../../assets/images/FD-logo.jpg");

interface WelcomeScreenProps extends AppStackScreenProps<"Minhasorden"> {}

export const MinhasOrdens: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"]);
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation()

  function setInput(value: any): void {
    // Implemente sua lógica aqui
  }

  return (
    <View style={$container}>
      <View style={{ marginTop: height * 0.1, marginBottom: height * 0.03, marginLeft: width * 0.05, marginRight: width * 0.05 }}>
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
                <Icon icon="view" />
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

             <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Imagem clicada!')}>
          <Image style={$card} source={welcomeLogo} resizeMode="contain" />
        </TouchableWithoutFeedback>
        <View style={{ marginLeft: 10 }}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 1 clicado!')}>
            <Text text="Opção 1" preset="bold" style={{ fontSize: 16 }} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 2 clicado!')}>
            <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." style={{ fontSize: 8 }} />
          </TouchableWithoutFeedback>
        </View>
        <Button style={[{ width: 50, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: 15 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("teste")}>
          <Icon color="#232938" icon="caretRight" />
        </Button>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16  }}>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Imagem clicada!')}>
          <Image style={$card} source={welcomeLogo} resizeMode="contain" />
        </TouchableWithoutFeedback>
        <View style={{ marginLeft: 10 }}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 1 clicado!')}>
            <Text text="Opção 2" preset="bold" style={{ fontSize: 16 }} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 2 clicado!')}>
            <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." style={{ fontSize: 8 }} />
          </TouchableWithoutFeedback>
        </View>
        <Button style={[{ width: 50, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: 15 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("teste")}>
          <Icon color="#232938" icon="caretRight" />
        </Button>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16  }}>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Imagem clicada!')}>
          <Image style={$card} source={welcomeLogo} resizeMode="contain" />
        </TouchableWithoutFeedback>
        <View style={{ marginLeft: 10 }}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 1 clicado!')}>
            <Text text="Opção 3" preset="bold" style={{ fontSize: 16 }} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 2 clicado!')}>
            <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." style={{ fontSize: 8 }} />
          </TouchableWithoutFeedback>
        </View>
        <Button style={[{ width: 50, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: 15 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("teste")}>
          <Icon color="#232938" icon="caretRight" />
        </Button>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16  }}>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Imagem clicada!')}>
          <Image style={$card} source={welcomeLogo} resizeMode="contain" />
        </TouchableWithoutFeedback>
        <View style={{ marginLeft: 10 }}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 1 clicado!')}>
            <Text text="Opção 4" preset="bold" style={{ fontSize: 16 }} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 2 clicado!')}>
            <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." style={{ fontSize: 8 }} />
          </TouchableWithoutFeedback>
        </View>
        <Button style={[{ width: 50, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: 15 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("teste")}>
          <Icon color="#232938" icon="caretRight" />
        </Button>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16  }}>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Imagem clicada!')}>
          <Image style={$card} source={welcomeLogo} resizeMode="contain" />
        </TouchableWithoutFeedback>
        <View style={{ marginLeft: 10 }}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 1 clicado!')}>
            <Text text="Opção 5" preset="bold" style={{ fontSize: 16 }} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 2 clicado!')}>
            <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." style={{ fontSize: 8 }} />
          </TouchableWithoutFeedback>
        </View>
        <Button style={[{ width: 50, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: 15 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("teste")}>
          <Icon color="#232938" icon="caretRight" />
        </Button>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16  }}>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Imagem clicada!')}>
          <Image style={$card} source={welcomeLogo} resizeMode="contain" />
        </TouchableWithoutFeedback>
        <View style={{ marginLeft: 10 }}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 1 clicado!')}>
            <Text text="Opção 6" preset="bold" style={{ fontSize: 16 }} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 2 clicado!')}>
            <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." style={{ fontSize: 8 }} />
          </TouchableWithoutFeedback>
        </View>
        <Button style={[{ width: 50, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: 15 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("teste")}>
          <Icon color="#232938" icon="caretRight" />
        </Button>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16  }}>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Imagem clicada!')}>
          <Image style={$card} source={welcomeLogo} resizeMode="contain" />
        </TouchableWithoutFeedback>
        <View style={{ marginLeft: 10 }}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 1 clicado!')}>
            <Text text="Opção 7" preset="bold" style={{ fontSize: 16 }} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 2 clicado!')}>
            <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." style={{ fontSize: 8 }} />
          </TouchableWithoutFeedback>
        </View>
        <Button style={[{ width: 50, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: 15 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("teste")}>
          <Icon color="#232938" icon="caretRight" />
        </Button>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16  }}>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Imagem clicada!')}>
          <Image style={$card} source={welcomeLogo} resizeMode="contain" />
        </TouchableWithoutFeedback>
        <View style={{ marginLeft: 10 }}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 1 clicado!')}>
            <Text text="Opção 8" preset="bold" style={{ fontSize: 16 }} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 2 clicado!')}>
            <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." style={{ fontSize: 8 }} />
          </TouchableWithoutFeedback>
        </View>
        <Button style={[{ width: 50, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: 15 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("teste")}>
          <Icon color="#232938" icon="caretRight" />
        </Button>
      </View>


        </ScrollView>
      </View>

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
          <Icon color="#232938" icon="community" />
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
