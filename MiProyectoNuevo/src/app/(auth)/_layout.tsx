import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#EBF3F9' }, // Fondo de la barra superior en azul pastel claro
        headerTintColor: '#1D3557',                 // Color del título ("Crear cuenta") y de la flecha de volver
        headerShadowVisible: false,                 // Elimina la línea divisoria inferior para un diseño más limpio
      }}
    >
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="registro" options={{ title: "Crear cuenta" }} />
    </Stack>
  );
}
