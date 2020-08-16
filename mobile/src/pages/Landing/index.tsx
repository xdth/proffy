import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, []);

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Bienvenue, {'\n'}
        <Text style={styles.titleBold}>que voulez-vous faire?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          {/* @dth */}
          <Image source={studyIcon} style={{width: 50, height: 50}} />

          <Text style={styles.buttonText}>Étudier</Text>
        </RectButton>
        <RectButton
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          {/* @dth */}
          <Image source={giveClassesIcon} style={{width: 50, height: 50}} />

          <Text style={styles.buttonText}>Offrir un cours</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        {totalConnections} connexions realisées au total {' '}
        <Image source={heartIcon} style={{width: 10, height: 10}} />
      </Text>
    </View>
  );
}

export default Landing;