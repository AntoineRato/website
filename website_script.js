
    const scrollable = document.querySelector('.scrollable');
    const explore = document.querySelector('.explore');
    const footerClass = document.querySelector('.footerClass');

    function lerp(start, end, t)
    {
        return start * (1 - t) + end * t;
    }
    
    function init()
    {
        document.body.style.height = `${scrollable.getBoundingClientRect().height}px`;
        footerClass.style.transform = `translateY(${scrollable.getBoundingClientRect().height}px)`;
    }

    function scroll()
    {
        scrollable.style.transform = `translate3d(0, ${-window.scrollY}px, 0)`;
        sticky();
        window.requestAnimationFrame(scroll);
    }

    function sticky()
    {
        let offset = window.innerHeight * 0.5;
        if(window.scrollY < offset)
        {
            explore.style.transform = `translateY(0)`;
        }
        if(window.scrollY >= offset && window.scrollY <= offset * 2)
        {
            explore.style.transform = `translateY(${window.scrollY - offset}px)`;
        }
        if(window.scrollY > offset * 2)
        {
            explore.style.transform = `translateY(${offset}px)`;
        }
    }

    init()
    scroll()