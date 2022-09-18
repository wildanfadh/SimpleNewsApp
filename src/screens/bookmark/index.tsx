import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  Box,
  Stack,
  HStack,
  VStack,
  Text,
  Image,
  FlatList,
  Badge,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

// components
import {NewsCard} from '../../components';

// image
import newsLogo1 from '../../assets/images/newsLogo1.png';

// data example
const tags = [
  {
    title: 'World',
  },
  {
    title: 'Politics',
  },
  {
    title: 'Entertiment',
  },
  {
    title: 'Science',
  },
  {
    title: 'Education',
  },
];

const news = [
  {
    title: 'Russia Withdraws Portion Of Troops From Border WIth Ukraine',
    thumbnail:
      'https://cdn.pixabay.com/photo/2014/10/02/06/34/war-469503__340.jpg',
    author: 'Maureen Jones',
    tag: 'World',
    created: '32 minute ago',
    content: `When just 200 Western monarch butterflies arrived in the Pismo Beach Butterfly Grove from their northerly migration last year, park rangers feared the treasured insect would soon be gone forever.

This year, however, volunteers tallied their numbers at over 100,000, a spectacular swarm of hope that traveled down from as far north as Canada to the spend the winter on the California coast.

It’s expected that the monarch butterfly will be placed on the Endangered Species List soon, due to declines in both western and eastern monarch butterfly numbers. Genetically indistinguishable, they are separate merely for the fact that monarchs living and migrating east of the Rockies overwinter in Mexico, while those on the western side of the Rockies overwinter along California’s west coast.`,
  },
];

export const BookMarkScreen = () => {
  const [tagSelected, setTagSelected] = useState('World');
  const navigation = useNavigation();

  return (
    <>
      <Box
        backgroundColor="white"
        // width={WindowWidth * 0.9}
        height="100%"
        pt={10}
        px={3}>
        <HStack space={2} alignItems="center">
          <Text fontSize="md" fontWeight="bold">
            Bookmarked
          </Text>
        </HStack>
        <FlatList
          my={10}
          maxH={50}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={tags}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => setTagSelected(item.title)}>
              <Badge
                mx={2}
                borderRadius={10}
                colorScheme={tagSelected == item.title ? 'dark' : 'light'}>
                {item.title}
              </Badge>
            </TouchableOpacity>
          )}
        />
        {/* <NewsCard /> */}
        <FlatList
          // mb={10}
          // height="100%"
          // backgroundColor="orange.300"
          showsVerticalScrollIndicator={false}
          data={news}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DetailNews', item);
              }}>
              <NewsCard item={item} />
            </TouchableOpacity>
          )}
        />
      </Box>
    </>
  );
};

const styles = StyleSheet.create({});
