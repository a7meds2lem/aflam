var myHttp = new XMLHttpRequest();
var theMovies =[];
var api=  [`https://api.themoviedb.org/3/movie/now_playing?api_key=ffc4bef798e3632bbb516fb3d3d0c3b2&language=en-US&page=1`,`https://api.themoviedb.org/3/movie/popular?api_key=ffc4bef798e3632bbb516fb3d3d0c3b2&language=en-US&page=1`,`https://api.themoviedb.org/3/movie/top_rated?api_key=ffc4bef798e3632bbb516fb3d3d0c3b2&language=en-US&page=1`,`https://api.themoviedb.org/3/trending/all/day?api_key=ffc4bef798e3632bbb516fb3d3d0c3b2`,`https://api.themoviedb.org/3/movie/upcoming?api_key=ffc4bef798e3632bbb516fb3d3d0c3b2&language=en-US&page=1`];

// for(var i=0 ; i<api.length ; i++){
//     $('.list li').eq[i].click()
// }

// if(  myHttp.open('GET',api[0]) = false){
//     myHttp.open('GET',api[0]);
//     display()
// }
// else{
// var i=0;
// display();
// $('.list li').eq(0).click(function(){
//     alert('............')
// })

// $('.list li').click(function(){
//     for(var i=0 ; i<api.length ; i++){
//         $('.list li').eq(i).click(function(){
//             myHttp.open('GET',api[i]);
//             alert()
//         })
//     }
// })
// for(var i=0 ; i<4 ; i++){
//     $('.list li').eq(i).addClass(api[i])
    // $('.list li').eq(i).click(function(){
    //     myHttp.open('GET',api[i]);
    //     display();
    //     // alert(".....")
    // })
// }



// $('.list li').click(function(){
//   let classe= $(this).class();
//   alert(classe)
// })
// for(var x=0 ; x<3 ; x++){
    myHttp.open('GET',api[0]);
    display(theMovies)

    $('.list .item1').click(function(){
        myHttp.open('GET',api[0]);
        display(theMovies);
    })
    $('.list .item2').click(function(){
        myHttp.open('GET',api[1]);
        display(theMovies);
    })
    $('.list .item3').click(function(){
        myHttp.open('GET',api[2]);
        display(theMovies);
    })
    $('.list .item4').click(function(){
        myHttp.open('GET',api[3]);
        display(theMovies);
    })
    $('.list .item5').click(function(){
        myHttp.open('GET',api[4]);
        display(theMovies)
    })




function display(){
    // myHttp.open('GET',api[0]);
    myHttp.send();

myHttp.addEventListener('readystatechange',function(){
    if(myHttp.readyState == 4){
        theMovies = JSON.parse(myHttp.response).results;
                displayMovies(theMovies);
    }
    
})
function displayMovies(list){
    box=``;
    for(var i=0 ; i<list.length ; i++){
        box +=`  
          <div class="col-md-4 m-auto mt-5">
                            <div class="parent">
                        <img class="w-100 img-fluid rounded" src='https://image.tmdb.org/t/p/w500${theMovies[i].poster_path}' alt="" srcset="">
                         <div class="layer w-100 h-100">
                    <div class="caption">
                    <h2>${list[i].title}</h2>
                    <p>${list[i].overview}</p>
                    <h3>Rate : ${list[i].vote_average}</h3>
                    <h3>${list[i].release_date}</h3>
                    </div>
                                </div>
                                </div>
                                    </div>
          `;
            
    }
    document.getElementById('mainRow').innerHTML=box;
}
// 
}

$('.side .nav .icon i').click(function(){
    let currentWidth=  $('.list').outerWidth();
    if($('.side').css('left') != '0px')
    $('.side').animate({'left':'0px'},1000);
    else{
        $('.side').animate({'left':-currentWidth},1000);
    }
    } 
    
)

//   contact

var inputName=document.getElementById('inputName');
var inputAge=document.getElementById('inputAge');
var inputPhone=document.getElementById('inputPhone');
var inputEmail=document.getElementById('inputEmail');
var inputPassword=document.getElementById('inputPassword');
var inputRePassword=document.getElementById('inputRePassword');

var container=[];   

function submitData(){
    if(inputNameValidate() == true)
    {
        personalData={
            name:inputName.value,
            age:inputAge.value,
            phone:inputPhone.value,
            email:inputEmail.value,
            password:inputPassword.value,
            rePassword:inputRePassword.value
            }
            container.push(personalData);
            localStorage.setItem('personalData',JSON.stringify(container));
            reset();
    }
    else{
        alert('enter a correct data')
    }
}

//   resete form 
function reset(){
    inputName.value="";
    inputAge.value="";
    inputPhone.value="";
    inputEmail.value="";
    inputPassword.value="";
    inputRePassword.value=""
}
//   regex
function inputNameValidate(){
    var regex = /^[a-z]{3,5}$/;
    if( regex.test(inputName) == true)
    {
        inputName.classList.replace('is-invalid','is-valid');
        return true;
    }
    else{
        inputName.classList.add('is-invalid')
        return false;
    }
}
inputName.classList.remove('is-invalid')
inputName.classList.add('is-valid');

function inputAgeValidate(){
    var regex = /^[0-9][0-8]$/;
    if(regex.test(inputAge)==true){
        inputAge.classList.replace('is-invalid','is-valid')
     return true
    }
    else{
        inputAge.classList.add('is-invalid')

        return false
    }
}
//  search
function searchFilm(searchTerm){
   var searchResult = [];
    for(var i=0 ; i<theMovies.length ; i++){
        if(theMovies[i].title.toLowerCase().includes(searchTerm.toLowerCase())==true){
        console.log(theMovies[i].title)
    }}
    searchResult.push(theMovies);
    displayMovies(searchResult);
}
// searchFilm("o")