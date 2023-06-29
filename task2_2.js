let goods = [

    {
        "id": 1,
        "name": 'Худи',
        "description": 'капюшон, рукава, флис',
        "sizes": ['XS','S','M','L','XL'],
        "price": 4000,
        "available": true,
    },
        
    {
        "id": 2,
        "name": 'Футболка1',
        "description": 'хлопок 95%, полиэстер 5%',
        "sizes": ['XXS','XS','S','M','L'],
        "price": 1200,
        "available": true,
    },

    {
        "id": 3,
        "name": 'Футболка2',
        "description": 'хлопок 97%, полиэстер 3%',
        "sizes": ['M','L','XL','XXL','XXXL', 'XXXXL'],
        "price": 1800,
        "available": true,
    },

    {
        "id": 4,
        "name": 'Штаны',
        "description": 'полноценные две штанины',
        "sizes": ['XXS','S','L'],
        "price": 5000,
        "available": true,
    },

    {
        "id": 5,
        "name": 'Шорты',
        "description": 'короткие штаны',
        "sizes": ['XXS','L'],
        "price": 2700,
        "available": true,
    },
]

let cart = [
    {
        "good": {
            "id": 1,
            "name": 'Худи',
            "description": 'капюшон, рукава, флис',
            "sizes": ['XS','S','M','L','XL'],
            "price": 4000,
            "available": true,
        },
        "amount": 5,
    },

    {
        "good": {
            "id": 3,
            "name": 'Футболка2',
            "description": 'хлопок 97%, полиэстер 3%',
            "sizes": ['M','L','XL','XXL','XXXL', 'XXXXL'],
            "price": 1800,
            "available": true,
        },
        "amount": 2,
    },
]

function addGood(id, amount) {
    if (id - 1 <= goods.length && id - 1 >= 0 ) {
        cart.push({
            "good":goods[id - 1],
            "amount": amount,
        }
        )
        return 'Good ${id} successfully added'
    } else {
        return "Good's id ${id} doesn't exist"
    }
}

function deleteGood(id) {
    let ind = 1
    for (const obj of cart) {
        if (obj.good.id == id) {
            cart.splice(ind - 1, 1)
            return "Good (id ${id}) successfully deleted"
        }
        ind += 1 
    }
    return "Good (id ${id}) is not in the cart"
    
}

function clearCart(someCart) {
    while (someCart.length != 0) {
        someCart.pop()
    }
    return 'succesfully'
}

function countCart(someCart) {
    let result = {
        totalAmount: 0,
        totalSumm: 0,
    }
    if (someCart.length > 0) {
        for (const item of someCart) {
            result.totalAmount += item.amount;
            result.totalSumm += item.amount * item.good.price    
        }
    } 
    return result
    
}

clearCart(cart)
console.log(cart)
addGood(3,1)
addGood(2,3)
deleteGood(3)
addGood(5,4)
addGood(1,7)
deleteGood(2)
const res = countCart(cart)
console.log(`Total amount of goods: ${res.totalAmount}, total price: ${res.totalSumm}`)
console.log(cart)