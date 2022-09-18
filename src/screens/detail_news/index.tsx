import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  ScrollView,
  Box,
  Text,
  Stack,
  HStack,
  VStack,
  Image,
  Heading,
  Avatar,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

// icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

// components
import {CustomHeader} from '../../components';

export const DetailNews = ({route}) => {
  const navigation = useNavigation();
  //   console.log('route detail', route);
  const getFirstChar = str => {
    const firstChars = str
      .split(' ')
      .map(word => word[0])
      .join('');
    return firstChars;
  };
  return (
    <>
      <CustomHeader
        leftElement={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
        }
        rightElement={
          <HStack space={3} alignItems="center">
            <Feather name="bookmark" size={24} color="black" />
            <Feather name="share" size={24} color="black" />
          </HStack>
        }
        // title="Search"
      />
      <ScrollView backgroundColor="white" height="100%">
        <Image
          // maxWidth={300}
          style={{width: '100%', height: 300}}
          source={{
            uri: `${route.params.thumbnail}`,
          }}
          alt="Alternate Text"
          size="xl"
        />
        <Box my={3} mx={5}>
          <Heading size="md">{route.params.title}</Heading>
          <HStack
            space={2}
            my={3}
            alignItems="center"
            justifyContent="space-between">
            <HStack space={2} alignItems="center">
              <Avatar
                size="md"
                bg="info.400"
                // source={{
                //   uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                // }}
              >
                <Text>{getFirstChar(route.params.author)}</Text>
              </Avatar>
              <Text>{route.params.author}</Text>
            </HStack>
            <Text>{route.params.created}</Text>
          </HStack>
        </Box>
        <Box my={3} mx={5}>
          <Text>{route.params.content}</Text>
        </Box>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});
