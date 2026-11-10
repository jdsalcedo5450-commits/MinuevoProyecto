import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { supabase } from "../../lib/supabase";
export default function Imagenes() {
  const imagenes = [
    {
      id: 1,
      titulo: "Diseño móvil",
      uri: "https://img.magnific.com/fotos-premium/tienda-yogur-congelado-2_975681-336854.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 2,
      titulo: "Inspiración",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUL30mBnYMiSJWQxliNry8x78rA1NkhXt-NlsRp5rTUyhbIQUdVqJ8v4&s=10",
    },
    {
      id: 3,
      titulo: "Tecnología",
      uri: "https://img.magnific.com/fotos-premium/equipo-cafe-azul_87720-294065.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Galería</Text>
      <Text style={styles.subtitulo}>
        Imágenes cargadas desde internet.
      </Text>

      {imagenes.map((item) => (
        <View style={styles.card} key={item.id}>
          <Image source={{ uri: item.uri }} style={styles.imagen} />
          <Text style={styles.descripcion}>{item.titulo}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F0F4F8",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2B4C7E",
  },

  subtitulo: {
    textAlign: "center",
    color: "#5A738E",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#D2E1F0",
    elevation: 3,
  },

  imagen: {
    width: "100%",
    height: 210,
  },

  descripcion: {
    padding: 14,
    color: "#344966",
    fontWeight: "600",
  },
});
