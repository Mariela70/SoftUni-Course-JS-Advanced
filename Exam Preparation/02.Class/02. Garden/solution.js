class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error("Not enough space in the garden.");
    }

    this.spaceAvailable -= spaceRequired;
    this.plants.push({
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0
    });
    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {

    if (quantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }
    let plant = this.plants.find((x) => x.plantName == plantName);
    if (plant == undefined) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe == true) {
      throw new Error(`The ${plantName} is already ripe.`);
    }


    plant.ripe = true;
    plant.quantity += quantity;

    if (quantity == 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {
    //we need Index!
    let plantIndex = this.plants.findIndex(p => p.plantName == plantName);

    if (plantIndex == -1) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    const plant = this.plants[plantIndex]
    if (plant.ripe == false) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }
    //vadim ot ediniq masiv
    this.plants.splice(plantIndex, 1)
    this.storage.push({
      plantName,
      quantity: plant.quantity
    });
    this.spaceAvailable += plant.spaceRequired;
    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    const plantAssString = this.plants.map(p => p.plantName).sort((a, b) => a.localeCompare(b))
    const plantsRow = `Plants in the garden: ${plantAssString.join(', ')}`;

    let storageRow = `Plants in storage: The storage is empty.`;

    if (this.storage.length > 0) {
      const storageAssString = this.storage.map(p => `${p.plantName} (${p.quantity})`);
      storageRow = `Plants in storage: ${storageAssString.join(', ')}`
    }
    return [
      `The garden has ${this.spaceAvailable} free space left.`,
      plantsRow,
      storageRow
    ].join('\n');
  }
}
