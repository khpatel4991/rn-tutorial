import React, { Component } from 'react';
import { Text, View } from 'react-native';
//import axios from 'axios';

class AlbumList extends Component {

    componentWillMount() {
        //axios.get('https://rallycoding.herokuapp.com/api/music_albums')
          //  .then(console.log, console.log);
    }

    render() {
        return (
            <View>
                <Text>Album List!!!</Text>
            </View>
        );     
    }

};

export default AlbumList;