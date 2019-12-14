export default class GameLogic2 {
	constructor() {}

	runSimulations(num, switchDoor, callback) {
		let res = 0;

		for (let i = 0; i < num; i++) {
			this.startNewGame(switchDoor);
			if (this.selectedDoorIndex === this.carDoorIndex) {
				res++;
			}
		}

		return res;
	}

	startNewGame(switchDoor) {
		this.initVariables();
		this.initDoors();
		this.selectDoor();
		this.openDoorWithGoat();
		if (switchDoor) {
			this.changeDoor();
		}
	}

	initVariables() {
		this.totalDoors = 3;
		this.doors = [];
		this.carDoorIndex = null;
		this.selectedDoorIndex = null;
		this.openedDoorIndex = null;
	}

	initDoors() {
		// Select the door with car randomly
		this.carDoorIndex = Math.floor(Math.random() * this.totalDoors);
		console.log("carDoorIndex: " + this.carDoorIndex);

		// Create doors arrray
		for (let i = 0; i < this.totalDoors; i++) {
			if (i == this.carDoorIndex) {
				this.doors.push({
					item: "Car",
					isCar: true
				});
			} else {
				this.doors.push({
					item: "Goat",
					isCar: false
				});
			}
		}
	}

	selectDoor() {
		// Select door randomly
		this.selectedDoorIndex = Math.floor(Math.random() * this.totalDoors);

		console.log("selectedDoorIndex: " + this.selectedDoorIndex);
	}

	openDoorWithGoat() {
		// Find the door with a goat available
		this.openedDoorIndex = this.doors.findIndex(
			(d, index) => index !== this.selectedDoorIndex && index !== this.carDoorIndex
		);
		console.log("openedDoorIndex: " + this.openedDoorIndex);
	}

	changeDoor() {
		// Change selected door to the other closed one
		this.selectedDoorIndex = this.doors.findIndex(
			(d, index) => index !== this.selectedDoorIndex && index !== this.openedDoorIndex
		);
		console.log("selectedDoorIndex changed: " + this.selectedDoorIndex);
	}
}
