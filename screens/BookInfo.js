import React from "react";
import { View, Text, Image } from 'react-native';

const BookInfo = ({ navigation, route }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image style={{ width: '80%', height: '80%', resizeMode: 'contain' }} 
                source={{uri: route.params.book_cover}}/>
            <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>{route.params.book_name}</Text>   
            <Text style={{ }}>Tác giả: {route.params.author}</Text>   
            <Text style={{ }}>Lượt xem: {route.params.readed}</Text>   
            <Text style={{ }}>Thể loại: {route.params.genre}</Text>   
        </View>
        
    ); 
}

export default BookInfo;