window.onload=function(){
    now=0;
    next=0;
    let lia=document.querySelectorAll(".ban li")
    let lib=document.querySelectorAll(".nav li")
    let aaa=document.querySelectorAll(".aaa")
    function move(){
        next++;
        if(next>lia.length-1){
            next=0;
        }
        lia[next].style.zIndex=15;
        lib[next].classList.add("hot");
        aaa[next].style.zIndex=1;
        lia[now].style.zIndex=0;
        lib[now].classList.remove("hot");
        aaa[now].style.zIndex=0;
        now=next;
    }
    let t=setInterval(move,2000)
    for(let j=0;j<lib.length;j++){
        lib[j].onmouseenter=function(){
            if(j==now){
                return;
            }
            else if(j>now){
                lia[now].style.zIndex=0;
                lia[j].style.zIndex=15;
                aaa[now].style.zIndex=0;
                aaa[j].style.zIndex=1;
                lib[now].classList.remove("hot");
                lib[j].classList.add("hot");
                next=now=j;
            }
            else if(j<now){
                lia[now].style.zIndex=0;
                lia[j].style.zIndex=15;
                aaa[now].style.zIndex=0;
                aaa[j].style.zIndex=1;
                lib[now].classList.remove("hot");
                lib[j].classList.add("hot");
                next=now=j;
            }
        }
    }

    let arr1 = $(".daoshu").map(function(){
        return $(this).offset().top
    })
    arr1 = arr1.toArray()
    let arr = $(".nrone").map(function(){
        return $(this).offset().top
    })
    arr = arr.toArray()
    let flag = true;
    window.onscroll=function(){
        let sh=document.body.scrollTop || document.documentElement.scrollTop;
        let yfive=document.querySelector(".yfive")
        let louceng=document.querySelector(".louceng")
        let topa=document.querySelector(".top")
        if(sh>150){
            yfive.style.display="block";
        }
        else if(sh==0){
             yfive.style.display="none";
        }
        else if(sh>600){
            louceng.style.display="block";
        }
        if(sh>700){
            topa.style.top=0;
        }
        else{
            topa.style.top="-50px";
        }
        yfive.onclick=function(){
			animate(document.body,{scrollTop:0},2000);
			animate(document.documentElement,{scrollTop:0},2000);
		}
        if(!flag){
            return
        }
        sh>=600 ? $(".louceng").slideDown():$(".louceng").slideUp()
        let index = arr.findIndex(item=>item>sh)
        if(index>=0){
            $(".rong")
                .removeClass("active")
                .eq(index)
                .addClass("active")
        }

        let index1 = arr1.findIndex(item=>item>sh)
        if(index1>=0){
            $(".daoshu")
                .removeClass("active")
                .eq(index)
                .addClass("active")
        }
    }
    $(".rong").click(function(){
        let index = $(this).index()-1
        console.log(index)
        flag = false
        $("html")
        .stop()
        .animate({scrollTop:arr[index]-200},function(){
            flag = true
        })
        $(".rong")
            .removeClass("active")
            .eq(index)
            .addClass("active")
    })
    $(".hit").click(function(){
        animate(document.body,{scrollTop:0},2000);
        animate(document.documentElement,{scrollTop:0},2000);
    })













}