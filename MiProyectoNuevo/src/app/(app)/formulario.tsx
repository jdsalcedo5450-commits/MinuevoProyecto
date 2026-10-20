import { useState } from "react";
import {
  ActivityIndicator,
  Alert, // Importado para mostrar avisos nativos en pantalla
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { supabase } from "../../lib/supabase";

export default function Formulario() {
  // Estados del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [ocupacion, setOcupacion] = useState(""); 
  const [tipoPreparacion, setTipoPreparacion] = useState("");


  // Estado para controlar el proceso de guardado
  const [guardando, setGuardando] = useState(false);

  // Función para validar el correo electrónico
  const validarCorreo = (email: string) => {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(email);
  };

  // Función para guardar los datos en Supabase
  const guardar = async () => {
    // Validar campos vacíos
    if (
      !nombre.trim() ||
      !correo.trim() ||
      !telefono.trim() ||
      !ciudad.trim() ||
      !ocupacion.trim()
    ) {
      Alert.alert("Campos obligatorios", "Todos los campos son obligatorios");
      return;
    }

    // Validar correo
    if (!validarCorreo(correo)) {
      Alert.alert("Correo inválido", "Ingrese un correo electrónico válido");
      return;
    }

    // Validar teléfono
    if (isNaN(Number(telefono))) {
      Alert.alert("Teléfono inválido", "El teléfono debe contener solamente números");
      return;
    }

    // Validar longitud mínima del teléfono
    if (telefono.length < 7) {
      Alert.alert("Teléfono inválido", "Ingrese un número de teléfono válido");
      return;
    }

    try {
      // Activar indicador de carga
      setGuardando(true);

      // Guardar registro en Supabase
      const { data, error } = await supabase
        .from("clientes_cafe")
        .insert([
          {
            nombre: nombre.trim(),
            correo: correo.trim(),
            telefono: telefono.trim(),
            ciudad: ciudad.trim(),
            ocupacion: ocupacion.trim(),
            tipo_preparacion: tipoPreparacion, 
          },
        ])
        .select();

      // Comprobar si Supabase devolvió un error
      if (error) {
        console.log("ERROR SUPABASE:", error);
        Alert.alert("Error de base de datos", error.message);
        return;
      }

      // MODIFICACIÓN AQUÍ: Ya no llamamos a router.push para evitar romper la app
      // Mostramos una alerta de éxito limpia y vaciamos las cajas de texto
      Alert.alert(
        "¡Registro Exitoso!",
        "La información ha sido almacenada en Supabase correctamente."
      );

      // Limpiar campos del formulario para un nuevo registro
      setNombre("");
      setCorreo("");
      setTelefono("");
      setCiudad("");
      setOcupacion("");

    } catch (error) {
      console.log("ERROR INESPERADO:", error);
      Alert.alert("Fallo de red", "No fue posible guardar la información");
    } finally {
      // Desactivar indicador de carga
      setGuardando(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {/* ENCABEZADO */}
      <View style={styles.encabezado}>
        <View style={styles.iconoContainer}>
          <Image 
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkCg7ewFlQZU4-TME6hkMcNGp8YT8OjmUy2Yytttk8cw&s=10" }}
            style={styles.logoImagen}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.titulo}>LO NUESTRO</Text>

        <Text style={styles.subtitulo}>
          Registra tus datos para formar parte de nuestra comunidad tecnológica.
        </Text>
      </View>

      {/* FORMULARIO */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Datos personales</Text>

        <Text style={styles.cardDescripcion}>
          Completa todos los campos antes de guardar la información.
        </Text>

        {/* NOMBRE */}
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese Nombre"
          placeholderTextColor="#A0B2C6"
          value={nombre}
          onChangeText={setNombre}
          autoCapitalize="words"
        />

        {/* CORREO */}
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: laura@gmail.com"
          placeholderTextColor="#A0B2C6"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* TELÉFONO */}
        <Text style={styles.label}>Teléfono</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: 3001234567"
          placeholderTextColor="#A0B2C6"
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="numeric"
          maxLength={15}
        />

        {/* CIUDAD */}
        <Text style={styles.label}>Ciudad</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Pasto"
          placeholderTextColor="#A0B2C6"
          value={ciudad}
          onChangeText={setCiudad}
          autoCapitalize="words"
        />

        {/* OCUPACIÓN */}
        <Text style={styles.label}>Ocupación / Profesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Desarrollador o Estudiante"
          placeholderTextColor="#A0B2C6"
          value={ocupacion}
          onChangeText={setOcupacion}
          autoCapitalize="sentences"
        />
{/* TIPO DE PREPARACIÓN */}
<Text style={styles.label}>☕ Tipo de preparación</Text>
<View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20, marginTop: 5 }}>
  {['Espresso', 'Filtrado', 'Prensa francesa', 'Cold Brew', 'Otro'].map((metodo) => (
    <Pressable
      key={metodo}
      onPress={() => setTipoPreparacion(metodo)}
      style={{
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: tipoPreparacion === metodo ? '#2B6CB0' : '#E2E8F0',
        backgroundColor: tipoPreparacion === metodo ? '#EBF8FF' : '#FFFFFF',
      }}
    >
      <Text style={{ color: tipoPreparacion === metodo ? '#2B6CB0' : '#4A5568', fontWeight: '500' }}>
        {metodo}
      </Text>
    </Pressable>
  ))}
</View>

        {/* BOTÓN GUARDAR */}
        <Pressable
          style={({ pressed }) => [
            styles.boton,
            pressed && styles.botonPresionado,
            guardando && styles.botonDesactivado,
          ]}
          onPress={guardar}
          disabled={guardando}
        >
          {guardando ? (
            <View style={styles.cargandoContainer}>
              <ActivityIndicator color="#FFFFFF" />
              <Text style={styles.botonTexto}>Guardando...</Text>
            </View>
          ) : (
            <Text style={styles.botonTexto}>
              Guardar información
            </Text>
          )}
        </Pressable>
      </View>

      {/* INFORMACIÓN ACTUALIZADA */}
      <View style={styles.infoBox}>
        <View style={styles.infoIcono}>
          <Text style={styles.infoEmoji}>⚡</Text>
        </View>

        <View style={styles.infoContenido}>
          <Text style={styles.infoTitulo}>Innovación Segura</Text>

          <Text style={styles.infoTexto}>
            Tus datos de perfil e información técnica están protegidos y cifrados directamente a través de los servidores de Supabase.
          </Text>
        </View>
      </View>

      {/* PIE */}
      <Text style={styles.footer}>
        Tech Horizon · Plataforma de Desarrollo
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F4F9FC",
    padding: 20,
  },

  encabezado: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
  },

  iconoContainer: {
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: "#D2E4F0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    overflow: "hidden", 
  },

  logoImagen: {
    width: "100%",
    height: "100%",
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2C405E",
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 14,
    color: "#607391",
    textAlign: "center",
    marginTop: 7,
    lineHeight: 21,
    paddingHorizontal: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#D2E4F0",
    elevation: 4,
  },

  cardTitulo: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#2C405E",
    marginBottom: 4,
  },

  cardDescripcion: {
    color: "#607391",
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 20,
  },

  label: {
    color: "#3D567A",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 7,
  },

  input: {
    backgroundColor: "#FAFCFE",
    borderWidth: 1,
    borderColor: "#C5DAE8",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 13,
    marginBottom: 17,
    color: "#2C405E",
    fontSize: 15,
  },

  boton: {
    backgroundColor: "#5B92E5",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 6,
    elevation: 2,
  },

  botonPresionado: {
    opacity: 0.85,
  },

  botonDesactivado: {
    opacity: 0.65,
  },

  botonTexto: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },

  cargandoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  infoBox: {
    backgroundColor: "#D2E4F0",
    padding: 17,
    borderRadius: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  infoIcono: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  infoEmoji: {
    fontSize: 23,
    color: "#5B92E5",
  },

  infoContenido: {
    flex: 1,
  },

  infoTitulo: {
    color: "#2C405E",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 3,
  },

  infoTexto: {
    color: "#3D567A",
    fontSize: 13,
    lineHeight: 19,
  },

  footer: {
    textAlign: "center",
    color: "#607391",
    fontSize: 12,
    marginTop: 24,
    marginBottom: 10,
  },
});
