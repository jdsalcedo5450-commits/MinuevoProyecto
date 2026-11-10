import { Text, View, StyleSheet } from 'react-native';
import { supabase } from "../../lib/supabase"; 

export default function Contacto() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contacto</Text>
      <Text style={styles.subtitulo}>Déjanos un mensaje</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EBF3F9', padding: 20 },
  titulo: { fontSize: 22, color: '#1D3557', fontWeight: 'bold', marginBottom: 6 },
  subtitulo: { fontSize: 14, color: '#457B9D' }
});
