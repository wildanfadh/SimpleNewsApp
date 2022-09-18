import {StyleSheet, View, Dimensions} from 'react-native';
import * as React from 'react';
import {
  Box,
  Stack,
  HStack,
  VStack,
  Text,
  Image,
  Heading,
  Menu,
  Pressable,
  HamburgerIcon,
} from 'native-base';

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

// icons
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

export const NewsCard = props => {
  // console.log('props', props.item.title);

  return (
    <HStack
      space={3}
      alignItems="center"
      my={3}
      px={2}
      width={WindowWidth * 0.97}
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
        <Heading fontSize={15} fontWeight="bold">
          {props.item.title}
        </Heading>
        <Text fontSize={12} color="muted.500">
          By {props.item.author}
        </Text>
        <HStack space={2} alignItems="center" justifyContent="space-between">
          <HStack space={1}>
            <Text color="blue.500">{props.item.tag}</Text>
            <Entypo name="dot-single" size={24} color="black" />
            <Text>{props.item.created}</Text>
          </HStack>
          <Menu
            w="190"
            trigger={triggerProps => {
              return (
                <Pressable
                  accessibilityLabel="More options menu"
                  {...triggerProps}>
                  <Entypo name="dots-three-horizontal" size={20} />
                </Pressable>
              );
            }}>
            <Menu.Item>
              <Entypo name="share-alternative" size={20} color="black" />
              Share
            </Menu.Item>
            <Menu.Item>
              <Feather name="bookmark" size={24} color="black" />
              Bookmark
            </Menu.Item>
          </Menu>
        </HStack>
      </VStack>
    </HStack>
  );
};

const styles = StyleSheet.create({});
