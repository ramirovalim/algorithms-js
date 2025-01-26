// console.log('### Total Meals ###');

// module.exports = {
// 		calculate: function (money) {
// 			let calculator = new MealsCalculator({ money: money });
// 			return calculator.calculate(money);
// 		}
// }

// class MealsCalculator {
// 	constructor(params) {
// 		this.price = 3.59;
// 		this.packageRefund = 0.54;

// 		this.meals = 0;
// 		this.money = params.money;
// 	}

// 	calculate() {
// 		this.howManyMeals();

// 		return {
// 			moneyLeft: this.money.toFixed(2),
// 			totalMeals: this.meals
// 	}
// }

// 	howManyMeals() {
// 		let money = this.money;
// 		if (money < this.price) {
// 			return;
// 		}

// 		let meals = Math.floor(money / this.price);
// 		money -= meals * this.price;
// 		this.meals += meals;
// 		this.money = money + meals * this.packageRefund;
// 		this.howManyMeals();
// 	}
// }

const MEAL_PRICE = 3.59;
const PACKAGE_DEPOSIT = 0.54;

const calculate = (initialAmount) => {
  const calculateHelper = (amount, accumulatedMeals) => {
    if (amount < MEAL_PRICE) {
      // console.log('Money left: $', Number(amount.toFixed(2)));
      // console.log('Total meals: ', accumulatedMeals);
      return {
        moneyLeft: Number(amount.toFixed(2)),
        totalMeals: accumulatedMeals,
      };
    }

    const thisRoundMeals = Math.floor(amount / MEAL_PRICE);
    const newAmount = (amount % MEAL_PRICE) + thisRoundMeals * PACKAGE_DEPOSIT;

    return calculateHelper(newAmount, accumulatedMeals + thisRoundMeals);
  };

  return calculateHelper(initialAmount, 0);
};

export default calculate;
