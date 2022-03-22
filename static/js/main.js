colors = {
    SUCCESS: "#33c68f",
    WARN: "#ffcc00",
    ERROR: "#ef1128"
}



const productsView = {
    data() {
        return {
            showFilterSettings: false,
            showExampleDropdown: true,
            displayingProducts: true,
            showQr: false,
            displayingAlternatives: false,
            displayingKvitton: false,
            products: [
                {
                    id: 0,
                    name: "iPhone 13",
                    desc: "Apple - 5G smartphone 128GB, Midnight",
                    itemImg: "/img/iphoneimg.png",
                    companyImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Elgiganten_logo.svg/1280px-Elgiganten_logo.svg.png",
                    time: "+1 år",
                    timeColor: colors.SUCCESS
                },
                {
                    id: 1,
                    name: "LG UHD TV",
                    desc: "LG – 55” 4K UHD LED-TV",
                    itemImg: "https://www.elgiganten.se/image/dv_web_D180001002744045/300101/lg-55-up75-4k-led-tv--pdp_zoom-3000--pdp_main-960.jpg",
                    companyImg: "https://theme.zdassets.com/theme_assets/1983830/628617e7910eda55b03b4fad50dfd6fc4bce5f69.png",
                    time: "3 mån",
                    timeColor: colors.ERROR
                },
                {
                    id: 2,
                    name: "Samsung Side-By-Side",
                    desc: "Samsung Side-By-Side, Black Steel",
                    itemImg: "https://cdn.cdon.com/media-dynamic/images/product/cloud/store/Refrigerators/000/072/385/799/72385799-131510745-11453-org.jpg?cache=132636551262615939&impolicy=product&imwidth=1200",
                    companyImg: "https://theme.zdassets.com/theme_assets/2414891/baf49871321217b8bd4c9473883c3c85215b6d11.svg",
                    time: "9 mån",
                    timeColor: colors.WARN
                },
                {
                    id: 3,
                    name: "Samsung Galaxy Tab S7+",
                    desc: "Samsung Galaxy Tab S7+ Wifi surfplatta, svart",
                    itemImg: "https://www.elgiganten.se/image/dv_web_D180001002493964/205080/samsung-galaxy-tab-s7-wifi-surfplatta-svart--pdp_zoom-3000--pdp_main-960.jpg",
                    companyImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Elgiganten_logo.svg/1280px-Elgiganten_logo.svg.png",
                    time: "7 mån",
                    timeColor: colors.WARN
                },
                {
                    id: 4,
                    name: "LISABO",
                    desc: "LISABO, Bord och 4 stolar, askfaner/ask",
                    itemImg: "https://www.ikea.com/se/sv/images/products/lisabo-bord-och-4-stolar-askfaner-ask__0921113_pe787668_s5.jpg?f=xxs",
                    companyImg: "https://www.ikea.com/se/sv/static/ikea-logo.f7d9229f806b59ec64cb.svg",
                    time: "+2 år",
                    timeColor: colors.SUCCESS
                },
                {
                    id: 5,
                    name: "Sleep Delux",
                    desc: "Kontinentalsäng med bäddmadrass Sleep Delux, vit",
                    itemImg: "https://www.mcdn.net/images/products/a4d51be1-cc2f-480f-843a-4cf6936626ed_370.jpg?width=812&height=597&crop=false",
                    companyImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/MIO_Logo.svg/1200px-MIO_Logo.svg.png",
                    time: "2 mån",
                    timeColor: colors.ERROR
                },
                {
                    id: 6,
                    name: "Husqvarna Automover 305",
                    desc: "Robotgräsklippare – Husqvarna Automover",
                    itemImg: "https://www-static-nw.husqvarna.com/-/images/aprimo/husqvarna/robotic-mowers/photos/studio/h310-2059.webp?v=882a0ee223296ea&format=WEBP_LANDSCAPE_CONTAIN_XL",
                    companyImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Husqvarna_logo.svg/2560px-Husqvarna_logo.svg.png",
                    time: "+4 år",
                    timeColor: colors.SUCCESS
                }
            ]
        }
    },

    methods: {
        toggleFilterSettings() {
            this.showFilterSettings = !this.showFilterSettings;
        },
        toggleExampleDropdown() {
            this.showExampleDropdown = !this.showExampleDropdown;
        },
        toggleProductsDisplay() {
            this.displayingProducts = !this.displayingProducts;

        },
        toggleShowQr() {
            this.showQr = !this.showQr;
        },
        toggleDisplayAlternatives() {
            this.displayingAlternatives = !this.displayingAlternatives;
        },
        toggleDisplayKvitton() {
            this.displayingKvitton = !this.displayingKvitton;
        }
    },

    compilerOptions: {
        delimiters: ["{[{", "}]}"]
    }
}

window.addEventListener("load", function(event) {

    const app = Vue.createApp(productsView);
    app.mount("#products-container");

});

