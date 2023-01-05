import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableOpacity,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import React, { useEffect } from 'react';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
// import Geolocation from 'react-native-geolocation-service';

import { Icon } from 'react-native-elements';
const HomeScreen = ({ Navigation }) => {
	const dispatch = useDispatch();
	// navigator.geolocation = require('@react-native-community/geolocation');
	// Geolocation.requestAuthorization();
	// console.log(navigator);

	// useEffect(() => {
	// 	Geolocation.getCurrentPosition(
	// 		(position) => {
	// 			console.log(position);
	// 		},
	// 		(error) => {
	// 			console.log(error.code, error.message);
	// 		},
	// 		{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
	// 	);
	// }, []);

	return (
		<SafeAreaView style={tw`bg-white  h-full`}>
			<View style={tw`p-5`}>
				<Image
					style={[tw`w-24 h-24`, { resizeMode: 'contain' }]}
					source={{
						uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png',
					}}
				/>

				<View style={tw`  flex-row`}>
					<GooglePlacesAutocomplete
						nearbyPlacesAPI="GooglePlacesSearch"
						debounce={400}
						styles={{
							container: {
								flex: 1,
								// flexWrap: 'wrap',
								// backgroundColor:'red',
								textInput: { fontSize: 18 },
							},
						}}
						placeholder="Where From?"
						minLength={2}
						enablePoweredByContainer={false}
						fetchDetails={true}
						currentLocation={true}
						onPress={(data, details = null) => {
							dispatch(
								setOrigin({
									location: details.geometry.location,
									description: data.description,
								})
							);
							dispatch(setDestination(null));
							// console.log(data, details);
						}}
						query={{
							key: GOOGLE_MAPS_APIKEY,
							language: 'en',
						}}
						returnKeyType={'search'}
					/>
					<TouchableOpacity onPress={() => {}}>
						<Icon
							style={tw`p-2 rounded-full w-10 mx-1`}
							name="my-location"
							color="black"
							type="MaterialLcons"
						/>
					</TouchableOpacity>
				</View>
				<NavOptions />
				<NavFavourites />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
