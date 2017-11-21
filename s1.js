var prompt = require('prompt');
const fs = require('fs');
prompt.start();
prompt.get(['TeamSize'], function (err, result) {
    if (err) { return onErr(err); }
    var contents = fs.readFileSync("aspiriants.json");
    var jsonContent = JSON.parse(contents);
    console.log('User Input has been Received');
    info = jsonContent.ASPIRIANTS.length;
    console.log(info);
    form = result.TeamSize;
    if ( form == parseInt(form,10) && form > 0 && form < info){
    var value = 1;               
    var maximum = info/form;        
    var minimum = 1;                  
    var ctemp = 1;
    var z = info % form;
    aspList = jsonContent.ASPIRIANTS;
    if(z == 0){
        while ( value <= form ){
            console.log("team ")
            console.log( value )
            while ( minimum <= maximum ){
                var i = Math.floor(Math.random() * aspList.length);
                console.log( aspList[i] ); //#persons
                aspList.splice(i, 1);                        
                minimum = minimum + 1;
                if ( minimum > maximum ){
                    minimum=1;
                    break;
                }
            }
            value = value + 1;
            if ( value > form ){
                value=1;
                break;
            }
        }
    }
    else{
        console.log( "teams cannot be divided equally reply :");
        prompt.get('input', function (err, result) {
        if (err) { return onErr(err);}
        var res= result.input;
        if ( res==="yes" ){
            while ( value <= form ){
                console.log( "team ");
                console.log( value);
                while ( minimum <= maximum ){
                    var i = Math.floor(Math.random() * aspList.length);
                    console.log( aspList[i] );
                    aspList.splice(i, 1);
                    minimum = minimum + 1;
                    if (minimum > maximum ){
                        minimum=1;
                        break;
                        }
                }
                value = value + 1;
                if ( value> form ){
                    value=1;
                    break;
                }
            }
            while (value <= form ){
                var ctemp = 1;                
                while ( ctemp <= z ){
                    console.log( "team number:")
                    console.log( value)
                    var i = Math.floor(Math.random() * aspList.length);
                    console.log( aspList[i] ); //#persons
                    aspList.splice(i, 1);
                    ctemp = ctemp+1;
                    value = value+1;
                    if ( ( ctemp > z ) || ( value > form ) ){
                        break;
                    }
                }
                if ((ctemp>z)||(value>form)){
                    var ctemp=1;
                    break;
                }
            }   
        } 
        else{
            console.log ("thank u !)");
        }
        }); 
    }
}
else{
    console.log(`Please enter integers between 1 and ${info}`);
    }
});