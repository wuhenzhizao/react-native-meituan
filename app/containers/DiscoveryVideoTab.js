import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class DiscoveryVideoTab extends Component {

    render() {
        return <View>
            <Text>{this.props.tabLabel}</Text>
        </View>
    }
}