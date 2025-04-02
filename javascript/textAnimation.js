window.addEventListener("wheel", function(dets){
    //console.log("Your mouse wheel is Scrolling...");
    if(dets.deltaY >0){
        console.log("Scrolling Downward Direction");
        gsap.to(".marque",{
            transform: "translateX(-200%)",
            duration: 4,
            repeat: -1,
            ease: 'none'
        })
        gsap.to(".marque img",{
            rotate:180
        })
    }else{
        console.log("Scrolling Upward Direction");
        gsap.to(".marque",{
            transform: "translateX(0%)",
            duration: 4,
            repeat: -1,
            ease: 'none'
        })
        gsap.to(".marque img",{
            rotate:0
        })
    }
})