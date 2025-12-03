/*
Create a function named "orderTea" that takes one parameter,"teaType".Inside this function create another function named "confirmOrder"
that return a message like "order confirmed for chai" Call confirmOrder from within "orderTea" and return the result
*/

function orderTea(teaType){
    function confirmOrder() {
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder()
}

let tea = orderTea("green tea");

console.log(tea);
