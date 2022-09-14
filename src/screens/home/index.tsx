import {StyleSheet, View} from 'react-native';
import * as React from 'react';
import {Box, Stack, HStack, VStack, Text, Image} from 'native-base';

// image
import newsLogo1 from '../../assets/images/newsLogo1.png';

export const HomeScreen = () => {
  return (
    <>
      <Box backgroundColor="white" height="100%" pt={10} px={3}>
        <HStack space={2} alignItems="center" justifyContent="center">
          <Image
            style={{width: 25, height: 25}}
            source={require('../../assets/images/newsLogo1.png')}
            alt="logo image"
          />
          <Text fontSize="md" fontWeight="semibold">
            News 24
          </Text>
        </HStack>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({});
