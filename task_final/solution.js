// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(name, phone, address, goods, sum) {

    let data = {client: name + ' ' + phone, order: {address: 'ул. ' + address.street + ', дом ' + address.house + ', ' + address.entrance + ' подъезд, ' + address.floor + ' этаж, кв ' + address.flat, sum: sum}, goods: []};

    let countOfGoods = goods.length;
    //data.order.address = address;
    
    for (let i = 0; i < countOfGoods; i++) {
        data.goods.push({title: goods[i].title, count: goods[i].count});
        //data.goods.push(goods[i].title);        
    }

    //data.order.sum = name + phone + address + goods + sum;
    //data.client = 'Иван';
    let result = {data};
    let jsonData = JSON.stringify(result);

    return jsonData;

}
