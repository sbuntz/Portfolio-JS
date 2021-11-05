window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
    var logoShrink = function () {
        const LogoCollapsible = document.body.querySelector('#Logo');
        if (!LogoCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            LogoCollapsible.classList.remove('is-hidden')
            LogoCollapsible.classList.add('navbarLogo')
        } else {
            LogoCollapsible.classList.remove('navbarLogo')
            LogoCollapsible.classList.add('is-hidden')
        }

    };
    var brandShrink = function () {
        const BrandCollapsible = document.body.querySelector('#Brand');
        if (!BrandCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            BrandCollapsible.classList.add('is-hidden')
            BrandCollapsible.classList.remove('navbarLogo')
        } else {
            BrandCollapsible.classList.add('navbarLogo')
            BrandCollapsible.classList.remove('is-hidden')
        }

    };
    // Shrink the navbar 
    navbarShrink();
    logoShrink();
    brandShrink();
    
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
    document.addEventListener('scroll', logoShrink);
    document.addEventListener('scroll', brandShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


    