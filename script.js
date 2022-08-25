function loaded() {
  
}

document.getElementById('berstellen_call').onclick = function(){
  let qname = document.getElementById('inputname').value;
  let qteam = document.getElementById('inputteam').value;
  let qanliegen1 = document.getElementById('anliegen1').value;
  let qumsetzung1 = document.getElementById('umsetzung1').value;
  let qvereinbarung1 = document.getElementById('vereinbarung1').value;
  
  document.getElementById('f8ausgabe_call').value = "*" + qname + "/Avedo Dresden/Team " + qteam + "*" + '\r\n' + qanliegen1 + '\r\n' + qumsetzung1 + '\r\n' + qvereinbarung1;
  
  var content = document.getElementById('f8ausgabe_call');
  content.select();
  document.execCommand("copy");  
};

document.getElementById('berstellen_admin').onclick = function(){
  let qname = document.getElementById('inputname').value;
  let qteam = document.getElementById('inputteam').value;
  let qanliegen1 = document.getElementById('anliegen_admin').value;
  
  document.getElementById('f8ausgabe_admin').value = "*" + qname + "/Avedo Dresden/Team " + qteam + "*" + '\r\n' + "Multibearbeitung"  + '\r\n' + qanliegen1 + '\r\n';
  
  var content = document.getElementById('f8ausgabe_admin');
  content.select();
  document.execCommand("copy");  
};

function config(){
  document.getElementById("wrapperformular_config").style.display = "";
  document.getElementById("wrapperformular_call").style.display = "none";
  document.getElementById("wrapperformular_admin").style.display = "none";
    
  document.getElementById("menu_config").style.backgroundColor = "#4c669e";
  document.getElementById("menu_call").style.backgroundColor = "";
  document.getElementById("menu_admin").style.backgroundColor = "";
}

function call(){
  document.getElementById("wrapperformular_config").style.display = "none";
  document.getElementById("wrapperformular_call").style.display = "";
  document.getElementById("wrapperformular_admin").style.display = "none";
    
  document.getElementById("menu_config").style.backgroundColor = "";
  document.getElementById("menu_call").style.backgroundColor = "#4c669e";
  document.getElementById("menu_admin").style.backgroundColor = "";
}

function admin(){
  document.getElementById("wrapperformular_config").style.display = "none";
  document.getElementById("wrapperformular_call").style.display = "none";
  document.getElementById("wrapperformular_admin").style.display = "";
    
  document.getElementById("menu_config").style.backgroundColor = "";
  document.getElementById("menu_call").style.backgroundColor = "";
  document.getElementById("menu_admin").style.backgroundColor = "#4c669e";
}