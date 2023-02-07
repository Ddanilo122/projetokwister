var campo ='';
function addSala(){
    var nomeSala=document.getElementById('iptsala').value
    localStorage.setItem('nomeSala',nomeSala)
    database.ref("/").on("value",(data)=>{
      campo ='';
      data.forEach((subpasta)=>{
        sala = subpasta.key;
        linha = "<div class='sala' id="+nomeSala+" onclick='addSala(this.id)' >"+nomeSala+"</div> <hr>";
        campo +=linha;
      });
      document.getElementById("output").innerHTML = campo;
    })
}






  function sair(){
    localStorage.removeItem("userName")
    localStorage.removeItem("roomName")
    window.location= "index.html"
  }
  function carregar(){
    var nome1=localStorage.getItem('userName');
    document.getElementById('userName').innerHTML='SEJA BEM VINDO(A)'
  }