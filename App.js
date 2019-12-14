import React, { Component } from "react";
import { StyleSheet, View, Switch } from "react-native";
import { ApplicationProvider, Text, Button, Spinner } from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import NumericInput from "react-native-numeric-input";
import ResultView from "./components/ResultView";
import GameLogic2 from "./logic/GameLogic.js";

class App extends Component {
	constructor(props) {
		super(props);

		this.simulateHandler = this.simulateHandler.bind(this);
		this.restartHandler = this.restartHandler.bind(this);

		this.state = {
			numSimulations: 1,
			shouldChangeDoor: false,
			isModalVisible: false,
			winnerCount: 0,
			simulationDone: false
		};
	}

	simulateHandler() {
		this.setState({ isModalVisible: true });
	}

	restartHandler() {
		this.setState({
			isModalVisible: false,
			numSimulations: 1,
			shouldChangeDoor: false,
			isProcessingSimulation: false
		});
	}

	render() {
		return (
			<ApplicationProvider mapping={mapping} theme={lightTheme}>
				<View style={styles.container}>
					<View style={styles.viewContainer}>
						<Text category="h2">Monty Hall Puzzle Simulator</Text>
					</View>
					<View style={styles.viewContainer}>
						<Text style={styles.descriptionText} category="p1">
							Let's find out how many times you can win the amazing prize if you choose to switch or not switch your
							first choice.
						</Text>
					</View>
					<View style={styles.viewContainer}>
						<Text category="h6">How many simulations?</Text>
						<View style={styles.numericViewContainer}>
							<NumericInput
								minValue={1}
								separatorWidth={0}
								rounded
								totalWidth={200}
								totalHeight={50}
								onChange={value => this.setState({ numSimulations: value })}
								value={this.state.numSimulations}
								initValue={this.state.numSimulations}
							/>
						</View>
					</View>
					<View style={styles.inputViewContainer}>
						<Text category="h6">Switch door?</Text>
						<Switch
							onValueChange={() => this.setState({ shouldChangeDoor: !this.state.shouldChangeDoor })}
							value={this.state.shouldChangeDoor}
							trackColor={{ true: "#e7e7c7", false: "grey" }}
						/>
					</View>
					<View style={styles.buttonViewContainer}>
						<Button style={styles.submitButton} onPress={this.simulateHandler}>
							Simulate
						</Button>
					</View>
					{this.state.isModalVisible ? (
						<ResultView
							numSimulations={this.state.numSimulations}
							switchDoor={this.state.shouldChangeDoor}
							styles={styles}
							onRestart={this.restartHandler}
						/>
					) : null}
				</View>
			</ApplicationProvider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start",
		padding: 40
	},
	viewContainer: {
		width: "100%",
		marginVertical: 15
	},
	buttonViewContainer: {
		width: "100%",
		justifyContent: "flex-end",
		flex: 1
	},
	descriptionText: {
		marginBottom: 40
	},
	inputViewContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginVertical: 15
	},
	numericViewContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 20
	},
	submitButton: {
		width: "100%",
		backgroundColor: "#45caaf",
		borderColor: "transparent"
	}
});

export default App;
