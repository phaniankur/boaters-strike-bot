const rideCards = [
    {rideName:'Ganga Aarti Ride 🪔',
    desc: 'Watch the world renowned Ganga-Aarti of Dasashwamedh Ghat right from the boat itself.\nYour ride will start from Kedar Ghat to Marnikarnika Ghat via Ganga Aarti Darshan and back.\nFixed Time: 06:00 PM',
    route: 'Kedar-Aarti-Marnikarnika-Kedar',
    pickupGhat: 'Kedar ghat',
    imgLink: 'https://images.thrillophilia.com/image/upload/s--hy87qy6---/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/013/070/original/1569826243_ganga_arti1.jpg.jpg?1569826243'
    },
    {rideName:'Basic Ride',
    desc: 'The world heritage ghats of Varanasi.\nYour ride will start from Kedar Ghat to Assi Ghat to Marnikarnika Ghat and back to Kedar Ghat.',
    route: 'Kedar-Assi-Marnikarnika-Kedar',
    pickupGhat: 'Kedar ghat',
    imgLink: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/72/68/de.jpg'
    }
]
const timeSlots = [
    '1:00',
    '2:00',
    '3:00'
]
// const priceCard = [
//     '500',
//     '800',
//     '1000',
// ]

const priceCard = [
    {amount: 500,
    boatType: 'motor boat',
    riderRange: '1-4'    
    },
    {amount: 800,
    boatType: 'motor boat',
    riderRange: '5-8'    
    },
    {amount: 500,
    boatType: 'motor boat',
    riderRange: '8-12'    
    },
]
const validDiscounts = [
    {code:'harhargange',
    discountPrice: 50,
    partner: 'tastewithdada'
    },
    {code:'boatersop',
    discountPrice: 100,
    partner: 'gkp'
    }
]

module.exports = {rideCards, timeSlots, priceCard, validDiscounts}