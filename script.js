function test() {
  lettres=/^[A-Za-z]+$/;
  //nom
  n=document.getElementById('nom').value;
  if (n.length<3 || !(n.match(lettres))){
      alert("Votre nom n'est pas valide");
      return false;
  }
  //last name 
  m=document.getElementById('prenom').value; 
  if (m.length<3 || !(m.match(lettres))) 
  {
      alert("votre prénom n'est pas valide");
      return false;
  }
  //age
  d=document.getElementById('age').value;
  if (d.length==0 || parseInt(d)<=0 || d.match(lettres)) {
      alert("Votre age n'est pas valide");
      return false;
  }
  //adresse
  y=document.getElementById('adresse').value;
  if (y.length<10) {
      alert("Votre adresse n'est pas valide");
      return false;
  }
  //number
  a=document.getElementById('num').value;
  if ((a.match(alpha)) || (a.length!=8)|| ((a.charAt(0).toString())=="0") || ((a.charAt(0).toString())=="1")) {
      alert("Votre numéro n'est pas valide");
      return false;
  }
  //email
  x=document.getElementById('email').value;
  if ((x.length==0) || (x.length>50) || (x.indexOf("@")>x.lastIndexOf(".")) || (x.indexOf("@")==-1)) {
      alert("Votre email n'est pas valide");
      return false;
    }
  score=0;
  pts1=document.querySelectorAll(".p1");
  pts2=document.querySelectorAll(".p2");
  pts3=document.querySelectorAll(".p3");
  pts5=document.querySelectorAll(".p5");
  checkb=document.querySelectorAll(".ch");
  mc=0;                                                                    
  for (let d = 0; d< checkb.length; d++) {
      if (checkb[d].checked==true){              
       mc=mc+1;}
   }

  for (let i = 0; i< pts1.length; i++) {
     if (pts1[i].checked==true){
      score=score+1;}
  }
  for (let j = 0; j< pts2.length; j++) {
      if (pts2[j].checked==true){
       score=score+2;}
   }
   for (let k = 0; k< pts3.length; k++) {
      if (pts3[k].checked==true){
       score=score+3;}
   }
   for (let b = 0; b< pts5.length; b++) {
      if (pts5[b].checked==true){
       score=score+5;}
   }
  lw=window.localStorage
  lw.setItem('age',a);
  lw.setItem('mc',mc)
  lw.setItem('score',score);
  
}