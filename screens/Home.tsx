//@ts-nocheck

import { useState } from "react"
import { StyleSheet, View } from "react-native"
import { useTheme, Appbar, Chip, Button } from "react-native-paper"

const categories = ["Technology", "Business", "Politics", "Sports", "Health"]

const API_KEY = "pub_275616e91935bea48718281c50d6dd106b348"

const Home = () => {
	const theme = useTheme()
	const [selectedCategories, setSelectedCategories] = useState([])

	const handleSelect = (val: string) => {
		setSelectedCategories((prev: string[]) =>
			prev.find((p) => p === val)
				? prev.filter((cat) => cat !== val)
				: [...prev, val]
		)
	}

	const handlePress = () => {
    const URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=in&language=en&${selectedCategories.length > 0 && `category=${selectedCategories.join()}`}`

    console.log(URL);
  }

	return (
		<View style={styles.container}>
			<Appbar.Header>
				<Appbar.Content title="Newsfeed" />
			</Appbar.Header>

			<View style={styles.filter}>
				{categories.map((cat) => (
					<Chip
						key={cat}
						mode="outlined"
						style={styles.chipItem}
						textStyle={{ fontWeight: "400", color: "white", padding: 1 }}
						showSelectedOverlay
						selected={selectedCategories.find((c) => cat === c) ? true : false}
						onPress={() => handleSelect(cat)}
					>
						{cat}
					</Chip>
				))}
				<Button
					mode="elevated"
					style={styles.button}
					labelStyle={{
						fontSize: 14,
						margin: "auto",
						color: theme.colors.primary,
					}}
					icon={"sync"}
					onPress={handlePress}
				>
					Refresh
				</Button>
			</View>
		</View>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	filter: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginVertical: 10,
	},
	chipItem: {
		marginHorizontal: 5,
		marginVertical: 5,
	},
	button: {
		maxWidth: 400,
		padding: 0,
		maxHeight: 40,
	},
})
