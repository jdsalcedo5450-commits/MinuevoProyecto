import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { supabase } from "../../lib/supabase";

export default function ResultadoScreen() {
  const [registros, setRegistros] = useState<any[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let activo = true;

    const cargarRegistros = async () => {
      try {
        const { data, error } = await supabase
          .from("clientes_cafe")
          .select("*")
          .order("id", { ascending: false });

        if (error) {
          console.error("Error en Supabase:", error.message);
        } else if (activo) {
          setRegistros(data || []);
        }
      } catch (err) {
        console.error("Error de conexión:", err);
      } finally {
        if (activo) setCargando(false);
      }
    };

    cargarRegistros();

    return () => {
      activo = false;
    };
  }, []);

  if (cargando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" color="#63B3ED" />
        <Text style={styles.textoCarga}>Consultando Supabase...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>☕ MIEMBROS </Text>

      {registros.length === 0 ? (
        <Text style={styles.vacioText}>No hay registros guardados en la tabla.</Text>
      ) : (
        <FlatList
          data={registros}
          keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.nombre}>{item.nombre || "Sin nombre"}</Text>
              <View style={styles.lineaDivisoria} />
              
              <Text style={styles.detalleText}>✉️ Correo: {item.correo || "No registrado"}</Text>
              <Text style={styles.detalleText}>📱 Teléfono: {item.telefono || "No registrado"}</Text>
              <Text style={styles.detalleText}>📍 Ciudad: {item.ciudad || "No registrado"}</Text>
              
              <View style={styles.badgePreparacion}>
                <Text style={styles.preparacionText}>
                  ☕ Método: {item.tipo_preparacion || "No especificado"}
                </Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#F0F8FF", 
    padding: 18 
  },
  centro: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#F0F8FF" 
  },
  textoCarga: { 
    marginTop: 10, 
    color: "#4299E1", 
    fontWeight: "500" 
  },
  titulo: { 
    fontSize: 26, 
    fontWeight: "bold", 
    color: "#2B6CB0", 
    textAlign: "center", 
    marginBottom: 20, 
    marginTop: 10 
  },
  card: { 
    backgroundColor: "#FFFFFF", 
    padding: 18, 
    borderRadius: 14, 
    marginBottom: 12, 
    borderWidth: 1, 
    borderColor: "#EBF8FF", 
    shadowColor: "#90CDF4", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3 
  },
  nombre: { 
    fontSize: 17, 
    fontWeight: "bold", 
    color: "#2C5282", 
    marginBottom: 4 
  },
  lineaDivisoria: { 
    height: 1, 
    backgroundColor: "#E2E8F0", 
    marginBottom: 8, 
    marginTop: 2 
  },
  detalleText: { 
    fontSize: 14, 
    color: "#4A5568", 
    marginVertical: 2 
  },
  vacioText: { 
    textAlign: "center", 
    color: "#4A5568", 
    marginTop: 20, 
    fontSize: 16 
  },
  badgePreparacion: {
    backgroundColor: "#EBF8FF", 
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 8,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#BEE3F8"
  },
  preparacionText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2B6CB0" 
  }
});
