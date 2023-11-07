import React, {useState} from 'react';
import {
  Alert,
  VStack,
  HStack,
  IconButton,
  CloseIcon,
  Box,
  Text,
  Center,
  NativeBaseProvider,
} from 'native-base';

export function AlertBox({title, type, body, visible, children}: any) {
  const [close, setClose] = useState(false);

  return (
    <Center style={{display: close ? 'none' : 'flex', position: 'absolute', width: '100%', zIndex: 999, marginTop: '50%'}}>
      <Alert
        maxW="400"
        colorScheme={type}
        status={type}
        style={{borderRadius: 10}}>
        <VStack space={2} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between">
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                {title}
              </Text>
            </HStack>
            <IconButton
              onPress={() => setClose(close => !close)}
              variant="unstyled"
              _focus={{
                borderWidth: 0,
              }}
              icon={<CloseIcon size="3" />}
              _icon={{
                color: 'coolGray.600',
              }}
            />
          </HStack>
          <Box
            pl="6"
            _text={{
              color: 'coolGray.600',
            }}>
            {body}
              {children}
          </Box>
        </VStack>
      </Alert>
    </Center>
  );
}
