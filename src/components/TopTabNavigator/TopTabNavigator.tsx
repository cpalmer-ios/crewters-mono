import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
  Alert,
  useColorScheme,
} from 'react-native';

import {Layout, Tab, TabView, Text} from '@ui-kitten/components';
import {
  faListAlt,
  faLocationPin,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Box, Center} from 'native-base';
import {width} from '../../constants/Dimensions';
import {setDarkImg, setImg} from '../../hooks/utils/setImg';
import {trophySystem} from '../../hooks/trophies/trophies';
import {isDark} from 'native-base/lib/typescript/theme/tools';

const gap = 5;
const itemPerRow = 3;

const totalGapSize = (itemPerRow - 1) * gap;
const childWidth = (width - totalGapSize) / itemPerRow - 2;

export const TopTabNavigator = ({
  user,
  events,
  data,
  trophies,
  navigation,
}: any): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  // fetch items here

  return (
    <TabView
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
      indicatorStyle={[styles.shadowProp,{borderColor: '#FFF', borderBottomWidth: 5}]}
      tabBarStyle={{   
        margin: '3%',
        marginBottom: '1%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: isDarkTheme ? '#212121' : '#e1e1e1',
      }}
      collapsable={false}
      >
      <Tab
        title="SPORT"
        icon={<FontAwesomeIcon color="#444" icon={faListAlt} />}
        >
        <Layout style={[styles.tabContainer, {margin: '3%', marginTop: '1%', borderBottomLeftRadius: 15, borderBottomRightRadius: 15,backgroundColor: isDarkTheme ? '#212121' : '#e1e1e1'}]}>
          <Text category="h5" style={{marginTop: -50, color: '#444'}}>
            MAIN SPORT
          </Text>
          <Text>
            {user?.sports &&
              user.sports.map((sport: string, indx: number) => (
                <Center key={indx}>
                  <Text style={{color: '#444'}}>{sport}</Text>
                  <Image
                    width={150}
                    height={150}
                    style={{opacity: 0.65}}
                    source={
                  isDarkTheme ? 
                     {uri: setDarkImg(sport)} :
                     {uri: setImg(sport)} 
                    }
                  />
                </Center>
              ))}
          </Text>
        </Layout>
      </Tab>
      <Tab
        style={{
          borderColor: '#244c66'
        }}
        title="EVENTS"
        icon={
          <Text>
            <FontAwesomeIcon
              style={{color: '#444'}}
              icon={faLocationPin}></FontAwesomeIcon>
            {events && events.length}
          </Text>
        }>
        <Layout style={[styles.tabContainer, {margin: '3%',  marginTop: '1%', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, backgroundColor: isDarkTheme ? '#212121' : '#E1E1E1'}]}>
          <Text            
            category="h5"
            style={{color: "#444",marginTop: -120, marginBottom: 30}}>EVENTS</Text>
          <Box>
            {events &&
              events.map(
                (event: any, indx: number) =>
                  indx < 5 && (
                    <Text key={indx}>
                      <FontAwesomeIcon
                        color={'#244c66'}
                        icon={faLocationPin}
                        style={{marginRight: 10}}
                      />
                      {event?.title}
                    </Text>
                  ),
              )}
          </Box>
        </Layout>
      </Tab>
      {/* <Tab
        style={{borderColor: '#244c66'}}
        title="TROPHIES"
        icon={<FontAwesomeIcon color="#244c66" icon={faTrophy} />}>
        <Layout style={styles.tabContainer}>
          <Text category="h5" style={{marginTop: 0, marginBottom: 10}}>
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box style={{marginBottom: '25%'}}>
              {trophies &&
                trophies.map((item: any, indx: any) =>
                  trophySystem(item, indx, events, isDarkTheme),
                )}
            </Box>
          </ScrollView>
        </Layout>
      </Tab> */}
    </TabView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#244c66 !important',
  },
  itemsWrap: {
    marginTop: 15,
    marginLeft: 0.45,
    width: width,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
  },
  singleItem: {
    height: 350,
    marginTop: 5,
    marginHorizontal: gap / 2,
    minWidth: '33%',
    maxWidth: childWidth,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  shadowProp: {
    shadowColor: '#244c66',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
