var button = document.getElementById('counter');

button.onclick= function(){
//create a request
var request= new XMLHttpRequest();

//capture the response 
request.onreadystatechange = function (){
    if (request.readyState === XMLHttpRequest.DONE)
        if (request.status=== 200){
            var counter =request.responseText;
            var span = document.getElementById('count');
            span.innerHTML=counter.toString();
        }
}
//make the request
request.open('GET','http://localhost:8080/counter',true);
request.send(null);
};

 

var submit = document.getElementById('btn');
submit.onclick = function(){
    //submit name
    var nameInput = document.getElementById('name');
    var name = nameInput.value;

    //create a request
    var request= new XMLHttpRequest();

    //capture the response 
    request.onreadystatechange = function (){
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status=== 200){
               
        var names = request.responseText;
        names=JSON.parse(names);
        var list='';
        for (var i=0; i<names.length;i++){
            list += '<li>' + names[i] + '</li>';
        }
        var ul = document.getElementById('namelist');
        ul.innerHTML=list;
    }
}

};
request.open('GET','http://localhost:8080/submit?name=' + name,true);
request.send(null);
};