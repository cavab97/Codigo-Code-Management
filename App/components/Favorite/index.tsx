import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';

export const handleFavorite = (
  press: () => Promise<void>,
  favorite: boolean,
) => {
  if (favorite) {
    return (
      <>
        <Icon name="heart" size={25} color="red" onPress={() => press()} />
      </>
    );
  } else {
    return (
      <>
        <Icon name="hearto" size={25} color="red" onPress={() => press()} />
      </>
    );
  }
};

const styles = StyleSheet.create({});
