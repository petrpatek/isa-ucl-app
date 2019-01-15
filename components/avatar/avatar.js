import React from 'react';
import {
    Image,
    View,
} from 'react-native';
import {
    RkComponent, RkStyleSheet,
    RkText,
    RkTheme,
} from 'react-native-ui-kitten';
import {scale, scaleVertical} from "../../utils/scale";


export class Avatar extends RkComponent {
    componentName = 'Avatar';
    typeMapping = {
        container: {},
        image: {},
        badge: {},
        badgeText: {},
    };

    getBadgeStyle = (badgeProps) => {
        switch (badgeProps) {
            case 'like':
                return {
                    symbol: 'md-heart',
                    backgroundColor: RkTheme.current.colors.badge.likeBackground,
                    color: RkTheme.current.colors.badge.likeForeground,
                };
            case 'follow':
                return {
                    symbol: 'md-plus',
                    backgroundColor: RkTheme.current.colors.badge.plusBackground,
                    color: RkTheme.current.colors.badge.plusForeground,
                };
            default: return {};
        }
    };

    renderImg = (stylesIn) => (
        <View>
            <Image style={styles.avatar} source={this.props.img} />
            { this.props.badge && this.renderBadge(stylesIn.badge)}
        </View>
    );

    renderBadge = (style, textStyle) => {
        const badgeStyle = this.getBadgeStyle(this.props.badge);
        return (
            <View style={[style, { backgroundColor: badgeStyle.backgroundColor }]}>
                <RkText rkType='awesome' style={[textStyle, { color: badgeStyle.color }]}>
                    {badgeStyle.symbol}
                </RkText>
            </View>
        );
    };

    render() {
        const { container, ...other } = this.defineStyles();
        return (
            <View style={[container, this.props.style]}>
                {this.renderImg(other)}
            </View>
        );
    }
}

const styles = RkStyleSheet.create(theme => ({
    avatar: {
        width: scale(100),
        height: scaleVertical(100),
        borderRadius: 50
    },
}));
