import React, {useState} from 'react';
import {View, Text} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

export default function RadioButton({chosenOption, setChosenOption}: any) {
 //will store our current user options
  const options = [
    {label: 'Athletics', value: 'athletics'},
    { label: "Badminton", value: "badminton"},
    { label: "Baseball", value: "baseball"},
    { label: "Basketball", value: "basketball"},
    { label: "Bowling", value: "bowling"},
    { label: "Bull Fighting", value: "bullFighting"}, 
    { label: "Cricket", value: "cricket"},
    { label: "Curling", value: "curling"}, 
    { label: "Cycling", value: "cycling"},
    { label: "Darts", value: "darts"}, 
    { label: "Football", value: "football"},
    { label: "Golf", value: "golf"},
    { label: "Go Karting", value: "goKarting"}, 
    { label: "Hockey", value: "hockey"}, 
    { label: "High Jump", value: "highJump"}, 
    { label: "Hurdles", value: "hurdles"}, 
    { label: "Ice Hockey", value: "iceHockey"}, 
    { label: "Ice Skating", value: "iceSkating"}, 
    { label: "Martial Arts", value: "martialArts"},
    { label: "Pool", value: "pool"}, 
    { label: "Net Ball", value: "netBall"}, 
    { label: "Rock Climbing", value: "rockClimbing"},
    { label: "Roller Skating", value: "rollerSkating"}, 
    { label: "Rowing", value: "rowing"},
    { label: "Rugby", value: "rugby"},
    { label: "Running", value: "running"},
    { label: "Skiing", value: "skiing"}, 
    { label: "Skate Boarding", value: "skateBoarding"}, 
    { label: "Snooker", value: "snooker"}, 
    { label: "Snow Boarding", value: "snowBoarding"}, 
    { label: "Soccer", value: "soccer"},
    { label: "Swimming", value: "swimming"},
    { label: "Surfing", value: "surfing"}, 
    { label: "Tennis", value: "tennis"},
    { label: "Training", value: "training"}, 
    { label: "Other", value: "other"},
  ]; //create our options for radio group

  const setValue = value => {
    // var newArray = chosenOption.filter((item)=>item === value); //get the items that are selected
    setChosenOption(value); //set the selected value in this Hook
  };
  return (
    <>
        {/* {chosenOption.length > 1 && chosenOption.map((sport, indx) => ( */}
        <Text
          // key={indx}
          style={{color: '#244c66', flex: 1, flexDirection: 'column'}}>
          {chosenOption}
        </Text>
        {/* ))} */}
      <View style={{marginBottom: '50%'}}>
      </View>
      <View
        style={{color: '#244c66', flex: 1, flexDirection: 'row', width: '50%'}}>
        <RadioForm
          style={{color: '#244c66'}}
          radio_props={options}
          initial={0} //initial value of this group
          onPress={(value: any) => {
            setValue(value);
          }} //if the user changes options, set the new value
          buttonColor={'#244c66'}
          selectedButtonColor={'#244c66'}
          formHorizontal={false}
          labelHorizontal={true}
          labelColor={'#244c66'}
          selectedLabelColor={'#244c66'}
        />
      </View>
    </>
  );
}
