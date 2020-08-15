import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/xdth.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.subject}>Chimie</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet.{'\n'}Brussels
      </Text>

      <View style={styles.footer}>
        <Text style={styles.priceValue}>
          Prix/heure {'   '}
          <Text style={styles.container}>€ 50,00</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image style={styles.heartIcon} source={heartOutlineIcon} /> */}
            <Image style={styles.heartIcon} source={unfavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image style={styles.whatsappIcon} source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Contacter</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;