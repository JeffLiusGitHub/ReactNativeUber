import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	FlatList,
	Image,
} from 'react-native';
import React, { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';
const data = [
	{
		id: 'Uber-X-123',
		title: 'UberX',
		multiplier: 1,
		image:
			'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png',
	},
	{
		id: 'Uber-XL-456',
		title: 'Uber XL',
		multiplier: 1.2,
		image:
			'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png',
	},
	{
		id: 'Uber-LUX-789',
		title: 'UBER LUX',
		multiplier: 1.5,
		image:
			'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png',
	},
];

const RideOptionsCard = () => {
	const navigation = useNavigation();
	const [selected, setSelected] = useState(null);
	const travelTimeInformation = useSelector(selectTravelTimeInformation);
	console.log(travelTimeInformation);
	return (
		<SafeAreaView style={tw`bg-white flex-grow`}>
			<View>
				<TouchableOpacity
					onPress={() => navigation.navigate('NavigateCard')}
					style={tw`absolute top-3 left-5 p-3 rounded-full bg-gray-100`}
				>
					<Icon name="chevron-left" type="fontawesome" />
					{/* <Text>Back</Text> */}
				</TouchableOpacity>
				<Text style={tw`text-center py-5 text-xl`}>
					Select a Ride - Estimate distance:
					{travelTimeInformation?.distance.text}
				</Text>
			</View>

			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item: { id, title, multiplier, image }, item }) => (
					<TouchableOpacity
						onPress={() => setSelected(item)}
						style={tw`flex-row items-center justify-between px-3 ${
							id === selected?.id && 'bg-gray-300'
						}`}
					>
						<Image
							style={{ width: 80, height: 80, resizeMode: 'contain' }}
							source={{ uri: image }}
						/>
						<View style={tw`-ml-6`}>
							<Text style={tw`text-xl font-semibold`}>{title}</Text>

							<Text style={tw`text-center pb-2 text-base`}>
								{travelTimeInformation?.duration.text} Travel Time
							</Text>
						</View>
						<Text style={tw`text-xl`}>
							{new Intl.NumberFormat('en-AU', {
								style: 'currency',
								currency: 'AUD',
							}).format(
								(travelTimeInformation?.duration.value / 100) * multiplier
							)}
						</Text>
					</TouchableOpacity>
				)}
			/>
			<View>
				<TouchableOpacity
					style={tw`${!selected ? 'bg-gray-300' : 'bg-black'} py-3 m-3`}
					disabled={!selected}
				>
					<Text style={tw`text-center text-white text-xl `}>
						{!selected ? 'Choose Your Ride' : `Choose ${selected?.title}`}
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
