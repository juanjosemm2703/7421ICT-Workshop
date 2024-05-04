import { useState } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';


export default function ImageLoading({ url, width, height}) {
    const [loading, setLoading] = useState(true);
    function onLoadStart() {
        setLoading(true);
    }

    function onLoadEnd() {
        setLoading(false);
    }

    return (
        <View style={{width:width, height:height}}>
            <Image
                source={{ uri: url }}
                style={{ width: width, height: height}}
                onLoadStart={onLoadStart}
                onLoadEnd={onLoadEnd}
            />
            {
                loading && (            
                        <ActivityIndicator style={styles.activityIndicator} size="small" color="#007AFF" />)
            }
        </View>

    )
}

const styles = StyleSheet.create({
    activityIndicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }
})