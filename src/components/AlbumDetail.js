import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, image, thumbnail_image, url } = album;
    const { thumbnailStyle, headerTextStyle, thumbnailContainerStyle, headerContentStyle, imageStyle } = styles;
    return (
        <Card>
            <CardItem>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }} />
                </View>

                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardItem>

            <CardItem>
                <Image 
                    style={imageStyle}
                    source={{ uri: image }} />
            </CardItem>

            <CardItem>
                <Button
                    onPress={() => Linking.openURL(url)} 
                >
                    <Text>Buy {title} on Amazon</Text>
                </Button>
            </CardItem>

        </Card>
    )
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail;
