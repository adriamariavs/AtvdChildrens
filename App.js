import { Text, View, Image } from "react-native";
import TxtComponents from "./src/assets/components/TxtComponents";
import { estilos } from "./style/styles";
import ButtonComponents from "./src/assets/components/ButtonComponents";
import { TouchableOpacity } from "react-native";

export default function App() {
  // Imagem dentro do botão "BUY"
  const imagembotao = {
    uri: "https://www.dicaspraticas.com.br/wp-content/uploads/2021/05/borboletas-de-papel-para-enfeites-capa-1.jpg",
  };

  return (
    <View style={estilos.container}>
      {/* Importação dos textos */}
      <TxtComponents>
        <Text style={estilos.Text1}>Adria Maria Vieira dos Santos</Text>

        <Text style={estilos.Text2}>19/03/2007</Text>

        <Text style={estilos.Text3}>16 anos</Text>
      </TxtComponents>

      {/* Importação dos botoẽs */}
      <ButtonComponents>
        <View>
          <TouchableOpacity
            style={estilos.btn1}
            onPress={() => console.log("Você pressionou o botão Log In!")}
          >
            <Text> Log In </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Você pressionou o botão Sing In!")}
          >
            <Image source={imagembotao} style={estilos.image} />
          </TouchableOpacity>
          <TouchableOpacity
            style={estilos.btn3}
            onPress={() => console.log("Você pressionou o botão Buy!")}
          >
            <Text> Buy </Text>
          </TouchableOpacity>
        </View>
      </ButtonComponents>
    </View>
  );
}
