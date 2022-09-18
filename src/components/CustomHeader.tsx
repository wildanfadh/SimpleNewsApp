import {StyleSheet, View} from 'react-native';
import * as React from 'react';
import {Box, Stack, HStack, VStack, Text} from 'native-base';

export const CustomHeader = props => {
  return (
    <HStack
      space={1}
      alignItems="center"
      justifyContent="space-between"
      px={3}
      height="60px"
      backgroundColor="white">
      {props.leftElement ? props.leftElement : null}
      {props.centerElement ? props.centerElement : null}
      {props.rightElement ? props.rightElement : null}
    </HStack>
  );
};

const styles = StyleSheet.create({});
