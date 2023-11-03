import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Alert, Image, ImageStyle, TextStyle, TouchableOpacity, TouchableWithoutFeedback, View, ViewStyle } from "react-native"
import {
  Button,
  Icon,
  Text,
  TextField,
} from "../components"
import { isRTL } from "../i18n"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { AppStackScreenProps } from "app/navigators"
import MapView, { Marker } from 'react-native-maps';

const welcomeLogo = require("../../assets/images/FD-logo.jpg")

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
) {

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  function setInput(value: any) {
    throw new Error("Function not implemented.")
  }

  return (
    <View style={$container}>

        <View style={{ marginTop: 80, marginBottom: 24, marginLeft: 24, marginRight: 24 }}>
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

      <View style={[$bottomContainer, $bottomContainerInsets]}>


      <View style={{ flex: 1, marginTop: 8, marginBottom: 24 }}>
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

  
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Imagem clicada!')}>
          <Image style={$card} source={welcomeLogo} resizeMode="contain" />
        </TouchableWithoutFeedback>
        <View style={{ marginLeft: 10 }}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 1 clicado!')}>
            <Text text="Trocar roteador" preset="bold" style={{ fontSize: 16 }} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 2 clicado!')}>
            <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." style={{ fontSize: 8 }} />
          </TouchableWithoutFeedback>
        </View>
        <Button style={[{ width: 50, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: 15 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("uuii!")}>
          <Icon color="#232938" icon="caretRight" />
        </Button>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16  }}>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Imagem clicada!')}>
          <Image style={$card} source={welcomeLogo} resizeMode="contain" />
        </TouchableWithoutFeedback>
        <View style={{ marginLeft: 10 }}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 1 clicado!')}>
            <Text text="Novo cabo" preset="bold" style={{ fontSize: 16 }} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 2 clicado!')}>
            <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." style={{ fontSize: 8 }} />
          </TouchableWithoutFeedback>
        </View>
        <Button style={[{ width: 50, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: 15 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("uuii!")}>
          <Icon color="#232938" icon="caretRight" />
        </Button>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16  }}>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Imagem clicada!')}>
          <Image style={$card} source={welcomeLogo} resizeMode="contain" />
        </TouchableWithoutFeedback>
        <View style={{ marginLeft: 10 }}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 1 clicado!')}>
            <Text text="Concertar Impressora" preset="bold" style={{ fontSize: 16 }} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 2 clicado!')}>
            <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." style={{ fontSize: 8 }} />
          </TouchableWithoutFeedback>
        </View>
        <Button style={[{ width: 50, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
          pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 0 }]}
          textStyle={[{ fontSize: 15 }, { color: "black" }]}
          pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("uuii!")}>
          <Icon color="#232938" icon="caretRight" />
        </Button>
      </View>

      </View>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "white", height: 70, borderTopWidth: 2, borderColor: "#999999" }}>
          <Button style={[{ width: 103, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
                pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 0 }]}
                textStyle={[{ fontSize: 15 }, { color: "black" }]}
                pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("uuii!")}><Icon color="#232938" icon="menu" /></Button>
          <Button style={[{ width: 103, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
                pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 0 }]}
                textStyle={[{ fontSize: 15 }, { color: "black" }]}
                pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("truco mareco!")}><Icon color="#232938" icon="community" /></Button>
          <Button style={[{ width: 103, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
                pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 0 }]}
                textStyle={[{ fontSize: 15 }, { color: "black" }]}
                pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("cavalo!!")}><Icon color="#232938" icon="components" /></Button>
          <Button style={[{ width: 103, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
                pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 0 }]}
                textStyle={[{ fontSize: 15 }, { color: "black" }]}
                pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("que isso meu filho, calma!")}><Icon color="#232938" icon="view" /></Button>
      </View> 
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: "white",
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "100%",
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.lg,
  justifyContent: "center",
}

const $card: ImageStyle = {
  height: "80%",
  width: "16%",
  borderWidth: 1,
  borderRadius: 50,
  borderColor: "#999999",
}