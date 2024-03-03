import { FlatList, View, TouchableOpacity } from "react-native"
import NewsCard from "./NewsCard"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Home = (props) => {
    const language = useSelector(state => state.reducer)
    const category = props.route.name.toLowerCase()
    const [articles, setArticles] = useState([])
    const getArticles = async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&language=${language}&pageSize=10&apiKey=${process.env.KEY}`)
        const result = await response.json();
        setArticles(result.articles)
    }
    useEffect(() => {
        getArticles()
    }, [language, category])
    return (
        <View style={{ marginVertical: 10 }}>
            {articles && articles.length > 0 && <FlatList
                data={articles}
                renderItem={(data) =>
                    <TouchableOpacity onPress={() => props.navigation.navigate("EachNews", { title: data.item.title, url: data.item.url })}>
                        <NewsCard data={data} />
                    </TouchableOpacity>
                }
            />}
        </View>
    )
}

export default Home