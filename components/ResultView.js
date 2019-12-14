import React, { Component } from "react";
import { StyleSheet, View, Modal } from "react-native";
import { Button, Text, Spinner } from "@ui-kitten/components";
import GameLogic2 from "./../logic/GameLogic.js";

class ResultView extends Component {
	constructor(props) {
		super(props);

		this.runSimulation = this.runSimulation.bind(this);
		this.getResultView = this.getResultView.bind(this);
		this.getLoadingView = this.getLoadingView.bind(this);

		this.state = {
			isProcessingSimulation: true,
			winnerCount: 0
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.runSimulation();
		}, 1);
	}

	runSimulation() {
		const gameLogic = new GameLogic2();
		let res = gameLogic.runSimulations(this.props.numSimulations, this.props.switchDoor);
		this.setState({ isProcessingSimulation: false, winnerCount: res });
	}

	getLoadingView() {
		return (
			<>
				<View style={styles.loadingViewContainer}>
					<Text category="h5">Simulating...</Text>
				</View>
				<View style={styles.loadingViewContainer}>
					<Spinner style={styles.spinner} size="giant" />
				</View>
			</>
		);
	}

	getResultView() {
		return (
			<>
				<View style={styles.viewContainer}>
					<View style={styles.resView}>
						<Text style={styles.resText} category="h1">
							{this.state.winnerCount}
						</Text>
						<Text style={styles.simText} category="p1">
							/ {this.props.numSimulations}
						</Text>
					</View>
				</View>
				<View style={styles.viewContainer}>
					<View style={styles.resView}>
						<Text style={styles.descriptionText} category="p1">
							you win the prize...
							<Text style={styles.descriptionItalicText} category="p1">
								{this.props.switchDoor ? " switching " : " without switching "}
							</Text>
							the door!
						</Text>
					</View>
				</View>
				<View style={styles.viewContainer}>
					<Button style={this.props.styles.submitButton} onPress={this.props.onRestart}>
						Start New Simulation
					</Button>
				</View>
			</>
		);
	}

	render() {
		return (
			<Modal style={styles.modal} visible={this.props.isModalVisible} animationType="slide">
				<View style={styles.container}>
					{this.state.isProcessingSimulation ? this.getLoadingView() : this.getResultView()}
				</View>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 40
	},
	viewContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center"
	},
	loadingViewContainer: {
		width: "100%",
		marginVertical: 10,
		alignItems: "center"
	},
	resView: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		height: 100
	},
	resText: {
		fontSize: 68,
		textAlign: "center",
		paddingTop: 60
	},
	simText: {
		fontSize: 32,
		textAlign: "center",
		paddingTop: 60,
		paddingHorizontal: 10
	},
	descriptionText: {
		textAlign: "center",
		marginBottom: 50
	},
	descriptionItalicText: {
		fontStyle: "italic"
	},
	spinner: {
		borderColor: "#45caaf"
	}
	// submitButton: {
	// 	width: "100%",
	// 	backgroundColor: "#45caaf",
	// 	borderColor: "transparent"
	// }
});

export default ResultView;
