
function genQR()
{
    var gapi="https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var myimg=document.getElementById("img");
    var mytext=document.getElementById("qrtext").value;
    var mysize=document.getElementById("size").value;
    
   

    if (mytext!=="" && mysize=="100")
    {
        myimg.src=gapi+"100x100"+"&chl="+mytext;
        // https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=hello
    }

    else if(mytext!=="" && mysize=="150")
    {

        myimg.src=gapi+"150x150"+"&chl="+mytext;
        mytext.value="";
    }

    else if(mytext!=="" && mysize=="200")
    {
        myimg.src=gapi+"200x200"+"&chl="+mytext;
        mytext.value=""
    }

    else if (mytext!=="" && mysize=="250")
    {
        myimg.src=gapi+"250x250"+"&chl="+mytext;
        mytext.value="";
    }

    else if (mytext!=="" && mysize=="300")
    {
        myimg.src=gapi+"300x300"+"&chl="+mytext;
        mytext.value="";
    }
    else if (mytext!=="" && mysize=="400")
    {
        myimg.src=gapi+"400x400"+"&chl="+mytext;
        mytext.value="";
    }

    else
    {
        alert("Please Enter Text");
    }

    
}










// var name =prompt("whats your name");
//          var full = "Hello " + name + " how are you";

//           console.log(full);


// function showIt()
// {   
//     var image= document.getElementById("img");
//     var option= document.getElementById("option").value;
    
//     if(option == "google")
//     {
//       image.src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/300px-Google_2015_logo.svg.png?20160213081640";
//     }
//     else if(option== "instagram")
//     {
//       image.src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/300px-Instagram_logo_2022.svg.png";
//     }
//     else if(option== "Linkedin")
//     {
//       image.src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/300px-LinkedIn_2021.svg.png";
//     }
//     else
//     {
//       alert("picture not available");
//     }

// }


  // document.getElementById("img").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7M0nPBN0ty9RdHWuMXm2lwr-nTUPrHnhMgzETz15okw&s";
  // var photo = document.getElementById("img");
  //   if (photo.style.display === "none")
  //   {
  //     photo.style.display = "block";
  //   }
  //   else
  //   {
  //       photo.style.display = "none";
          
  //   }
    
//     var name =prompt("whats your name");
//   var full = "Hello " + name + " how are you";




