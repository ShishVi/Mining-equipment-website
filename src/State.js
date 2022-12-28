
let state = {
    products: [
        {name: 'Asic miners оптом', foto: './ItemProducts/image_1.png', id: '1'},
        {name: 'GPU фермы оптом', foto: './ItemProducts/image_2.svg', id: '2'},
        {name: 'Видеокарты оптом', foto: './ItemProducts/image_3.svg', id: '3'},
        {name: 'Аксессуары оптом', foto: './ItemProducts/image_4.svg', id: '4'},
        {name: 'Компьютерные комплектующие оптом', foto: './ItemProducts/image_5.svg', id: '5'},
        {name: 'Комплектующие для майнинга оптом', foto: './ItemProducts/image_6.svg', id: '6'},
    ],

    advantages: [
        {text: 'Более 5 лет успешной работы', foto_logo: './Advantages/svg.svg', id: 1},
        {text: 'Сотни положительных отзывов', foto_logo: './Advantages/svg.svg', id: 2},
        {text: 'Работаем по всей России', foto_logo: './Advantages/svg.svg', id: 3},
        {text: 'Сотрудничество с производителем', foto_logo: './Advantages/svg.svg', id: 4},
        {text: 'Гарантия на оборудование', foto_logo: './Advantages/svg.svg', id: 5},
        {text: 'Собственный склад в Москве', foto_logo: './Advantages/svg.svg', id: 6},
    ],

    itemBestsellers: [
        {
            name: 'Asic miners оптом',
            promotion: 'Хит',
            foto_product: './BestSellers/image_1.svg',
            price: '615 000 ₽',
            old_price: '',
            cart: './BestSellers/cart.svg',
            heart_logo: './BestSellers/empty_heart.svg',
            availability: 'В наличии',
            id: '1',
        },
        {
            name: 'Antminer S19j pro 110 Th/s',
            promotion: 'Sale',
            foto_product: './BestSellers/image_2.svg',
            price: '245 000 ₽',
            old_price: '315 000 ₽',
            cart: './BestSellers/cart.svg',
            heart_logo: './BestSellers/blue_heart.svg',
            availability: 'Под заказ',
            id: '2',
        },
        {
            name: 'Whatsminer M3x 12.5 Th/...',
            promotion: 'New',
            foto_product: './BestSellers/image_3.svg',
            price: '14 000 ₽',
            old_price: '',
            cart: './BestSellers/cart.svg',
            heart_logo: './BestSellers/empty_heart.svg',
            availability: 'В наличии',
            id: '3',
        },
        {
            name: 'Antminer Z15e 200 ksol',
            promotion: 'sale',
            foto_product: './BestSellers/image_4.svg',
            price: '290 000 ₽',
            old_price: '325 000 ₽',
            cart: './BestSellers/blue_cart.svg',
            heart_logo: './BestSellers/empty_heart.svg',
            availability: 'В наличии',
            id: '4',
        },
        {
            name: 'Innosilicon A11 1500 Mh/s...',
            promotion: 'Хит',
            foto_product: './BestSellers/image_5.svg',
            price: '173 000 ₽',
            old_price: '',
            cart: './BestSellers/cart.svg',
            heart_logo: './BestSellers/empty_heart.svg',
            availability: 'Под заказ',
            id: '5',
        }
    ],
    serviceItem: [
        {name: 'Работаем без выходных – 7 дней в неделю', foto: './About/service_item_1.svg', id: '1'},
        {name: 'Прямое сотрудничество с поставщиками', foto: './About/service_item_2.svg', id: '2'},
        {name: 'Быстрая авиадоставка от 14 дней', foto: './About/service_item_3.svg', id: '3'},
        {name: 'Предоплата за предзаказ от 30%', foto: './About/service_item_4.svg', id: '4'},
        {name: 'Официальный договор, полная защита средств', foto: './About/service_item_5.svg', id: '5'},
        {name: 'Видеопроверка для удаленных клиентов', foto: './About/service_item_6.svg', id: '6'},
    ],
}


export default state;
