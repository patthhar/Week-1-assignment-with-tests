/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var cateogorySpend = categoryWiseSpend(transactions);
  var answer = [];

  for (var i=0; i<Object.keys(cateogorySpend).length; i++) {
    var key = Object.keys(cateogorySpend)[i];
    answer.push(
      {
        category: key,
        totalSpent: cateogorySpend[key]
      }
    );
  }
  console.log(answer);
  return answer;
}

function categoryWiseSpend(transactions) {
  var answerObj = {};
  for (var i=0; i<transactions.length; i++) {
    var transaction = transactions[i];

    if (answerObj[transaction.category]) {
      answerObj[transaction.category] += transaction.price;
    } else answerObj[transaction.category] = transaction.price;
  }
  return answerObj;
}

module.exports = calculateTotalSpentByCategory;
