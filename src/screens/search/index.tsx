import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Box, Text, HStack, VStack, FlatList, Input, Icon} from 'native-base';

// icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

// components
import {CustomHeader} from '../../components';

export const SearchScreen = () => {
  return (
    <>
      <Box py={3} px={3} backgroundColor="white">
        <Input
          type="text"
          placeholder="Search"
          borderRadius={30}
          backgroundColor="muted.100"
          InputRightElement={
            <Icon
              as={AntDesign}
              name="search1"
              size="md"
              color="muted.500"
              mr={4}
            />
          }
        />
      </Box>
      <Box backgroundColor="white" height="100%">
        <Box mx={3}>{/* <Text>SearchScreen</Text> */}</Box>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({});
