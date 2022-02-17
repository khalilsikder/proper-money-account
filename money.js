document.getElementById("login-button").addEventListener('click',function(){
    let totalExpenses = document.getElementById('total-expenses');
    let expenses = totalExpenses.value;
    let inputFood = document.getElementById('input-food');
    let Food = inputFood.value;
    let inputRent = document.getElementById("input-rent");
    let Rent = inputRent.value;
    let inputClothes = document.getElementById("input-cloth");
    let Clothes = inputClothes.value;
    let sumExpenses =parseInt(Food) + parseInt(Rent) + parseInt(Clothes);
    //  console.log(sumExpenses);
    totalExpenses.value = sumExpenses
    //  totalExpenses.value = '';
})