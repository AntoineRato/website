
    const scrollable = document.querySelector('.scrollable');
    const explore = document.querySelector('.explore');
    const footerClass = document.querySelector('.footerClass');
    
    let current = 0;
    let target = 0;
    const ease = 0.1;

    function lerp(start, end, t)
    {
        return start * (1 - t) + end * t;
    }
    
    function init()
    {
        document.body.style.height = `${scrollable.getBoundingClientRect().height}px`;
        footerClass.style.transform = `translateY(${scrollable.getBoundingClientRect().height}px)`;
    }

    function smoothScroll()
    {
        target = window.scrollY;
        current = lerp(current, target, ease);
        scrollable.style.transform = `translate3d(0, ${-current}px, 0)`;
        sticky();
        window.requestAnimationFrame(smoothScroll);
    }

    function sticky()
    {
        let offset = window.innerHeight * 0.5;
        if(current < offset)
        {
            explore.style.transform = `translateY(0)`;
        }
        if(current >= offset && current <= offset * 2)
        {
            explore.style.transform = `translateY(${current - offset}px)`;
        }
        if(current > offset * 2)
        {
            explore.style.transform = `translateY(${offset}px)`;
        }
    }

    init()
    smoothScroll()