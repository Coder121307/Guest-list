name_of_the_Guest_array = [];

function submit()
{
    var name_1 = document.getElementById("name_of_the_Guest_1").value;
    
    name_of_the_Guest_array.push(name_1);
    
    console.log(name_of_the_student_array);

    document.getElementById("display_name").innerHTML = name_of_the_Guest_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
    name_of_the_Guest_array.sort();
    console.log(name_of_the_Guest_array);
    document.getElementById("display_name").innerHTML = name_of_the_Guest_array;
}

function search()
{
    var s= document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people_length; j++)
        {
            if(s==names_of_the_Guest_aaray[j]){
                found=found+1;
            }
        } 
    document.getElementById("p2").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+"time/s");
}

