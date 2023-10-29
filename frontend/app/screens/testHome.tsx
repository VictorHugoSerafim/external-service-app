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
      <View style={$topContainer}>
        <Header
          title="Home"
          leftIcon="back"
          rightIcon="more"
          onLeftPress={() => Alert.alert("voltei em!")}
          onRightPress={() => Alert.alert("nada mais!")}
          style={{ height: 100 }}
          titleStyle={{ color: "black" }}
        />
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
              style={[{ width: 162 }, { backgroundColor: "#232938" }, { borderColor: "#232938" }]}
              pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "white" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "#232938" }]}
              LeftAccessory={(props) => <Icon color="white" icon="more" />} />
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
              style={[{ width: 162 }, { backgroundColor: "#232938" }, { borderColor: "#232938" }]}
              pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 20 }]}
              textStyle={[{ fontSize: 15 }, { color: "white" }]}
              pressedTextStyle={[{ fontSize: 15 }, { color: "#232938" }]}
              LeftAccessory={(props) => <Icon color="white" icon="more" />} />
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
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button onPress={() => Alert.alert("Ctrl+c")}><Icon icon="menu" /></Button>
        <Button onPress={() => Alert.alert("Ctrl+c")}><Icon icon="bell" /></Button>
        <Button onPress={() => Alert.alert("Ctrl+c")}><Icon icon="check" /></Button>
        <Button onPress={() => Alert.alert("Ctrl+c")}><Icon icon="more" /></Button>
        </View>
    </View>
  </View>

  )
})

const $container: ViewStyle = {
  flex: 1,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "5%",
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "95%",
  paddingHorizontal: spacing.md,
  justifyContent: "space-evenly",
}

