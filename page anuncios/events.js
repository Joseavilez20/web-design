
(function() {
    // your page initialization code here
    // the DOM will be available here
    const btn_filters = document.getElementById("btn-filter");
    const form_filter = document.getElementsByClassName("form-filter");
    const btn_filter = document.getElementById("filter");

      

    btn_filters.addEventListener('click', function(){
        
         document.body.classList.toggle('stop-scrolling');
        form_filter[0].classList.remove("d-none");
       
    })

    btn_filter.addEventListener('click', function(){
        document.body.classList.remove('stop-scrolling');
        form_filter[0].classList.toggle("d-none");
        
        
    })
    
 
 })();
