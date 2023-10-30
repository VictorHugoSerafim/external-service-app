import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Alert, Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import {
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

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
) {

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  return (
    <View style={$container}>
      <Header
          title="Home"
          leftIcon="x"
          rightIcon="settings"
          onLeftPress={() => Alert.alert("Tchau!")}
          onRightPress={() => Alert.alert("nada mais!")}
          style={{ height: 100 }}
          titleStyle={{ color: "black" }}
        />

      <View style={{ flexDirection: 'row', alignItems: 'center', height: 70 }}>
        <Button text="Seção" style={[{ width: 103, height: 70, backgroundColor: "transparent", borderWidth: 0 }]}
              pressedStyle={[{ backgroundColor: "#232938" }, { borderRadius: 60 }]}
              textStyle={[{ fontSize: 15 }, { color: "black" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("seção 1")}></Button>
        <Button text="Seção" style={[{ width: 103, height: 70, backgroundColor: "transparent", borderWidth: 0 }]}
              pressedStyle={[{ backgroundColor: "#232938" }, { borderRadius: 60 }]}
              textStyle={[{ fontSize: 15 }, { color: "black" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("seção 2")}></Button>
        <Button text="Seção" style={[{ width: 103, height: 70, backgroundColor: "transparent", borderWidth: 0 }]}
              pressedStyle={[{ backgroundColor: "#232938" }, { borderRadius: 60 }]}
              textStyle={[{ fontSize: 15 }, { color: "black" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("seção 3")}></Button>
        <Button text="Seção" style={[{ width: 103, height: 70, backgroundColor: "transparent", borderWidth: 0 }]}
              pressedStyle={[{ backgroundColor: "#232938" }, { borderRadius: 60 }]}
              textStyle={[{ fontSize: 15 }, { color: "black" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("seção 4")}></Button>
    </View>
        

      <View style={[$bottomContainer, $bottomContainerInsets]}>
       <Card
          verticalAlignment="space-between"
          RightComponent={<Icon icon="heart" color="white" onPress={() => Alert.alert("s2")} />}
          heading="Trocar roteador"
          headingStyle={{ color: "white", textAlign: "center" }}
          HeadingTextProps={{ weight: "bold" }}
          ContentComponent={<><Text preset="bold" text="Descrição" style={{ color: "white", textAlign: "center",  width: 115  }} /><Text style={{ color: "white", textAlign: "center" }} text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. " /></>}
          contentStyle={{ color: "white" }}
          ContentTextProps={{ weight: "medium" }}
          FooterComponent={<View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Button
              text="Ver tarefa"
              onPress={() => Alert.alert("Viu?")}
              style={[{ width: 150 }, { backgroundColor: "#232938" }, { borderColor: "#232938" }]}
              pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "white" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "#232938" }]}
              LeftAccessory={(props) => <Icon color="white" icon="menu" />} />
              <Button
              text="Copiar código"
              onPress={() => Alert.alert("Ctrl+c")}
              style={[{ width: 162 }, { backgroundColor: "#232938" }, { borderColor: "#232938" }]}
              pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "white" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "#232938" }]}
              LeftAccessory={(props) => <Icon color="white" icon="components" />} />
              </View>}
              footerStyle={{ color: "white" }}
              FooterTextProps={{ weight: "light" }}
              style={{ backgroundColor: "#232938" }}
        />
        <Card
          verticalAlignment="space-between"
          RightComponent={<Icon icon="heart" color="white" onPress={() => Alert.alert("s2")} />}
          heading="Novo cabo"
          headingStyle={{ color: "white", textAlign: "center" }}
          HeadingTextProps={{ weight: "bold" }}
          ContentComponent={<><Text preset="bold" text="Descrição" style={{ color: "white", textAlign: "center",  width: 115  }} /><Text style={{ color: "white", textAlign: "center" }} text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. " /></>}
          contentStyle={{ color: "white" }}
          ContentTextProps={{ weight: "medium" }}
          FooterComponent={<View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Button
              text="Ver tarefa"
              onPress={() => Alert.alert("Viu?")}
              style={[{ width: 150 }, { backgroundColor: "#232938" }, { borderColor: "#232938" }]}
              pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "white" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "#232938" }]}
              LeftAccessory={(props) => <Icon color="white" icon="menu" />} />
              <Button
              text="Copiar código"
              onPress={() => Alert.alert("Ctrl+c")}
              style={[{ width: 162 }, { backgroundColor: "#232938" }, { borderColor: "#232938" }]}
              pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "white" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "#232938" }]}
              LeftAccessory={(props) => <Icon color="white" icon="components" />} />
              </View>}
              footerStyle={{ color: "white" }}
              FooterTextProps={{ weight: "light" }}
              style={{ backgroundColor: "#232938" }} 
        />
        <Card
          verticalAlignment="space-between"
          RightComponent={<Icon icon="heart" color="white" onPress={() => Alert.alert("s2")} />}
          heading="Arrumar impressora"
          headingStyle={{ color: "white", textAlign: "center" }}
          HeadingTextProps={{ weight: "bold" }}
          ContentComponent={<><Text preset="bold" text="Descrição" style={{ color: "white", textAlign: "center",  width: 115  }} /><Text style={{ color: "white", textAlign: "center" }} text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. " /></>}
          contentStyle={{ color: "white" }}
          ContentTextProps={{ weight: "medium" }}
          FooterComponent={<View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Button
              text="Ver tarefa"
              onPress={() => Alert.alert("Viu?")}
              style={[{ width: 150 }, { backgroundColor: "#232938" }, { borderColor: "#232938" }]}
              pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "white" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "#232938" }]}
              LeftAccessory={(props) => <Icon color="white" icon="menu" />} />
              <Button
              text="Copiar código"
              onPress={() => Alert.alert("Ctrl+c")}
              style={[{ width: 162 }, { backgroundColor: "#232938" }, { borderColor: "#232938" }]}
              pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "white" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "#232938" }]}
              LeftAccessory={(props) => <Icon color="white" icon="components" />} />
              </View>}
              footerStyle={{ color: "white" }}
              FooterTextProps={{ weight: "light" }}
              style={{ backgroundColor: "#232938" }} 
        />
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#232938", height: 70 }}>
        <Button style={[{ width: 103, height: 70 }, { backgroundColor: "#232938" }, { borderColor: "#232938" }]}
              pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "white" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "#232938" }]} onPress={() => Alert.alert("uuii!")}><Icon color="white" icon="pin" /></Button>
        <Button style={[{ width: 103, height: 70 }, { backgroundColor: "#232938" }, { borderColor: "#232938" }]}
              pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "white" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "#232938" }]} onPress={() => Alert.alert("truco mareco!")}><Icon color="white" icon="bell" /></Button>
        <Button style={[{ width: 103, height: 70 }, { backgroundColor: "#232938" }, { borderColor: "#232938" }]}
              pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "white" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "#232938" }]} onPress={() => Alert.alert("cavalo!!")}><Icon color="white" icon="check" /></Button>
        <Button style={[{ width: 103, height: 70 }, { backgroundColor: "#232938" }, { borderColor: "#232938" }]}
              pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "white" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "#232938" }]} onPress={() => Alert.alert("que isso meu filho, calma!")}><Icon color="white" icon="more" /></Button>
    </View>
  </View>

  )
})

const $container: ViewStyle = {
  flex: 1,
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "100%",
  paddingHorizontal: spacing.md,
  justifyContent: "space-evenly",
}

