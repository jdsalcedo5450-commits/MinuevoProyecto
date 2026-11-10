import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { supabase } from "../../lib/supabase"; 

export default function Registros() {
  const [registros, setRegistros] = useState<any[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    obtenerRegistros();
  }, []);

  const obtenerRegistros = async () => {
    try {
      setCargando(true);
      const { data, error } = await supabase
        .from("usuarios") 
        .select("*");

      if (error) {
        console.log("Error al traer datos:", error.message);
      } else if (data) {
        setRegistros(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setCargando(false);
    }
  };

  if (cargando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" color="#6C4051" />
        <Text style={styles.subtitulo}>Cargando registros...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registros</Text>
      <Text style={styles.subtitulo}>Datos guardados en Supabase</Text>

      <FlatList
        data={registros}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.valor}>{item.nombre || item.name || "Sin nombre"}</Text>
            
            <Text style={styles.label}>Preferencia:</Text>
            <Text style={styles.valor}>{item.cafe_favorito || item.tipo || "No especificado"}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.vacio}>Aún no hay ningún registro guardado en la base de datos.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7FA",
    padding: 20,
  },
  centro: {
    flex: 1,
    backgroundColor: "#FFF7FA",
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#6C4051",
    marginTop: 10,
  },
  subtitulo: {
    textAlign: "center",
    color: "#8A727C",
    marginBottom: 20,
    marginTop: 4,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#F2D5E0",
    marginBottom: 12,
    elevation: 2,
  },
  label: {
    color: "#A06C80",
    fontSize: 12,
  },
  valor: {
    color: "#563C46",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  vacio: {
    textAlign: "center",
    color: "#8A727C",
    marginTop: 40,
    fontStyle: "italic",
  },
});
