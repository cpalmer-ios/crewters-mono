import {useEffect, useState} from 'react';

import AppleHealthKit, {
  HealthInputOptions,
  HealthKitPermissions,
  HealthUnit,
} from 'react-native-health';

import {Platform} from 'react-native';

const {Permissions} = AppleHealthKit.Constants;

const permissions: HealthKitPermissions = {
  permissions: {
    read: [
      Permissions.Steps,
      Permissions.FlightsClimbed,
      Permissions.DistanceWalkingRunning,
    ],
    write: [],
  },
};

const useHealthData = () => {
  const [steps, setSteps] = useState(0);
  const [flights, setFlights] = useState(0);
  const [distance, setDistance] = useState(0);

  // HealthKit implementation
  const [hasPermissions, setHasPermission] = useState(false);

  useEffect(() => {
    if (!hasPermissions) {
      return;
    }
    if (Platform.OS !== 'ios') {
      return;
    }
    const options: HealthInputOptions = {
      date: new Date().toISOString(),
    };

    AppleHealthKit.getStepCount(options, (err, results) => {
      if (err) {
        console.log('Error getting the steps');
        return;
      }
      setSteps(results.value);
    });

    AppleHealthKit.getFlightsClimbed(options, (err, results) => {
      if (err) {
        console.log('Error getting the Flights Climbed:', err);
        return;
      }
      setFlights(results.value);
    });

    AppleHealthKit.getDistanceWalkingRunning(options, (err, results) => {
      if (err) {
        console.log('Error getting the Distance:', err);
        return;
      }
      setDistance(results.value);
    });
  }, [hasPermissions]);

  return {steps, flights, distance};
};

export default useHealthData;
