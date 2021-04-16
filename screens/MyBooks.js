import React, { Component } from 'react';
import { View, FlatList, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native';

export default class MyBooks extends Component {
    constructor(props) {
        super(props)
        this.state = { Books: [], isLoading: true }
    }
    componentDidMount() {
        const url = 'https://gist.githubusercontent.com/vuphong0x/52f25c3bfba69b10240ab7328e5d09b9/raw/4df8eab8118fca9f2ed1ea06756f7b1b6493f498/myBooks.json';
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    Books: responseJson.book_array,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                    <ActivityIndicator size='large' color='red' />
                </View>
            )
        }
        return (
            <View style={{ marginTop: 32 }}>
                <FlatList
                    data={this.state.Books}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate("BookInfo", item)
                        }}>
                            <BookItem items={item} index={index} />
                        </TouchableOpacity>

                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

export class BookItem extends Component {
    state = {}
    render() {
        return (
            <View style={{
                flex: 1, flexDirection: 'row', padding: 16,
                backgroundColor: this.props.index % 2 == 0 ? '#ccc' : '#fff'
            }}>
                <Image style={{ width: 100, height: 150, borderRadius: 10, resizeMode: 'cover' }}
                    source={{ uri: this.props.items.book_cover }} />
                <View style={{ flex: 1, justifyContent: 'space-around', marginLeft: 16 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{this.props.items.book_name}</Text>
                    <Text style={{ fontSize: 16, marginBottom: 8 }}>Tác giả: {this.props.items.author}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8 }}>Lượt xem: {this.props.items.readed}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8 }}>Thể loại: {this.props.items.genre}</Text>
                </View>

            </View>
        );
    }
}

