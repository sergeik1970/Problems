// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list.
//  The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// не работает на leetCode

function mergeTwoLists(list1, list2) {
  let res = []
    let first = 0;
    let second = 0;
    while ((first < list1.length) && (second < list2.length)) {
        // Если первый элемент первого списка меньше второго элемента второго списка
        if (list1[first] <= list2[second]) {
            // то добавляем его в массив
            res.push(list1[first]);
            first++;
        }
        else {
            // иначе добавляем второй элемент второго списка
            res.push(list2[second])
            second++;
        }
    }
    while (first < list1.length) {
        // Добавляем оставшиеся элементы первого списка
        res.push(list1[first]);
        first++;
    }
    while (second < list2.length) {
        // Добавляем оставшиеся элементы второго списка
        res.push(list2[second]);
        second++;
    }
    return res;
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])); // [1, 1, 2, 3, 4, 4];
