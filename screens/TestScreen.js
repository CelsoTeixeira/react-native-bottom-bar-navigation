import React from 'react';
import {
    View,
    Text
} from 'react-native';

export default class TestScreen extends React.Component {

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Text>
                    Test Screen
                </Text>
            </View>
        )
    }

}
