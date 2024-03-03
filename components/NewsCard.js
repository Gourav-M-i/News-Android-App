import { View, Image, Text, StyleSheet } from 'react-native'
const NewsCard = (props) => {
    const title = props.data.item.title
    const desc = props.data.item.description
    const date = props.data.item.publishedAt
    const img = props.data.item.urlToImage
    let deslen = Math.floor(title.length / 2)
    return (
        <View style={styles.container} >
            <View style={styles.left}>
                {img ? <Image style={styles.img} source={{ uri: img }} /> : <Image style={styles.img} source={require("../assets/blank.jpg")} />}
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>{title}</Text>
                {desc && <Text>{desc.substring(0, deslen)}...</Text>}

                <Text style={styles.date}>{date.slice(0, 10)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 150,
        borderRadius: 10,
        backgroundColor: '#FBFCFA',
        overflow: 'hidden',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 10,
        marginVertical: 10,

    },
    right:
    {
        flex: 0.7,
        paddingLeft: 9,
        paddingBottom: 10
    },
    left:
    {
        flex: 0.3,
    },
    title: { fontSize: 16, color: 'black' },
    img:
    {
        height: '100%',
        width: '100%'
    },
    date:
    {
        position: 'absolute',
        right: 0,
        bottom: 0,
        fontWeight: 'bold'
    }

})

export default NewsCard
