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
        
      <View style={[$bottomContainer, $bottomContainerInsets]}>
       <Card
          verticalAlignment="space-between"
          RightComponent={<Icon icon="heart" color="#232938" onPress={() => Alert.alert("s2")} />}
          heading="Trocar roteador"
          headingStyle={{ color: "black", textAlign: "center" }}
          HeadingTextProps={{ weight: "bold" }}
          ContentComponent={<><Text preset="bold" text="Descrição" style={{ color: "black", textAlign: "center",  width: 115  }} /><Text style={{ color: "black", textAlign: "center" }} text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. " /></>}
          contentStyle={{ color: "black" }}
          ContentTextProps={{ weight: "medium" }}
          FooterComponent={<View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Button
              text="Ver tarefa"
              onPress={() => Alert.alert("Viu?")}
              style={[{ width: 150 }, { backgroundColor: "white" }, { borderColor: "white" }]}
              pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "black" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]}
              LeftAccessory={(props) => <Icon color="#232938" icon="menu" />} />
              <Button
              text="Copiar código"
              onPress={() => Alert.alert("Ctrl+c")}
              style={[{ width: 162 }, { backgroundColor: "white" }, { borderColor: "white" }]}
              pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "black" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]}
              LeftAccessory={(props) => <Icon color="#232938" icon="components" />} />
              </View>}
              footerStyle={{ color: "black" }}
              FooterTextProps={{ weight: "light" }}
              style={{ backgroundColor: "white" }}
        />
        <Card
          verticalAlignment="space-between"
          RightComponent={<Icon icon="heart" color="#232938" onPress={() => Alert.alert("s2")} />}
          heading="Novo cabo"
          headingStyle={{ color: "black", textAlign: "center" }}
          HeadingTextProps={{ weight: "bold" }}
          ContentComponent={<><Text preset="bold" text="Descrição" style={{ color: "black", textAlign: "center",  width: 115  }} /><Text style={{ color: "black", textAlign: "center" }} text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. " /></>}
          contentStyle={{ color: "black" }}
          ContentTextProps={{ weight: "medium" }}
          FooterComponent={<View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Button
              text="Ver tarefa"
              onPress={() => Alert.alert("Viu?")}
              style={[{ width: 150 }, { backgroundColor: "white" }, { borderColor: "white" }]}
              pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "black" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]}
              LeftAccessory={(props) => <Icon color="#232938" icon="menu" />} />
              <Button
              text="Copiar código"
              onPress={() => Alert.alert("Ctrl+c")}
              style={[{ width: 162 }, { backgroundColor: "white" }, { borderColor: "white" }]}
              pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "black" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]}
              LeftAccessory={(props) => <Icon color="#232938" icon="components" />} />
              </View>}
              footerStyle={{ color: "black" }}
              FooterTextProps={{ weight: "light" }}
              style={{ backgroundColor: "white" }} 
        />
        <Card
          verticalAlignment="space-between"
          RightComponent={<Icon icon="heart" color="#232938" onPress={() => Alert.alert("s2")} />}
          heading="Arrumar impressora"
          headingStyle={{ color: "black", textAlign: "center" }}
          HeadingTextProps={{ weight: "bold" }}
          ContentComponent={<><Text preset="bold" text="Descrição" style={{ color: "black", textAlign: "center",  width: 115  }} /><Text style={{ color: "black", textAlign: "center" }} text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. " /></>}
          contentStyle={{ color: "black" }}
          ContentTextProps={{ weight: "medium" }}
          FooterComponent={<View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Button
              text="Ver tarefa"
              onPress={() => Alert.alert("Viu?")}
              style={[{ width: 150 }, { backgroundColor: "white" }, { borderColor: "white" }]}
              pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "black" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]}
              LeftAccessory={(props) => <Icon color="#232938" icon="menu" />} />
              <Button
              text="Copiar código"
              onPress={() => Alert.alert("Ctrl+c")}
              style={[{ width: 162 }, { backgroundColor: "white" }, { borderColor: "white" }]}
              pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "black" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]}
              LeftAccessory={(props) => <Icon color="#232938" icon="components" />} />
              </View>}
              footerStyle={{ color: "black" }}
              FooterTextProps={{ weight: "light" }}
              style={{ backgroundColor: "white" }} 
        />
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "white", height: 70, borderTopWidth: 2, borderColor: "999999" }}>
        <Button style={[{ width: 103, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
              pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 0 }]}
              textStyle={[{ fontSize: 15 }, { color: "black" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("uuii!")}><Icon color="#232938" icon="pin" /></Button>
        <Button style={[{ width: 103, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
              pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 0 }]}
              textStyle={[{ fontSize: 15 }, { color: "black" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("truco mareco!")}><Icon color="#232938" icon="bell" /></Button>
        <Button style={[{ width: 103, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
              pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 0 }]}
              textStyle={[{ fontSize: 15 }, { color: "black" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("cavalo!!")}><Icon color="#232938" icon="check" /></Button>
        <Button style={[{ width: 103, height: 70 }, { backgroundColor: "white" }, { borderColor: "white", borderRadius: 0 }]}
              pressedStyle={[{ backgroundColor: "black" }, { borderRadius: 0 }]}
              textStyle={[{ fontSize: 15 }, { color: "black" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "white" }]} onPress={() => Alert.alert("que isso meu filho, calma!")}><Icon color="#232938" icon="more" /></Button>
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

