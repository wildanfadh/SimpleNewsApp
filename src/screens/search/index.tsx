import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Box, Text, HStack} from 'native-base';

// icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

// components
import {CustomHeader} from '../../components';

export const SearchScreen = () => {
  return (
    <Box backgroundColor="white" height="100%">
      <CustomHeader
        leftElement={<AntDesign name="left" size={24} color="black" />}
        rightElement={
          <HStack space={3} alignItems="center">
            <Feather name="bookmark" size={24} color="black" />
            <Feather name="share" size={24} color="black" />
          </HStack>
        }
        // title="Search"
      />
      <Box mx={3}>
        <Text>SearchScreen</Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({});
