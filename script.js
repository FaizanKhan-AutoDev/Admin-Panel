document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".nav-bar-vertical");
    const short_navbar = document.querySelector(".short-bar-vertical");
    const collapse_view = document.querySelector(".collapse-view");
    const short_collapse_view = document.querySelector(".short-collapse-view");

    short_collapse_view.addEventListener("click", () => {
        navbar.style.display = "";
        collapse_view.style.display = "";
        short_collapse_view.style.display = "none";
        short_navbar.style.display = "none";

    })

    collapse_view.addEventListener("click", () => {
        navbar.style.display = "none";
        collapse_view.style.display = "none";
        short_collapse_view.style.display = "";
        short_navbar.style.display = "";

    })

    const navbar_gray = document.querySelector(".navbar-gray");
    const side_bar = document.querySelector(".side-bar");

    navbar_gray.addEventListener("click", () => {
        if (side_bar.style.display === "none" || side_bar.style.display === "") {
            side_bar.style.display = "inline";
            side_bar.style.border = "none";
        } else {
            side_bar.style.display = "none";
        }
    })

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 993) {
            side_bar.style.display = "inline";
            side_bar.style.border = "1px solid lightgray";
        }
    });

    // showing different forms/tables/product-lists
    tablecontent = document.querySelector(".table-content");
    tablebutton = document.querySelector("#BasicTable");

    productbutton = document.querySelector("#product-button");
    productlists = document.querySelector(".product-lists");

    tablebutton.addEventListener("click", () => {
        formcontent.style.display = "none";
        productlists.style.display = "none";
        tablecontent.style.display = "block";
    })

    formcontent = document.querySelector(".form-content");
    formbutton = document.querySelector("#BasicForm");

    formbutton.addEventListener("click", () => {
        tablecontent.style.display = "none";
        productlists.style.display = "none";
        formcontent.style.display = "block";
    })

    productbutton.addEventListener("click", () => {
        formcontent.style.display = "none";
        productlists.style.display = "block";
        tablecontent.style.display = "none";
    })
    
    const navbar_dropdown = document.querySelector(".navbar-top-dropdown-menu");
    const avatar = document.querySelector(".avatar");

    avatar.addEventListener("click", () => {
        console.log("avatar clicked")
        if (navbar_dropdown.style.display == "none") {
            navbar_dropdown.style.display = "block"

        } else {
            navbar_dropdown.style.display = "none"
        }
    })

    // dropdown signout button
    document.addEventListener("click", function(event) {
        let dropdown = document.querySelector(".navbar-top-dropdown-menu");
        let profileIcon =  document.querySelector(".avatar");
    
        if (!dropdown.contains(event.target) && !profileIcon.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });
});