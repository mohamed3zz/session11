// document.body.onclick= () => {
//     // location.assign("https://www.google.com")
//     location.href ="https://www.google.com";
// }
// const checkonline = () => {
//     const isonline = navigator.onLine;
//     if (!isonline) {
//         return  
//     }
//     else {
//      document.body.textContent="is offline";
//     }
    
// }
// checkonline();
// let sectiontrip=document.querySelector(".trips");
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
let flag = document.querySelector(".flag")
let counterhours = 0
let counterminutes = 0
let counterseconds = 0

let totop = document.querySelector(".totop")
function clock() {
    let date = new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    
    if (hours==0)
        {
hours=12;
        }  
        if (hours<12) {
            flag="AM";
        }
        if (hours>12)
            {
    hours = hours - 12 ;
    flag= "PM";
            }
            document.querySelector(".hours").textContent=hours;
            document.querySelector(".minutes").textContent=minutes;
            document.querySelector(".seconds").textContent=seconds;
            document.querySelector(".flag").textContent=flag;
            setTimeout(function() {clock()}, 1000)
        }
        clock();




let cursor = document.querySelector(".circle")
window.addEventListener("mousemove" , (e) => {
    cursor.style.left = e.clientX  -20 +"px";
    cursor.style.top = e.clientY -20 + "px";
})
let loading_page = document.querySelector(".loading-page");
let loading_title = document.querySelector(".loading-page h2");
window.addEventListener("DOMContentLoaded" , () => {
    loading_title.classList.add(`hidden_title`);
    loading_page.classList.add(`hidden_loader`);
})
// window.addEventListener("scroll" , () => {
    //     console.log(document.querySelector(".trips").offsetTop);
    // console.log(scrollY);
    
    // if(scrollY>100) {
        //     document.body.style.backgroundColor= "red";
        // }
        // else {
            //     document.body.style.background= "transparent";
            // }
            
            //     if(scrollY>=sectiontrip.offsetTop)
            //     {
            // sectiontrip.style.background="red"
            //     }
            //     else {
                //         sectiontrip.style.background="transparent"
                //     }
                // })
                let nav = document.querySelectorAll("ul li");
                let sections = document.querySelectorAll("section")
                let sec1 = document.querySelector(".section1")
let menu = document.querySelectorAll("ul li a")
console.log(menu);
totop.onclick = () => {
    scrollTo({top:0,
    })
}

window.addEventListener("scroll" , () => { 
    
    let winscroll = window.scrollY;
    if (winscroll>sections[1].offsetTop)
        {
            totop.classList.add(`toup`)
        }
        else {
            totop.classList.remove(`toup`)
        }
        sections.forEach((section) => {
            let sectionid =section.getAttribute("id");
            let sectionoffsettop = section.offsetTop;
            
            
            menu.forEach((menu) => {
                let sectionref=menu.getAttribute("href").slice(1);
                
                if (winscroll>=sectionoffsettop - 200) {
                    if (sectionid==sectionref) {
                        menu.classList.add(`active`);
                        document.title=`BOM | ${sectionid}`;
                    }
                    else {
                        menu.classList.remove(`active`);
                    }
                }
    })
})

})
window.onblur = () => {
    document.title="GoodBye"
    close();
}
let initialtitle = document.title 
window.onfocus = () => {
    document.title= `BOM | ${initialtitle}`;
    
}
