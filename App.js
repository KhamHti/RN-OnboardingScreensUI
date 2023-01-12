import {  Image, Text, View } from 'react-native';
import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES } from './src/constants/theme';

const slides = [
  {
    id: 1,
    title: "Discover Best Places",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    image: require("./assets/onboardScreen1.png")
  },
  {
    id: 2,
    title: "Choose A Tasty Dish",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    image: require("./assets/onboardScreen2.png")
  },
  {
    id: 3,
    title: "Pick Up The Delivery",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    image: require("./assets/onboardScreen3.png")
  },
]

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  const Next = (label) => {
    return (
      <View style={{padding: 12}}>
        <Text style={{fontWeight: '600', color: COLORS.title, fontSize: SIZES.h4}}>{label}</Text>
      </View>
    )
  }



  if(!showHomePage) {
    return (
      <AppIntroSlider 
          data={slides}
          renderItem={({item}) => {
            return (
              <View style={{flex: 1, alignItems: 'center', padding: 15, paddingTop: 100}}>
                <Image 
                  source={item.image}
                  style={{
                    width:  SIZES.width - 50,
                    height: 400,
                  }}
                  resizeMode="contain"
                />
                <Text style={{fontWeight: 'bold',color: COLORS.title, fontSize: SIZES.h1}}>
                  {item.title}
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 5, color: COLORS.title}}>
                  {item.description}
                </Text>
              </View>
            )
          }}
          showSkipButton
          activeDotStyle={{backgroundColor: COLORS.primary, width: 30}}
          renderNextButton={() => Next("Next")}
          renderSkipButton={() => Next("Skip")}
          renderDoneButton={() => Next("Done")}
          onDone={() => {
            setShowHomePage(true);
          }}
      />
    )
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
    </View>
  );
}

