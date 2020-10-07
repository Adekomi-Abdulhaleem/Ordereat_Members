/////////////////////////////////////////
    /////////////
    // get all elements

    var buttons = document.querySelectorAll('.button-container button')
    var eachDepartment = document.getElementsByClassName('department')
    
    /////////////

    /////////////
    // get each buttons
    
    buttons.forEach(function (item, index) {
        item.addEventListener('click', (event) => {

            // get all buttons to remove the active 
            for (i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('active')
            }

            // get clicked button and add the active class
            item.classList.add('active')

            // get all departments to remove the active class
            // set one to show and the other not to show
            for (i = 0; i < eachDepartment.length; i++) {
                var textNotShow = eachDepartment[i]
                var textToShow = eachDepartment[index]
                textNotShow.classList.remove('active')
            }
            textToShow.classList.add('active')
    })
    })
    
    /////////////

    
    /////////////////////////////////////////