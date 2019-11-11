//checking for mobile screen size
let breakpoint = window.matchMedia('(max-width: 425px)');
transformNav();
//executing transformation of navigation 
breakpoint.addListener(transformNav)


function transformNav() {
    //if mobile device screen size
    if (breakpoint.matches) {
        //move the navigation items to be above the header on the node tree branch thing
        let animatablePart = document.getElementById('menu-items');
        document.getElementsByTagName('body')[0].prepend(animatablePart);

        //declaring scroll position
        var scrollPos = 0;
        // adding scroll event
        window.addEventListener('scroll', function(){
        // checks scrolling if scrolling up, leave it there
        if ((document.body.getBoundingClientRect()).top > scrollPos) {
                animatablePart.style.transform = "translateY(0)";
                animatablePart.style.transitionTimingFunction = "ease-in-out";
                animatablePart.style.transitionDuration = "0.4s";
        //if user is scrolling down hide it
        } else {
                animatablePart.style.transform = "translateY(-60px)";
                animatablePart.style.transitionTimingFunction = "ease-in-out";
                animatablePart.style.transitionDuration = "0.4s";
            // saves the new position for iteration.
            scrollPos = (document.body.getBoundingClientRect()).top;
        }
        });
    } else {
        //otherwise, leave the menu part alone, leave it within the header.
        let animatablePart = document.getElementById('menu-items');
        document.getElementsByTagName('header')[0].prepend(animatablePart);
        animatablePart.style.display = "flex";
    }
}