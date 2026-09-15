import { Stack } from "expo-router";

export default function Layout() {
 return (
 <Stack
 screenOptions={{
 headerStyle: {
 backgroundColor: "#AEC6CF", // 🩵 Azul pastel para la barra superior
 },
 headerTintColor: "#2C5E7A", // 💙 Azul oscuro suave para el texto del título (Inicio, Formulario, etc.)
 headerTitleStyle: {
 fontWeight: "bold",
 },
 contentStyle: {
 backgroundColor: "#F0F4F8", // 🤍 Azul grisáceo muy claro/pastel para el fondo de las pantallas
 },
 }}
 >
 <Stack.Screen
 name="index"
 options={{ title: "Inicio" }}
 />
 <Stack.Screen
 name="formulario"
 options={{ title: "Formulario" }}
 />
 <Stack.Screen
 name="resultado"
 options={{ title: "Datos registrados" }}
 />
 <Stack.Screen
 name="imagenes"
 options={{ title: "Galería" }}
 />
 <Stack.Screen
 name="contacto"
 options={{ title: "Contacto" }}
 />
 </Stack>
 );
}
