import React, { PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = (props) => {
    const {
        label,
        placeholder,
        value,
        keyboardType,
        returnKeyType,
        secureTextEntry,
        autoCorrect,
        onChangeText
    } = props;
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput
                style={inputStyle}
                label={label}
                placeholder={placeholder}
                value={value}
                keyboardType={keyboardType || 'default'}
                returnKeyType={returnKeyType || 'next'}
                secureTextEntry={secureTextEntry || false}
                autoCorrect={autoCorrect || true}
                onChangeText={onChangeText}
            />
        </View>
    );
};

Input.PropTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    keyboardType: PropTypes.oneOf([
        'default',
        'numeric',
        'email-address',
        'phone-pad'
    ]),
    returnKeyType: PropTypes.oneOf([
        'done',
        'go',
        'next',
        'search',
        'send'
    ]),
    secureTextEntry: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    onChangeText: PropTypes.func.isRequired
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
