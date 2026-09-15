import { useRouter } from "expo-router";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
function OpcionMenu({
 icono,
 titulo,
 descripcion,
 onPress,
 isSmall = false, 
}: {
 icono: string;
 titulo: string;
 descripcion: string;
 onPress: () => void;
 isSmall?: boolean;
}) { return (
 <Pressable style={isSmall ? styles.cardSmall : styles.card} onPress={onPress}>
 <View style={styles.iconoCaja}>
 <Text style={styles.icono}>{icono}</Text>
 </View>
 <View style={styles.cardInfo}>
 <Text style={styles.cardTitulo}>{titulo}</Text>
 <Text style={styles.cardDescripcion}>{descripcion}</Text>
 </View>
 {!isSmall && <Text style={styles.flecha}>›</Text>}
 </Pressable>
 );
}
export default function Inicio() {
 const router = useRouter();
 return (
 <ScrollView contentContainerStyle={styles.container}>
 {/* PORTADA PRINCIPAL */}
 <View style={styles.hero}>
 <Image
 source={{
 uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d4/d0/7f/photo0jpg.jpg?w=1100&h=1100&s=1",
 }}
 style={styles.imagenHero}
 />
 <View style={styles.overlay}>
 <Text style={styles.etiqueta}>COFFEE APP</Text>
 <Text style={styles.titulo}>Coffee House</Text>
 <Text style={styles.subtitulo}>
 Descubre aromas, sabores y experiencias alrededor del café.
 </Text>
 </View>
 </View>
 {/* BIENVENIDA */}
 <View style={styles.saludoBox}>
 <View>
 <Text style={styles.saludoTitulo}>Hola, amante del café</Text>
 <Text style={styles.saludoTexto}>
 ¿Qué deseas explorar hoy?
 </Text>
 </View>
 <View style={styles.avatar}>
 <Text style={styles.avatarTexto}>☕</Text>
 </View>
 </View>
 {/* RESUMEN */}
 <View style={styles.resumen}>
 <View style={styles.resumenItem}>
 <Text style={styles.resumenNumero}>3</Text>
 <Text style={styles.resumenTexto}>Secciones</Text>
 </View><View style={styles.separador} />
 <View style={styles.resumenItem}>
 <Text style={styles.resumenNumero}>100%</Text>
 <Text style={styles.resumenTexto}>Café</Text>
 </View>
 <View style={styles.separador} />
 <View style={styles.resumenItem}>
 <Text style={styles.resumenNumero}>Expo</Text>
 <Text style={styles.resumenTexto}>Router</Text>
 </View>
 </View>
 <Text style={styles.seccionTitulo}>Explorar Coffee House</Text>
 
 {}
 <OpcionMenu
 icono="📝"
 titulo="Formulario"
 descripcion="Registra tus datos y tu preferencia de café."
 onPress={() => router.push("/formulario")}
 />

 {}
 <View style={styles.gridContainer}>
     <OpcionMenu
     icono="☕"
     titulo="Galería"
     descripcion="Explora imágenes."
     onPress={() => router.push("/imagenes")}
     isSmall={true}
     />
     <OpcionMenu
     icono="📝"
     titulo="Contacto"
     descripcion="Información básica."
     onPress={() => router.push("/contacto")}
     isSmall={true}
     />
     {}
     <OpcionMenu
     icono="📝"
     titulo="Café del día"
     descripcion="Cappuccino suave."
     onPress={() => {}}
     isSmall={true}
     />
 </View>

 <Text style={styles.footer}>
 Coffee House · Desarrollo Móvil</Text>
 </ScrollView>
 );
}
const styles = StyleSheet.create({
 container: {
 flexGrow: 1,
 backgroundColor: "hsla(205, 61%, 28%, 0.58)",
 padding: 18,
 },
 hero: {
 height: 280,
 borderRadius: 28,
 overflow: "hidden",
 marginBottom: 20,
 elevation: 6,
 },
 imagenHero: {
 width: "100%",
 height: "100%",
 },
 overlay: {
 position: "absolute",
 left: 0,
 right: 0,
 bottom: 0,
 padding: 22,
 backgroundColor: "hsla(221, 49%, 32%, 0.76)",
 },
 etiqueta: {
 color: "#FFE7EF",
 fontSize: 11,
 fontWeight: "bold",
 letterSpacing: 1.8,
 marginBottom: 6,
 },
 titulo: {
 color: "#FFFFFF",
 fontSize: 32,
 fontWeight: "bold",
 marginBottom: 6,
 },
 subtitulo: {
 color: "#eaffed",
 fontSize: 14,
 lineHeight: 21,
 },
 saludoBox: {
 backgroundColor: "#FFFFFF",
 borderRadius: 20,
 padding: 18,flexDirection: "row",
 justifyContent: "space-between",
 alignItems: "center",
 marginBottom: 16,
 elevation: 2,
 },
 saludoTitulo: {
 fontSize: 18,
 fontWeight: "bold",
 color: "#5B3A2D",
 },
 saludoTexto: {
 marginTop: 3,
 color: "#8B6A5D",
 fontSize: 14,
 },
 avatar: {
 width: 50,
 height: 50,
 borderRadius: 25,
 backgroundColor: "#F8DDE7",
 justifyContent: "center",
 alignItems: "center",
 },
 avatarTexto: {
 fontSize: 24,
 },
 resumen: {
 backgroundColor: "#FFFFFF",
 borderRadius: 20,
 paddingVertical: 16,
 flexDirection: "row",
 justifyContent: "space-around",
 alignItems: "center",
 marginBottom: 24,
 elevation: 2,
 },
 resumenItem: {
 flex: 1,
 alignItems: "center",
 },
 resumenNumero: {
 color: "#B86F7E",
 fontSize: 18,
 fontWeight: "bold",
 },
 resumenTexto: {
 color: "#8B6A5D",
 fontSize: 12,
 marginTop: 3,
 },separador: {
 width: 1,
 height: 35,
 backgroundColor: "#F1D7CF",
 },
 seccionTitulo: {
 fontSize: 21,
 fontWeight: "bold",
 color: "#5B3A2D",
 marginBottom: 14,
 },
 gridContainer: {
 flexDirection: "row",
 justifyContent: "space-between",
 width: "100%",
 marginBottom: 14,
 },
 card: {
 backgroundColor: "#FFFFFF",
 borderRadius: 20,
 padding: 16,
 marginBottom: 14,
 flexDirection: "row",
 alignItems: "center",
 borderWidth: 1,
 borderColor: "#F1DDD6",
 elevation: 2,
 },
 cardSmall: {
 backgroundColor: "#FFFFFF",
 borderRadius: 16,
 padding: 10,
 flexDirection: "column",
 alignItems: "center",
 justifyContent: "center",
 borderWidth: 1,
 borderColor: "#F1DDD6",
 elevation: 2,
 width: "31%",
 height: 155,
 },
 iconoCaja: {
 width: 56,
 height: 56,
 borderRadius: 18,
 backgroundColor: "#FBE7ED",
 justifyContent: "center",
 alignItems: "center",
 },
 icono: {
 fontSize: 25,
 },
 cardInfo: {
 flex: 1,
 alignItems: "center",
 },
 cardTitulo: {
 fontSize: 14,
 fontWeight: "bold",
 color: "#5B3A2D",
 marginTop: 6,
 marginBottom: 4,
 textAlign: "center",
 },
 cardDescripcion: {
 color: "#84675A",
 fontSize: 11,
 lineHeight: 14,
 textAlign: "center",
 },
 flecha: {
 fontSize: 30,color: "#C97C8E",
 marginLeft: 8,
 },
 destacado: {
 backgroundColor: "#F8E1E8",
 borderRadius: 22,
 padding: 18,
 flexDirection: "row",
 alignItems: "center",
 marginTop: 6,
 },
 destacadoIcono: {
 width: 52,
 height: 52,
 borderRadius: 17,
 backgroundColor: "#FFFFFF",
 justifyContent: "center",
 alignItems: "center",
 marginRight: 14,
 },
 destacadoEmoji: {
 fontSize: 25,
 },
 destacadoInfo: {
 flex: 1,
 },
 destacadoTitulo: {
 fontSize: 16,
 fontWeight: "bold",
 color: "#7A4C3A",
 marginBottom: 4,
 },
 destacadoTexto: {
 color: "#73594E",
 fontSize: 13,
 lineHeight: 19,
 },
 footer: {
 textAlign: "center",
 color: "#9B7A6E",
 fontSize: 12,
 marginTop: 24,
 marginBottom: 12,
 },
});
