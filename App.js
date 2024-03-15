import { Text, View } from "react-native";
import TxtComponents from "./src/assets/components/TxtComponents";
import { estilos } from "./style/styles";
import TouchComponent from "./src/assets/components/TouchComponent";

export default function App() {
  funcBtn = () => {
    alert("Hello");
  };

  return (
    <View style={estilos.container}>
      {/* Importação dos textos */}
      <TxtComponents>
        <Text style={estilos.Text1}>Adria Maria Vieira dos Santos</Text>

        <Text style={estilos.Text2}>19/03/2007</Text>

        <Text style={estilos.Text3}>16 anos</Text>
      </TxtComponents>

      <TouchComponent text="Log In" clickBtn={funcBtn} />
    </View>
  );
}
