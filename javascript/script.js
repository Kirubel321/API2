let i = 0;
const url ="https://friends-quotes-api.herokuapp.com/quotes";
const fimg = document.getElementById('image');
const fchar = document.getElementById('charname');
const fquote = document.getElementById('quote');
const ftitle = document.getElementById('title_');
const pic = ["https://img.republicworld.com/republic-prod/stories/images/162219137060b0ad0abee44.png", "https://i.pinimg.com/originals/93/fe/0c/93fe0c2baa971b3403793632b97013cd.jpg", "https://static01.nyt.com/images/2019/09/08/arts/08friends-phoebe6/08friends-phoebe6-jumbo.jpg", "https://cdn.jwplayer.com/v2/media/zCfZlFAu/poster.jpg?width=1920", "https://i.pinimg.com/originals/d1/08/b5/d108b5312e6160b288aa9a5a48df2519.jpg", "https://www.revistaestilo.net/binrepository/LOSMEJORESLOOKSDERACHELGREENportada0_ES1446491_MG248404351.jpg"];
async function init() {       
    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();
        place(data);
    }else{
        const message = 'An error has occured: ${response.status}';
    }
     function place(data) {
         fquote.innerHTML = data[i].quote;
         fchar.innerHTML = data[i].character;
         fimg.src = qoutepic_(data[i].character);
     }
}

function qoutepic_(dimg){
    if(dimg == "Chandler"){
        return pic[0];
    }
    else if(dimg == "Monica"){
        return pic[1];
    }
    else if(dimg == "Phoebe"){
        return pic[2];
    }
    else if(dimg == "Ross"){
        return pic[3];
    }
    else if(dimg == "Joey"){
        return pic[4];
    }
    else if(dimg == "Rachel"){
        return pic[5];
    }
    else{
        return 0;
    }
}

function next(){
    i++;
    if(i>=18){
        i=0;
    }
    init();
       
}
function previous(){
    i--;
    if(i<=0){
        i=18;
    }
    init();
    
}
 
 window.onload  = () => {
     init();
     document.getElementById("nextbtn").addEventListener("click", next);
     document.getElementById("prevbtn").addEventListener("click", previous);
 }










 

