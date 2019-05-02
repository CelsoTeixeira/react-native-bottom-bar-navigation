import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
import { Icon } from 'expo';

import TabBarItem from '../components/TabBarItem';

class TabBarTest extends React.PureComponent {

    state = {
        isExpanded: false,
    };

    controlMenu = () => {
        const { isExpanded } = this.state;
        this.setState({ isExpanded: !isExpanded })
    };

    renderExpandButton = (iconToRender) => {
        const width = Dimensions.get('window').width;
        const tabItemWidth = (width - 20) / 5;

        return (
            <TouchableOpacity
                onPress={this.controlMenu}
                style={{
                    backgroundColor: 'green',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: tabItemWidth
                }}
            >
                <Icon.Ionicons
                    name={iconToRender}
                    size={42}
                    color='white'
                />
                <Text>
                    Menu
                </Text>
            </TouchableOpacity>
        )
    };

    render() {
        const { isExpanded } = this.state;

        const { navigation } = this.props;
        const { routes } = navigation.state;
        console.log(routes);

        let mainRoutes = routes.slice(0, 4);
        console.log(mainRoutes);

        mainRoutes.splice(2, 0, { menuButton: true });
        console.log(mainRoutes);

        let extraRoutes = routes.slice(4);
        extraRoutes.push({ logoutButton: true });

        console.log(extraRoutes);
        // console.log(navigation);

        const width = Dimensions.get('window').width;
        const tabItemWidth = (width - 20) / 5;

        return (
            <View>
                {
                    isExpanded &&
                    <View style={[styles.tab, { backgroundColor: 'green' }]}>
                        {
                            extraRoutes.map((route, i) => {
                                return <TabBarItem
                                        key={route.routeName}
                                        {...route}
                                        navigation={navigation}
                                    />
                            })
                        }
                    </View>
                }

                <View style={[styles.tab, { backgroundColor: 'red' }]}>
                    {
                        mainRoutes.map((route, i) => {

                            if (route.menuButton !== undefined) {
                                return(
                                    <View key={route.menuButton}>
                                        {
                                            this.renderExpandButton('md-arrow-dropup')
                                        }
                                    </View>
                                )
                            }

                            return (
                                <TabBarItem
                                    key={route.routeName}
                                    {...route}
                                    navigation={navigation}
                                    propsStyle={{
                                        width: tabItemWidth,
                                        backgroundColor: 'orange'
                                    }}
                                />
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 80,
        padding: 8
    },
    tabItem: {
        margin: 5
    }
})

export default TabBarTest;
