function getValue(val)
{
    var result = document.getElementById('output');
    var input = document.getElementById('input');

    if(val == "*" || val =='/' || val=='+' || val=='-' )
    {
        input.value = result.value+val;
        result.value = "";
    }
    else{
        result.value += val;
    }
   
}

// function tryone()
// {
    
//     var result = document.getElementById('output');
//     var input = document.getElementById('input');

//     result.value = '';
//     input.value = '';
// }

function clearfield()
{
    var result = document.getElementById('output');
    var input = document.getElementById('input');

    result.value = '';
    input.value = '';
}
function getOutput()
{
    var result = document.getElementById('output');
    var input = document.getElementById('input');
    var beforeequal = input.value;
    input.value += result.value+'=';
    result.value = eval(beforeequal+result.value);
    
    
}

function check()
{
    alert('Its Just a dummy Button :)');
}









