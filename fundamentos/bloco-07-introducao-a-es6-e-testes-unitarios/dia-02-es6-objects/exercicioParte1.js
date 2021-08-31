const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliverer = order.order.delivery.deliveryPerson;
  const custumerName = order.name;
  const phone = order.phoneNumber;
  const add = order.address.street;
  const num = order.address.number;
  const ap = order.address.apartment;
  const message = `Olá ${deliverer}, entrega para: ${custumerName}, 
  Telefone: ${phone}, ${add}, Nº: ${num}, AP: ${ap}`;

  return console.log(message);
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  let newCustomer = order.name;
  newCustomer = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  let price = order.payment.total;
  price = '50,00';
  const message = `Olá ${newCustomer}, o total do seu pedido de 
            ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$${price}`;
  return console.log(message);
};

orderModifier(order);