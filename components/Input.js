import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    // Spread props parameter to forward all props from parent component
    return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;