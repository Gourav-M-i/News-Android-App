import React from 'react'
import { Button, Share } from 'react-native';
import { WebView } from 'react-native-webview';
const EachNews = (props) => {
    const title = props.route.params.title;
    props.navigation.setOptions({ title: title, headerRight: () => <Button title='share' onPress={onShare} /> });
    const url = props.route.params.url
    const onShare = async () => {
        const result = await Share.share({ message: url });
    };
    return (
        <>
            <WebView source={{ uri: url }} style={{ flex: 1 }} />
        </>
    )
}



export default EachNews
