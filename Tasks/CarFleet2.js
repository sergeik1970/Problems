// 1776 LeetCode

function CarFleet2(cars) {
  // Количество авто
  let n = cars.length;
  // Если нет авто или 1 авто
  if (n === 0) return [];
  if (n === 1) return [-1];
  // Итоговый массив, заполняется -1 по умолчанию
  let res = Array(cars.length).fill(-1);
  // Позиции и скорость машин в виде массива
  const positions = cars.map((car) => car[0]);
  const speeds = cars.map((car) => car[1]);
  console.log("Позиции", positions);
  console.log("Скорости", speeds);
  // Создание стека
  const st = [];
  //
  // const EPS = 1e-12;
  // Цикл с конца
  for (let i = n - 1; i >= 0; i--) {
    console.log(
      `Начало поиска для авто ${i} с позицией ${positions[i]} и скоростью ${speeds[i]}м/с`
    );
    // Пока стек не пустой
    while (st.length > 0) {
      const j = st[st.length - 1];
      console.log(
        `Проверяем цель авто ${j} c позицией ${positions[j]} и скоростью ${speeds[j]}м/с`
      );
      // Успеет ли догнать
      if (speeds[i] <= speeds[j]) {
        console.log(
          `Авто ${i} никогда не догонит авто ${j}. Удаляем из стека.`
        );
        // Удаление из стека
        st.pop();
        continue;
      }

      const distance = positions[j] - positions[i];
      const speedDif = speeds[i] - speeds[j];
      const time = distance / speedDif;
      console.log(
        `Расстояние между авто ${i} и ${j} равно ${distance}м, скорость сближения ${speedDif}м/с, время до столкновения ${time}c`
      );
      // Если не успел врезаться
      if (res[j] === -1 || time <= res[j]) {
        res[i] = time;
        console.log(`Цель авто ${j}, в него авто ${i} врежется через ${time}с`);
        break;
      }

      console.log(`Авто ${j} успеет врезаться раньше и изменит скорость`);
      // Удаляем из стека
      st.pop();
    }

    if (st.length === 0) {
      console.log(`Целей больше нет`);
    }
    // Добавляем еще авто
    st.push(i);
    console.log(`Добавил ${i} в стек, теперь стек: `, JSON.stringify(st));
  }
  return res;
}

console.log(
  CarFleet2([
    [1, 2],
    [2, 1],
    [4, 3],
    [7, 2],
  ])
);

console.log(
  CarFleet2([
    [3, 4],
    [5, 4],
    [6, 3],
    [9, 1],
  ])
);
