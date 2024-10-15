let link = document.getElementsByClassName("link")
let curr_value = 1;
        function activeLink(){
            for ( l of link ){
                l.classList.remove("active")
            }
            event.target.classList.add("active");
            curr_value = event.target.value;
        }

        function backBtn(){
            if (curr_value > 1){
                for ( l of link){
                    l.classList.remove("active");
                }
                curr_value--;
                link[curr_value-1].classList.add("active");
            }
        }

        function nextBtn(){
            if (curr_value < 7){
                for ( l of link){
                    l.classList.remove("active");
                }
                curr_value++;
                link[curr_value-1].classList.add("active");
            }
        }
