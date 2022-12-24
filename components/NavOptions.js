import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
const data = [
	{
		id: '1',
		title: 'get a ride',
		image:
			'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png',
		screen: 'MapScreen',
	},
	{
		id: '2',
		title: 'order food',
		image:
			'https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png',
		screen: 'EatsScreen',
	},
];

const NavOptions = () => {
	const navigation = useNavigation();
	return (
		<View>
			<FlatList
				data={data}
				horizontal
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate(item.screen)}
						style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-300 m-2 w-40`}
					>
						<Image style={tw`w-32 h-32`} source={{ uri: item.image }} />
						<Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
						<Icon
							style={tw`p-2 bg-black rounded-full w-10 mt-4`}
							name="arrowright"
							color="white"
							type="antdesign"
						/>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

export default NavOptions;

const styles = StyleSheet.create({});
