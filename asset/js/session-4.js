const products = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    image: "../img/flash-sales/havit-contoller.jpg",
    imageAlt: "havic controller",
    currentPrice: "$120",
    oldPrice: "$160",
    rating: 5,
    reviewCount: 88,
    category: "Gaming"
  },
  {
    id: 2,
    title: "AK Mechanical Keyboard", // Corrected based on image alt
    image: "../img/flash-sales/ak-keyboard.jpg",
    imageAlt: "ak keyboard",
    currentPrice: "$100",
    oldPrice: "$160",
    rating: 5,
    reviewCount: 88,
    category: "Computer Accessories"
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor", // Corrected based on image alt
    image: "../img/flash-sales/ips-monitor.jpg",
    imageAlt: "ips monitor",
    currentPrice: "$920",
    oldPrice: "$160",
    rating: 5,
    reviewCount: 88,
    category: "Monitors"
  },
  {
    id: 4,
    title: "Gaming Comfort Chair", // Corrected based on image alt
    image: "../img/flash-sales/comfort-chair.jpg",
    imageAlt: "comfort chair",
    currentPrice: "$220",
    oldPrice: "$160",
    rating: 5,
    reviewCount: 88,
    category: "Furniture"
  }
];




const table = document.querySelector('.cart-main-table')


function renderCartItems(target, itemsArr) {

    if(itemsArr.length > 0) {
        itemsArr.forEach(element => {
            const tr = document.createElement('tr')
            tr.classList.add('cart-item')
            let currentQuantity = 1
            // first td START
            const tdFirst = document.createElement('td')
            const wrapperDiv = document.createElement('div')
            wrapperDiv.setAttribute('class', 'flex align-center g-24')
            const imageWrapper = document.createElement('div')
            imageWrapper.setAttribute('class', 'image relative')

            const productImage = document.createElement('img')
            productImage.setAttribute('src', element.image)
            productImage.setAttribute('alt', element.imageAlt)
            
            const removeBtn = document.createElement('button')

            const removeIcon = document.createElement('img')
            removeIcon.setAttribute('src', '../img/icons/remove-item.svg')
            
            const titleWrapper = document.createElement('div')
            titleWrapper.setAttribute('class', 'title')

            const title = document.createElement('h2')
            title.textContent = element.title


            titleWrapper.append(title)
            removeBtn.append(removeIcon)
            imageWrapper.append(productImage, removeBtn)
            wrapperDiv.append(imageWrapper)
            tdFirst.append(wrapperDiv)
            // first td END


            // second td START
            const tdSecond = document.createElement('td')
            const priceWrapper = document.createElement('div')
            priceWrapper.setAttribute('class', 'price')
            priceWrapper.textContent = element.currentPrice
            tdSecond.append(priceWrapper)
            // second td END

            // third td START
            const tdThird = document.createElement('td')
            const quantitySelector = document.createElement('input')
            quantitySelector.setAttribute('type', 'number')
            quantitySelector.setAttribute('min', 1)
            quantitySelector.setAttribute('value', 1)
            tdThird.append(quantitySelector)

            
            quantitySelector.addEventListener('change', (e) => {
                const subTotal = tr.querySelector('.sub-total')
                currentQuantity = Number(e.target.value)
                subTotal.textContent = `$ ${currentQuantity * Number(element.currentPrice.replace('$', ''))}`
            })

            // third td END


            // fourth td START
            const tdFourth = document.createElement('td')
            const subTotalWrapper = document.createElement('div')
            subTotalWrapper.setAttribute('class', 'sub-total')
            subTotalWrapper.textContent = element.currentPrice
            tdFourth.append(subTotalWrapper)
            // fourth td END


            // append
            tr.append(tdFirst, tdSecond, tdThird, tdFourth)
            target.append(tr)
        });
    }

    

}

renderCartItems(table, products)
