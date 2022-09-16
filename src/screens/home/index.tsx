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

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

// components
import {NewsCard} from '../../components';

// image
import newsLogo1 from '../../assets/images/newsLogo1.png';

// data example
const tags = [
  {
    title: 'Top',
  },
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
    title:
      'Monarch population soars 4,900 percent since last year in thrilling 2021 western migration',
    thumbnail:
      'https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_960_720.jpg',
    author: 'Andy Corbley',
    tag: 'World',
    created: '1 minute ago',
    content: `When just 200 Western monarch butterflies arrived in the Pismo Beach Butterfly Grove from their northerly migration last year, park rangers feared the treasured insect would soon be gone forever.

This year, however, volunteers tallied their numbers at over 100,000, a spectacular swarm of hope that traveled down from as far north as Canada to the spend the winter on the California coast.

It’s expected that the monarch butterfly will be placed on the Endangered Species List soon, due to declines in both western and eastern monarch butterfly numbers. Genetically indistinguishable, they are separate merely for the fact that monarchs living and migrating east of the Rockies overwinter in Mexico, while those on the western side of the Rockies overwinter along California’s west coast.`,
  },
  {
    title:
      'The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade',
    thumbnail:
      'https://cdn.pixabay.com/photo/2013/03/01/18/40/crispus-87928__340.jpg',
    author: 'Jane Smith',
    tag: 'Entertainment',
    created: '5 minute ago',
    content: `When just 200 Western monarch butterflies arrived in the Pismo Beach Butterfly Grove from their northerly migration last year, park rangers feared the treasured insect would soon be gone forever.

This year, however, volunteers tallied their numbers at over 100,000, a spectacular swarm of hope that traveled down from as far north as Canada to the spend the winter on the California coast.

It’s expected that the monarch butterfly will be placed on the Endangered Species List soon, due to declines in both western and eastern monarch butterfly numbers. Genetically indistinguishable, they are separate merely for the fact that monarchs living and migrating east of the Rockies overwinter in Mexico, while those on the western side of the Rockies overwinter along California’s west coast.`,
  },
  {
    title:
      'NASA’s $10 billion James Webb Space Telescope Launches An Epic Mission To Study Early Universe',
    thumbnail:
      'https://media.istockphoto.com/photos/social-media-networking-network-with-members-connected-with-each-of-picture-id1400028174?b=1&k=20&m=1400028174&s=170667a&w=0&h=dgh0UywZiIZtkLEtWl9BqJPNtFKIG4tpYNUBwJCO8zE=',
    author: 'Maureen Jones',
    tag: 'Science',
    created: '20 minute ago',
    content: `When just 200 Western monarch butterflies arrived in the Pismo Beach Butterfly Grove from their northerly migration last year, park rangers feared the treasured insect would soon be gone forever.

This year, however, volunteers tallied their numbers at over 100,000, a spectacular swarm of hope that traveled down from as far north as Canada to the spend the winter on the California coast.

It’s expected that the monarch butterfly will be placed on the Endangered Species List soon, due to declines in both western and eastern monarch butterfly numbers. Genetically indistinguishable, they are separate merely for the fact that monarchs living and migrating east of the Rockies overwinter in Mexico, while those on the western side of the Rockies overwinter along California’s west coast.`,
  },
  {
    title: 'Russia Withdraws Portion Of Troops From Border WIth Ukraine',
    thumbnail:
      'https://cdn.pixabay.com/photo/2013/02/01/18/14/url-77169__340.jpg',
    author: 'Jane Smith',
    tag: 'World',
    created: '30 minute ago',
    content: `When just 200 Western monarch butterflies arrived in the Pismo Beach Butterfly Grove from their northerly migration last year, park rangers feared the treasured insect would soon be gone forever.

This year, however, volunteers tallied their numbers at over 100,000, a spectacular swarm of hope that traveled down from as far north as Canada to the spend the winter on the California coast.

It’s expected that the monarch butterfly will be placed on the Endangered Species List soon, due to declines in both western and eastern monarch butterfly numbers. Genetically indistinguishable, they are separate merely for the fact that monarchs living and migrating east of the Rockies overwinter in Mexico, while those on the western side of the Rockies overwinter along California’s west coast.`,
  },
];

export const HomeScreen = () => {
  const [tagSelected, setTagSelected] = useState('Top');

  return (
    <>
      <Box
        backgroundColor="white"
        // width={WindowWidth * 0.9}
        height="100%"
        pt={10}
        px={3}>
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
            <TouchableOpacity>
              <NewsCard item={item} />
            </TouchableOpacity>
          )}
        />
      </Box>
    </>
  );
};

const styles = StyleSheet.create({});
