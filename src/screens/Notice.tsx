import React from 'react';
import {Alert} from 'react-native';
import {
  Pressable,
  Text,
  Box,
  HStack,
  Spacer,
  Flex,
  Center,
  NativeBaseProvider,
  Badge,
} from 'native-base';

function Notice() {
  return (
    <Pressable>
      {({isHovered, isFocused, isPressed}) => {
        return (
          <Box
            maxW="96"
            borderWidth="1"
            borderColor="coolGray.300"
            shadow="3"
            bg={
              isPressed
                ? 'coolGray.200'
                : isHovered
                ? 'coolGray.200'
                : 'coolGray.100'
            }
            p="5"
            rounded="8"
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
              marginTop: -30,
              marginBottom: 50,
            }}>
            <HStack alignItems="center">
              <Badge
                style={{backgroundColor: '#244c66'}}
                _text={{
                  color: 'white',
                }}
                variant="solid"
                rounded="4">
                Notice
              </Badge>
              <Spacer />
              <Pressable onPress={() => Alert.alert('close')}>
                <Text fontSize={10} color="coolGray.800">
                  close
                </Text>
              </Pressable>
            </HStack>
            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
              Event Logging
            </Text>
            <Text mt="2" fontSize="sm" color="coolGray.700">
              Crewters© are currently experiencing high volumes of event logging
              so some aspect features may be unavailable. In the meantime please
              refer to our documentation for support.
            </Text>
            <Flex>
              <Pressable onPress={() => Alert.alert('click')}>
                {isFocused ? (
                  <Text
                    mt="2"
                    fontSize={12}
                    fontWeight="medium"
                    textDecorationLine="underline"
                    color="#244c66"
                    alignSelf="flex-start">
                    Read More
                  </Text>
                ) : (
                  <Text
                    mt="2"
                    fontSize={12}
                    fontWeight="medium"
                    color="#244c66">
                    Read More
                  </Text>
                )}
              </Pressable>
            </Flex>
          </Box>
        );
      }}
    </Pressable>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Notice />
      </Center>
    </NativeBaseProvider>
  );
};
