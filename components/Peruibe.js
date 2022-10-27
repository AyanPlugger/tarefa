import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Peruibe({navigation}) {
 return (
    <View style={styles.bloco}>
        <Text>Peruibe</Text>

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