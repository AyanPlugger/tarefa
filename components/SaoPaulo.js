import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function SaoPaulo({navigation}) {
 return (
    <View style={styles.bloco}>
        <Text>Cidades de São Paulo</Text>

        <TouchableOpacity
            onPress={()=>navigation.navigate("Peruibe")}
        >
        <Text>
            Peruibe
        </Text>
        </TouchableOpacity>
        </View>

  );
}


const styles = StyleSheet.create({
    bloco:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});