import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#AEC6CF", // 🩵 Azul pastel para la barra superior
        },
        headerTintColor: "#2C5E7A", // 💙 Azul oscuro suave para el texto del título
        headerTitleStyle: {
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: "#F0F4F8", // 🤍 Azul grisáceo muy claro/pastel para el fondo
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Inicio" }} />
      <Stack.Screen name="formulario" options={{ title: "Formulario" }} />
      <Stack.Screen name="resultado" options={{ title: "Datos registrados" }} />
      <Stack.Screen name="registros" options={{ title: "Coffee Lovers" }} />
      <Stack.Screen name="imagenes" options={{ title: "Galería" }} />
      <Stack.Screen name="contacto" options={{ title: "Contacto" }} />
    </Stack>
  );
}
