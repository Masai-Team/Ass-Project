
  //Image crousel section part
  var i = 0;
  var img = [
    "https://rcareers.ril.com/sap/bc/bsp/sap/ZEREC_MIME/RR_HomePage_V1/img/carousel05.jpeg",
    "https://rcareers.ril.com/sap/bc/bsp/sap/ZEREC_MIME/RR_HomePage_V1/img/carousel04.jpeg",
    "https://rcareers.ril.com/sap/bc/bsp/sap/ZEREC_MIME/RR_HomePage_V1/img/carousel03.jpeg",
    "https://rcareers.ril.com/sap/bc/bsp/sap/ZEREC_MIME/RR_HomePage_V1/img/carousel02.jpeg",
    "https://rcareers.ril.com/sap/bc/bsp/sap/ZEREC_MIME/RR_HomePage_V1/img/carousel01.jpeg",
  ];
  var time = 5000;
  function changeImg() {
    document.slide.src = img[i];
    console.log(img)
    if (i < img.length - 1) {
      i++;
    } else {
      i = 0;
    }
    setTimeout("changeImg()", time);
  }
  window.onload = changeImg;

  //Job opportunities card

  //Array of objects having pair of Post and Place name
  var card = [
    {
      post: "JioMart Team Leader",
      place: "Punjab, Ludhiana",
    },
    {
      post: "Customer Service Officer",
      place: "Punjab, Dera Bassi",
    },
    {
      post: "CSO ADYAR",
      place: "Tamil Nadu, Chennai",
    },
    {
      post: "Customer Service Officer",
      place: "Punjab, Sunam",
    },
    {
      post: "JioMart Team Lead Officer",
      place: "Punjab, Dhuri",
    },
    {
      post: "Customer Service Officer",
      place: "Punjab, Dhuri",
    },
    {
      post: "JioMart Team Leader Officer",
      place: "Punjab, Chandigardh",
    },
    {
      post: "JioMart Team Leader Officer",
      place: "Punjab, Amritsar",
    },
    {
      post: "Customer Service Officer",
      place: "Punjab, Malerkotla",
    },
    {
      post: "SIS Incharge",
      place: "Pradesh(West), Gaziabad",
    },
    {
      post: "JioMart Team Lead Officer",
      place: "Punjab, Nabha",
    },
    {
      post: "JioMart Team Lead Officer",
      place: "Punjab, Jalandhar",
    },
    {
      post: "JioMart Team Lead Officer",
      place: "Punjab, Jalandhar",
    },
    {
      post: "JioMart Team Lead Officer",
      place: "Punjab, Gobindgarh",
    },
    {
      post: "Jio Team Lead Officer",
      place: "Punjab, Ludhiana",
    },
    {
      post: "Pharmacist - Nalagarh",
      place: "Himachal Pradesh, Shimla",
    },
  ];
  card.map(function (elem, index) {
    var ind = index + 1;
    var divCard = document.createElement("div");
    divCard.setAttribute("class", "featured-card");
    divCard.setAttribute("id", "FC" + ind);
    // console.log(divCard); 
    var post = document.createElement("p");
    post.setAttribute("id", "featured-post");
    post.textContent = elem.post;
    var place = document.createElement("p");
    place.textContent = elem.place;
    var btn = document.createElement("button");
    btn.textContent = "View Details";
    btn.setAttribute("class", "featured-btn txtclr-blue txtclr-white");
    divCard.append(post, place, btn);
    document.querySelector("section").append(divCard);
  });


  var left = 1;
  var right = 6;
  function show() {
    for (var i = left; i < right; i++) {
      document.getElementById("FC" + i).style.display = "inline-block";
      // console.log(i)
    }
  }

  //method to slide Featured opportunities card to left
  function leftMove() {
    if (left < card.length - 5 && right <= card.length) {
      document.getElementById("FC" + left).style.display = "none";
      left += 1, right += 1;
      for (var i = left; i < right; i++) {
        document.getElementById("FC" + i).style.display = "inline-block";
      }
    }
    else {
      return;
    }
    setTimeout("leftmove()", 2000);
  }
  function rightMove() {
    if (left > 1 && right > 6) {
      document.getElementById("FC" + right).style.display = "none";
      left -= 1, right -= 1;
      for (var i = left; i < right; i++) {
        document.getElementById("FC" + i).style.display = "inline-block";
      }
    }
    else {
      return;
    }
  }
  // Window onload function calling multiple function inside callbackfunction
  window.onload = function () {
    changeImg();
    show();
    showBrand();
    Customer()
  }


  // Our brands section starts here
  var data = [
    {
      logo: "https://relianceretail.com/img/brands/reliance-fresh.png",
      heading: "India's largest chain of neighbourhood store"
    },
    {
      logo: "https://relianceretail.com/img/brands/reliance-smart.png",
      heading: "Supermarket offering everything under one roof at superior value"
    },
    {
      logo: "https://relianceretail.com/img/brands/reliance-smart-point.png",
      heading: "Neighbourhood Convenience Store"
    },
    {
      logo: "https://relianceretail.com/img/brands/larg/jiomart-logo.png",
      heading: "Online grocery store"
    },
    {
      logo: "https://relianceretail.com/img/brands/reliance-digital.png",
      heading: "India's largest consumer electronics retail chain"
    },
    {
      logo: "https://relianceretail.com/img/brands/jio-digital-life.jpg",
      heading: "India's largest mobility & communication retail chain"
    },
    {
      logo: "https://relianceretail.com/img/brands/reliance-trends.png",
      heading: "India's largest fashion destination"
    },
    {
      logo: "https://relianceretail.com/img/brands/trends-woman-hp-logo.png",
      heading: "Women focused apparel store chain"
    },
    {
      logo: "https://relianceretail.com/img/brands/trends-man-hp-logo.png",
      heading: "Men focused apparel store chain"
    },
    {
      logo: "https://relianceretail.com/img/brands/trends-junior-hp-logo.png",
      heading: "Kids focused apparel store chain"
    },
    {
      logo: "https://relianceretail.com/img/brands/trends-footwear-hp-logo.png",
      heading: "India's largest family footwear retail chain"
    },
    {
      logo: "https://relianceretail.com/img/brands/reliance-project-eve.png",
      heading: "A premium experiential retail chain exclusively for women"
    },
    {
      logo: "https://relianceretail.com/img/brands/reliance-jewels.png",
      heading: "India's leading jewellery speciality retail chain store"
    },
    {
      logo: "https://relianceretail.com/img/brands/ajio.png",
      heading: "curated online fashion store"
    },
    {
      logo: "https://relianceretail.com/img/brands/hamleys.png",
      heading: "India's finest toy shop in the world"
    },
    {
      logo: "https://relianceretail.com/img/brands/reliance-brands.png",
      heading: "Exponents of good living since 2007"
    }
    ,
    {
      logo: "https://relianceretail.com/img/brands/reliance-brands.png",
      heading: "Exponents of good living since 2007"
    }
  ]
  data.map(function (elem, index) {
    var ind = index + 1;
    var divCard = document.createElement("div");
    divCard.setAttribute("class", "card");
    divCard.setAttribute("id", "c" + ind);
    console.log(divCard)

    var image = document.createElement("img");
    image.setAttribute("src", elem.logo);
    image.setAttribute("height", "40%");
    image.setAttribute("width", "55%");

    var logo_txt = document.createElement("p");
    logo_txt.setAttribute("class", "card-heading")
    logo_txt.textContent = elem.heading;

    divCard.append(image, logo_txt);
    document.querySelector("#sec").append(divCard);
    // console.log(elem);
  })
  var brandLeft = 1;
  var brandRight = 5;
  function showBrand() {
    for (var i = brandLeft; i < brandRight; i++) {
      document.getElementById("c" + i).style.display = "inline-block";
    }
  }
  function brandLeftMove() {
    if (brandLeft < data.length - 4 && brandRight <= data.length) {
      document.getElementById("c" + brandLeft).style.display = "none";
      brandLeft += 1, brandRight += 1;
      for (var i = brandLeft; i < brandRight; i++) {
        document.getElementById("c" + i).style.display = "inline-block";
      }
    }
    else {
      return;
    }
    setTimeout("brandLeftmove()", 2000);
  }
  console.log(brandLeft, brandRight);
  function brandRightMove() {
    if (brandLeft > 1 && brandRight > 5) {
      console.log(brandRight)
      document.getElementById("c" + brandRight).style.display = "none";
      brandLeft -= 1, brandRight -= 1;
      for (var i = brandLeft; i < brandRight; i++) {
        document.getElementById("c" + i).style.display = "inline-block";
      }
    }
    else {
      return;
    }
  }

  // values dynamic div section starts here

  var cust = [
      {
        val : "We will demonstrate a proactive Customer First & a Customer Delightmind-set consistently."
      },
      {
        val : "We will act at all times to ensure Reliance remains the first choice for our customers."
      },
      {
        val : "We will actively listen to customer inputs to continuously improveour products, services and the customer experience."
      },
      {
        val : "We will work proactively and go the extra mile to nurture and growall our customer relationships."
      },
      {
        val : "To delight our end customers best, we will serve our internal andexternal customers, equally well."
      }
  ]
  function Customer(){
    
  cust.map(function(elem){
    var divCust = document.createElement("div");
    divCust.setAttribute("id", "dynamic-value-txt");

    var val = document.createElement("p");
    val.setAttribute("id", "customer");
    
    val.textContent = elem.val;

    divCust.append(val);
    document.querySelector(".values-dynamic-txtBox").append(divCust);

  })
}

  // Ownership section starts here

  var own = [
      {
        val : "We will prioritise and always align our work keeping the largerpurpose of the corporation in mind.",
      },
      {
        val : "We will operate with a personal stake and an ownership mind-set andplay to win.",
      },
      {
        val : "We will always remain agile and anticipate what will make a difference to our stakeholders tomorrow and make it happen with speed."
      },
      {
        val : "We will always commit to the highest standards of safety and environment."
      },
      {
        val : "We will conduct ourselves to ensure highest standards of corporatecitizenship."
      }
  ]
  function Ownership(){
    own.map(function(elem){
      var divOwn = document.createElement("div");
      divOwn.setAttribute("id", "dynamic-value-txt");

      var val = document.createElement("p");
      val.textContent = elem.value;

      divOwn.append(val);
      document.querySelector(".values-dynamic-txtBox").append(divOwn);
      document.getElementById("customer").textContent = "";
    })
  }