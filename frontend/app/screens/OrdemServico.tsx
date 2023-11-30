import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import {
  Alert,
  Image,
  ImageStyle,
  ScrollView,
  Dimensions,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import {
  Button,
  Header,
  Icon,
  Text,
  TextField,
} from "../components";
import { isRTL } from "../i18n";
import { colors, spacing } from "../theme";
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle";
import { AppStackScreenProps } from "app/navigators";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native"

interface WelcomeScreenProps extends AppStackScreenProps<"OrdemServico"> {}

export const OrdemServico: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"]);
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation()

  function setNome(value: string): void {
    throw new Error("Function not implemented.")
  }

  function setCPF(value: string): void {
    throw new Error("Function not implemented.")
  }

  function setEndereco(value: string): void {
    throw new Error("Function not implemented.")
  }

  function setInput(value: string): void {
    throw new Error("Function not implemented.")
  }

  return (
    <View style={$container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "white", height: heightPercentageToDP("10%"), borderTopWidth: 2, borderColor: "#999999" }}>
        <Button
          style={[
            { width: widthPercentageToDP("25%"), height: heightPercentageToDP("8%") },
            { backgroundColor: "white" },
            { borderColor: "white", borderRadius: 0 },
          ]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[
            { fontSize: heightPercentageToDP("2%") },
            { color: "black" },
          ]}
          pressedTextStyle={[
            { fontSize: heightPercentageToDP("2%") },
            { color: "white" },
          ]}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Icon color="#232938" icon="menu" />
        </Button>

        <Button
          style={[
            { width: widthPercentageToDP("25%"), height: heightPercentageToDP("8%") },
            { backgroundColor: "white" },
            { borderColor: "white", borderRadius: 0 },
          ]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[
            { fontSize: heightPercentageToDP("2%") },
            { color: "black" },
          ]}
          pressedTextStyle={[
            { fontSize: heightPercentageToDP("2%") },
            { color: "white" },
          ]}
          onPress={() => navigation.navigate("Minhasorden")}
        >
          <Icon color="#232938" icon="pin" />
        </Button>

        <Button
          style={[
            { width: widthPercentageToDP("25%"), height: heightPercentageToDP("8%") },
            { backgroundColor: "white" },
            { borderColor: "white", borderRadius: 0 },
          ]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[
            { fontSize: heightPercentageToDP("2%") },
            { color: "black" },
          ]}
          pressedTextStyle={[
            { fontSize: heightPercentageToDP("2%") },
            { color: "white" },
          ]}
          onPress={() => navigation.navigate("OrdemServico")}
        >
          <Icon color="#232938" icon="components" />
        </Button>

        <Button
          style={[
            { width: widthPercentageToDP("25%"), height: heightPercentageToDP("8%") },
            { backgroundColor: "white" },
            { borderColor: "white", borderRadius: 0 },
          ]}
          pressedStyle={[{ backgroundColor: "lightgray" }, { borderRadius: 0 }]}
          textStyle={[
            { fontSize: heightPercentageToDP("2%") },
            { color: "black" },
          ]}
          pressedTextStyle={[
            { fontSize: heightPercentageToDP("2%") },
            { color: "white" },
          ]}
          onPress={() => navigation.navigate("Historico")}
        >
          <Icon color="#232938" icon="view" />
        </Button>
      </View>

      <View>
        <Text text="Ordem de Serviço" style={[{ fontSize: 20, marginTop: height * 0.02, marginLeft: width * 0.3, marginRight: width * 0.05}]} />
      </View>

      <ScrollView>
      <View style={[$bottomContainer, $bottomContainerInsets]}>
      
        <View>
        
        <View style={{marginTop: height * 0.05, marginBottom: heightPercentageToDP("1%") }}>
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
                    paddingRight: widthPercentageToDP("1%"),
                    marginTop: heightPercentageToDP("1%"),
                  }}
                >
                  <View>
                    <Icon icon="lupa" />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, marginRight: widthPercentageToDP("2%") }}>
              <Text text="N° OS" preset="bold" style={{ fontSize: heightPercentageToDP("2%"), marginTop: heightPercentageToDP("1%") }} />
              <TextField
                onChangeText={(value) => setNome(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text text="Tipo de serviço" preset="bold" style={{ fontSize: heightPercentageToDP("2%"), marginTop: heightPercentageToDP("1%") }} />
              <TextField
                onChangeText={(value) => setCPF(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>
          </View>

          <Text text="Informações Cliente" preset="bold" style={{ fontSize: heightPercentageToDP("2.5%"), marginTop: heightPercentageToDP("3%") }} />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, marginRight: widthPercentageToDP("2%") }}>
              <Text text="Cliente" style={{ fontSize: heightPercentageToDP("2%") }} />
              <TextField
                onChangeText={(value) => setNome(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text text="CPF/CNPJ" style={{ fontSize: heightPercentageToDP("2%") }} />
              <TextField
                onChangeText={(value) => setCPF(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>
          </View>

          <Text text="Endereço" style={{ fontSize: heightPercentageToDP("2%"), marginBottom: heightPercentageToDP("0.5%") }} />
          <View>
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
              {/* <View>
                <Icon icon="view" />
              </View> */}
            </TouchableOpacity>
            )}
          />
          </View>
          <Text text="Descrição" preset="bold" style={{ fontSize: heightPercentageToDP("2%"), marginBottom: heightPercentageToDP("0.5%") }} />
          <TextField
            onChangeText={(value) => setEndereco(value)}
            LabelTextProps={{ style: { color: "black" } }}
            placeholder=""
            multiline={true}
            style={{ backgroundColor: "white" }}
            containerStyle={[{ backgroundColor: "transparent" }]}
            inputWrapperStyle={{ backgroundColor: "white" }}
          />
           <ScrollView style={{ flex: 1 }} contentContainerStyle={$scrollViewContent}>
          {/* Exibição dos arquivos selecionados */}


          </ScrollView>

          {/* Botão para selecionar arquivo */}
          <TouchableOpacity
            onPress={() => Alert.alert("aaiiinn!!")}
            style={{
              borderWidth: 2,
              borderColor: '#666',
              borderStyle: 'dashed',
              borderRadius: 20,
              padding: 8,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: heightPercentageToDP('4%'),
            }}
          >
            <Text style={{ fontSize: heightPercentageToDP('2%') }}>
              Arquivos
            </Text>
          </TouchableOpacity>

        <View style={{ flexDirection: 'row', marginTop: heightPercentageToDP("4%") }}>
          <View style={{ flex: 1, marginRight: widthPercentageToDP("2%") }}>
            <Button
              text="Pegar"
              onPress={() => navigation.navigate("Minhasorden")}
              style={[
                { paddingVertical: heightPercentageToDP("2%") },
                { backgroundColor: "#556B2F" },
                { borderColor: "#556B2F" },
                { marginBottom: heightPercentageToDP("1%") },
                { borderRadius: heightPercentageToDP("2%") },
              ]}
              pressedStyle={[
                { backgroundColor: "white" },
                { borderRadius: heightPercentageToDP("2%") },
              ]}
              textStyle={[
                { fontSize: heightPercentageToDP("2%") },
                { color: "white" },
              ]}
              pressedTextStyle={[
                { fontSize: heightPercentageToDP("2%") },
                { color: "#556B2F" },
              ]}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              text="Devolver"
              onPress={() => navigation.navigate("Welcome")}
              style={[
                { paddingVertical: heightPercentageToDP("2%") },
                { backgroundColor: "#FFBF00" },
                { borderColor: "#FFBF00" },
                { marginBottom: heightPercentageToDP("1%") },
                { borderRadius: heightPercentageToDP("2%") },
              ]}
              pressedStyle={[
                { backgroundColor: "white" },
                { borderRadius: heightPercentageToDP("2%") },
              ]}
              textStyle={[
                { fontSize: heightPercentageToDP("2%") },
                { color: "white" },
              ]}
              pressedTextStyle={[
                { fontSize: heightPercentageToDP("2%") },
                { color: "#FFBF00" },
              ]}
            />
          </View>
        </View>
      
        </View>
       
      </View>
      
      </ScrollView>
      
      
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
  borderTopLeftRadius: heightPercentageToDP("1%"),
  borderTopRightRadius: heightPercentageToDP("1%"),
  paddingHorizontal: spacing.lg,
  justifyContent: "space-around",
  backgroundColor: "white",
};

const $scrollViewContent: ViewStyle = {
  flexGrow: 1,
};

{/* 
import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import {
  Alert,
  Image,
  ImageStyle,
  ScrollView,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import {
  Button,
  Header,
  Icon,
  Text,
  TextField,
} from "../components";
import { isRTL } from "../i18n";
import { colors, spacing } from "../theme";
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle";
import { AppStackScreenProps } from "app/navigators";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}
export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  const [selectedFiles, setSelectedFiles] = useState<DocumentPickerResponse[]>([]);
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"]);
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
  
      // Atualiza o estado com os arquivos selecionados
      setSelectedFiles((prevFiles) => updateFiles(prevFiles, result));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // Usuário cancelou a seleção de documentos
        console.log('Cancelado');
      } else {
        // Um erro ocorreu durante a seleção de documentos
        console.error('Erro ao escolher documento', err);
      }
    }
  };
  function setNome(value: string): void {
    
  }
  function setCPF(value: string): void {
  }
  function setEndereco(value: string): void {
  }
  function setInput(value: string): void {
  }
  return (
    <View style={$container}>
      <View style={[$bottomContainer, $bottomContainerInsets]}>
        <View>
          <View style={{ marginTop: heightPercentageToDP("5%"), marginBottom: heightPercentageToDP("1%") }}>
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
                    paddingRight: widthPercentageToDP("1%"),
                    marginTop: heightPercentageToDP("1%"),
                  }}
                >
                  <View>
                    <Icon icon="view" />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, marginRight: widthPercentageToDP("2%") }}>
              <Text text="N° OS" preset="bold" style={{ fontSize: heightPercentageToDP("2%"), marginTop: heightPercentageToDP("1%") }} />

        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, marginRight: 16 }}>
              <Text text="N° OS" preset="bold" style={{ fontSize: 16, marginTop: 16 }} />
              <TextField
                onChangeText={(value) => setNome(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text text="Tipo de serviço" preset="bold" style={{ fontSize: 16, marginTop: 16  }} />
              <TextField
                onChangeText={(value) => setCPF(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>
          </View>

          <Text text="Informações Cliente" preset="bold" style={{ fontSize: 24, marginTop: 24 }} />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, marginRight: 16 }}>
              <Text text="Cliente" style={{ fontSize: 16 }} />
              <TextField
                onChangeText={(value) => setNome(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text text="CPF/CNPJ" style={{ fontSize: 16 }} />
              <TextField
                onChangeText={(value) => setCPF(value)}
                LabelTextProps={{ style: { color: "black" } }}
                placeholder=""
                style={{ backgroundColor: "white" }}
                containerStyle={[{ backgroundColor: "transparent" }]}
                inputWrapperStyle={{ backgroundColor: "white" }}
              />
            </View>
          </View>

          <Text text="Endereço" style={{ fontSize: 16, marginBottom: 8 }} />
          <TextField
            onChangeText={(value) => setEndereco(value)}
            LabelTextProps={{ style: { color: "black" } }}
            placeholder=""
            style={{ backgroundColor: "white" }}
            containerStyle={[{ backgroundColor: "transparent" }]}
            inputWrapperStyle={{ backgroundColor: "white" }}
          />

        <Text text="Descrição" preset="bold" style={{ fontSize: 16, marginBottom: 8 }} />
        <TextField
          onChangeText={(value) => setEndereco(value)}
          LabelTextProps={{ style: { color: "black" } }}
          placeholder=""
          multiline={true}
          style={{ backgroundColor: "white" }}
          containerStyle={[{ backgroundColor: "transparent" }]}
          inputWrapperStyle={{ backgroundColor: "white" }}
        />

      </View>

      <UploadButton />

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <View style={{ flex: 1, marginRight: 16 }}>
          <Button
            text="Pegar"
            onPress={() => Alert.alert("aaiiinn!!")}
            style={[{ paddingVertical: 15 }, { backgroundColor: "#556B2F" }, { borderColor: "#556B2F" }, { marginBottom: 16 }, { borderRadius: 15 }]}
            pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 15 }]}
            textStyle={[{ fontSize: 18 }, { color: "white" }]}
            pressedTextStyle={[{ fontSize: 18 }, { color: "#556B2F" }]}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            text="Devolver"
            onPress={() => Alert.alert("aaiiinn!!")}
            style={[{ paddingVertical: 15 }, { backgroundColor: "#FFBF00" }, { borderColor: "#FFBF00" }, { marginBottom: 16 }, { borderRadius: 15 }]}
            pressedStyle={[{ backgroundColor: "white" }, { borderRadius: 15 }]}
            textStyle={[{ fontSize: 18 }, { color: "white" }]}
            pressedTextStyle={[{ fontSize: 18 }, { color: "#FFBF00" }]}
          />
        </View>
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
  backgroundColor: colors.background,
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "100%",
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.lg,
  justifyContent: "space-around",
  backgroundColor: "white",
*/}
