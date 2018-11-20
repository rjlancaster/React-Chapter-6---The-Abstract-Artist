import APIManager from "./APIManager"


class AnimalManager extends APIManager {
  getAnimal(id) {
    return this.get(id)
  }

  getAll() {
    return this.all()
  }
  removeAndList(id) {
    return this.delete(id)
      .then(e => e.json())
      .then(() => this.all())
  }
}

export default new AnimalManager("animals")