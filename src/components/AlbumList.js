import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = {
        albums: []
    };

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res => res.json())
        .then(resJson => {
            this.setState({ albums: resJson });
        });
    }

    renderAlbums() {
        return this.state.albums.map((album, index) => <AlbumDetail key={index} album={album} />);
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );     
    }

};

export default AlbumList;
