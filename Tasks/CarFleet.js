function carFleet(target, position, speed) {
  // Создаем массив с позицией и временем движения до цели
  let cars = position.map((p, i) => ({
    pos: p,
    time: (target - p) / speed[i],
  }));
  //   Сортируем по позиции
  cars.sort((a, b) => b.pos - a.pos);
  console.log(cars);
  //   Переменные
  let parks = 0;
  let maxTime = 0;
  //   Ддя каждой машины
  for (let car of cars) {
    // Если машина успевает догнать впереди машину, если её врем меньше предыдущей
    //  - то она будет в этом же автопарке,
    //  если нет, то в новом
    if (car.time > maxTime) {
      parks++;
      // И остальные машины будут пытаться догнать эту машину с её временем
      maxTime = car.time;
    }
  }
  return parks;
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
console.log(carFleet(10, [3], [3]));
console.log(carFleet(100, [0, 2, 4], [4, 2, 1]));
