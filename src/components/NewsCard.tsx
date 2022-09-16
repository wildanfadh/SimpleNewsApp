import {StyleSheet, View, Dimensions} from 'react-native';
import * as React from 'react';
import {Box, Stack, HStack, VStack, Text, Image, Heading} from 'native-base';

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

// icons
import Entypo from 'react-native-vector-icons/Entypo';

export const NewsCard = props => {
  // console.log('props', props.item.title);

  return (
    <HStack
      space={3}
      alignItems="center"
      my={3}
      px={2}
      width={WindowWidth}
      height="150px"
      backgroundColor="white">
      <Image
        // maxWidth={300}
        style={{width: '35%', height: '100%'}}
        source={{
          uri: `${props.item.thumbnail}`,
        }}
        alt="Alternate Text"
        size="xl"
      />
      <VStack space={4} width="60%">
        <Text fontSize={15} fontWeight="bold">
          {props.item.title}
        </Text>
        <Text fontSize={12} color="muted.500">
          By {props.item.author}
        </Text>
        <HStack>
          <HStack space={1}>
            <Text color="blue.500">{props.item.tag}</Text>
            <Entypo name="dot-single" size={24} color="black" />
            <Text>{props.item.created}</Text>
          </HStack>
        </HStack>
      </VStack>
    </HStack>
  );
};

const styles = StyleSheet.create({});
