const rideCards = [
    {rideName:'Ganga Aarti Boat-Ride',
    desc: 'Experience the beautiful Ganga-Aarti from boat.',
    rideTime: '18:00 Fixed',
    route: 'Kedar Ghat-Ganga Aarti-Marnikarnika Ghat-Kedar Ghat',
    pickupGhat: 'Kedar ghat',
    estimatedAmount: '@₹1399/- onwards',
    imgLink: 'https://images.thrillophilia.com/image/upload/s--hy87qy6---/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/013/070/original/1569826243_ganga_arti1.jpg.jpg?1569826243'
    },
    {rideName:'Regular Boat-Ride',
    desc: 'Enjoy the beautiful view of the ghats of Varanasi',
    rideTime: 'Flexible',
    route: 'Kedar Ghat-Marnikarnika Ghat-Kedar Ghat',
    pickupGhat: 'Kedar ghat',
    estimatedAmount: '@₹1099/- onwards',
    imgLink: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/72/68/de.jpg'
    }
]
const timeSlots = [
    // '5:00 AM',
    '05:30',
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '09:00',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '7:30 PM',
    // '8:00 PM',
]
// const pickupPoint = [
//     'Kedar Ghat',
//     'Assi Ghat',
// ]

const priceCard = [
    {amount: 1199,
    boatType: 'Hand Boat',
    riderRange: '1-6'    
    },
    {amount: 1499,
    boatType: 'Motor Boat',
    riderRange: '1-8'    
    },
    {amount: 1799,
    boatType: 'Motor Boat',
    riderRange: '1-10'    
    },
    {amount: 2099,
    boatType: 'Motor Boat',
    riderRange: '1-12'    
    },
]
const regularPrice = [
    {amount: 1099,
    boatType: 'Hand Boat',
    riderRange: '1-6'    
    },
    {amount: 1299,
    boatType: 'Motor Boat',
    riderRange: '1-8'    
    },
    {amount: 1799,
    boatType: 'Motor Boat',
    riderRange: '9-12'    
    }
]
const aartiPrice = [
    {amount: 1699,
    boatType: 'Hand Boat',
    riderRange: '1-6'    
    },
    {amount: 1799,
    boatType: 'Motor Boat',
    riderRange: '1-8'    
    },
    {amount: 2299,
    boatType: 'Motor Boat',
    riderRange: '9-12'    
    }
]
const validDiscounts = [
    {code:'harhargange',
    discountPrice: 50,
    partner: 'tastewithdada'
    },
    {code:'boatrr',
    discountPrice: 100,
    partner: 'gkp'
    },
    {code:'winteriscoming',
    discountPrice:50,
    partner: 'billu'
    }
]

module.exports = {rideCards, timeSlots, priceCard, aartiPrice, regularPrice, validDiscounts}