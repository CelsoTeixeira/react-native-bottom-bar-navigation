import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class TabBarItem extends React.PureComponent {

    handlePress = () => {
        console.log(this.props);
        this.props.navigation.navigate(this.props.routeName)
    }

    render() {
        const { routeName, isActive, propsStyle } = this.props;
        //TODO(Celso): Get the correct icon.

        return(
            <TouchableOpacity
                onPress={this.handlePress}
                style={[styles.container, propsStyle]}
            >
                <Text style={{ textAlign: 'center' }}>
                    {routeName}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    icon: {

    },
});

export default TabBarItem;
