
    // URL'dan product ID olish
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    // Fashion mahsulotlari ro'yxati
    const products = [
      {
        id: "1",
        name: "Men's T-Shirt",
        img: "../image/T-shirt2.png",
        description: "Comfortable cotton T-shirt for men, available in multiple colors.",
        price: "$20",
        details: "Made from 100% cotton, breathable and lightweight. Perfect for daily wear."
      },
      {
        id: "2",
        name: "Women's Dress",
        img: "../image/t-shirtMan.png",
        description: "Elegant women's dress, great for parties and events.",
        price: "$45",
        details: "Polyester blend, soft texture, available in sizes S to XL."
      },
      {
        id: "3",
        name: "Sport Shoes",
        img: "../image/t-shirtMan2.png",
        description: "Lightweight sport shoes for running and casual wear.",
        price: "$60",
        details: "Durable rubber sole, breathable mesh material, available in multiple sizes."
      },
      {
        id: "4",
        name: "Shoes",
        img: "../image/shoes1.png",
        description: "High-quality leather handbag, stylish and durable.",
        price: "$75",
        details: "Made with premium leather, spacious compartments, adjustable strap."
      },
      {
        id: "5",
        name: "Shoes",
        img: "../image/shoes2.png",
        description: "High-quality leather handbag, stylish and durable.",
        price: "$75",
        details: "Made with premium leather, spacious compartments, adjustable strap."
      },
      {
        id: "6",
        name: "Shoes",
        img: "../image/shoes3.png",
        description: "High-quality leather handbag, stylish and durable.",
        price: "$75",
        details: "Made with premium leather, spacious compartments, adjustable strap."
      },
      {
        id: "7",
        name: "Bag",
        img: "../image/bag1.png",
        description: "High-quality leather handbag, stylish and durable.",
        price: "$75",
        details: "Made with premium leather, spacious compartments, adjustable strap."
      },
      {
        id: "8",
        name: "Bag",
        img: "../image/bag2.png",
        description: "High-quality leather handbag, stylish and durable.",
        price: "$75",
        details: "Made with premium leather, spacious compartments, adjustable strap."
      }
    ];

    const product = products.find(p => p.id === id);

    if(product){
      document.getElementById("product-container").innerHTML = `
        <div class="detail-container">
          <div><img src="${product.img}" alt="${product.name}"></div>
          <div class="product-info">
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <div class="price">${product.price}</div>
            <button class="buy-btn">Buy Now</button>
            <h3 style="margin-top:20px;">Details</h3>
            <p>${product.details}</p>
          </div>
        </div>
      `;

      // Related productlar (tanlangani tashqari)
      const relatedHTML = products
        .filter(p => p.id !== id)
        .map(p => `
          <div class="related-card">
            <img src="${p.img}" alt="${p.name}">
            <h4>${p.name}</h4>
            <div class="price">${p.price}</div>
            <a href="fashion-detail.html?id=${p.id}">View Details</a>
          </div>
        `).join("");
      document.getElementById("related-container").innerHTML = relatedHTML;
    } else {
      document.getElementById("product-container").innerHTML = "<p>Product not found</p>";
    }
