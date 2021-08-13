var inp = function(){
    $.get("https://api.covid19api.com/summary",function(data){
    var countries = data.Countries
    var input = $("#input").val()
    for(var i =0; i<countries.length;i++){
        if(countries[i].Country === input){
             $('#TotalConfirmed').html('' + countries[i].TotalConfirmed)
             
             $('#TotalDeaths').html('' + countries[i].TotalDeaths)
        }
    }
})
}

            
