import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Alert, Image, ImageStyle, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from "react-native"
import {
  AutoImage,
  Button,
  Card,
  Header,
  Icon,
  Text,
} from "../components"
import { isRTL } from "../i18n"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { AppStackScreenProps } from "app/navigators"
import { TouchableOpacity } from "react-native/Libraries/Components/Touchable/TouchableOpacity"

const welcomeLogo = require("../../assets/images/FD-logo.jpg")

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
) {

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  return (
    <View style={$container}>
      
        <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />

        
      <View style={[$bottomContainer, $bottomContainerInsets]}>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
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

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
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

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
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

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Imagem clicada!')}>
          <Image style={$card} source={welcomeLogo} resizeMode="contain" />
        </TouchableWithoutFeedback>
        <View style={{ marginLeft: 10 }}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 1 clicado!')}>
            <Text text="Casa da coxinha" preset="bold" style={{ fontSize: 16 }} />
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

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Imagem clicada!')}>
          <Image style={$card} source={welcomeLogo} resizeMode="contain" />
        </TouchableWithoutFeedback>
        <View style={{ marginLeft: 10 }}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 1 clicado!')}>
            <Text text="Dona Nelza" preset="bold" style={{ fontSize: 16 }} />
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

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Imagem clicada!')}>
          <Image style={$card} source={welcomeLogo} resizeMode="contain" />
        </TouchableWithoutFeedback>
        <View style={{ marginLeft: 10 }}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Texto 1 clicado!')}>
            <Text text="BarreTec" preset="bold" style={{ fontSize: 16 }} />
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
  backgroundColor: colors.palette.neutral100,
  paddingHorizontal: spacing.md,
  justifyContent: "space-evenly",
}

const $welcomeLogo: ImageStyle = {
  height: 88,
  width: "100%",
  marginTop: 72,
  marginBottom: spacing.xxl,
}

const $card: ImageStyle = {
  height: "80%",
  width: "16%",
  borderWidth: 1,
  borderRadius: 50,
  borderColor: "#999999",
}