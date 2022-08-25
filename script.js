function reset(){
  document.getElementById("wrapperformular_config").style.display = "none";
  document.getElementById("wrapperformular_call").style.display = "";
  document.getElementById("wrapperformular_admin").style.display = "none";
    
  document.getElementById("menu_config").style.backgroundColor = "";
  document.getElementById("menu_call").style.backgroundColor = "#4c669e";
  document.getElementById("menu_admin").style.backgroundColor = "";

  document.getElementById('input_config_name_call').disabled = true;
  document.getElementById('input_config_name_call').value = 'Kunde';
  document.getElementById('checkbox_config_call').checked = true
}

/* F8 ERSTELLEN FÜR CALL */
document.getElementById('berstellen_call').onclick = function(){
  let qname = document.getElementById('inputname').value;
  let qteam = document.getElementById('inputteam').value;
  let qanliegen1 = document.getElementById('anliegen1').value;
  let qumsetzung1 = document.getElementById('umsetzung1').value;
  let qvereinbarung1 = document.getElementById('vereinbarung1').value;
  let qkontaktperson1 = document.getElementById('input_config_name_call').value;

  document.getElementById('f8ausgabe_call').value = '*' + qname + '/Avedo Dresden/Team ' + qteam + '*' + '\r\n' + 'Kontaktperson: ' + qkontaktperson1 + '\r\n' + qanliegen1 + '\r\n' + qumsetzung1 + '\r\n' + qvereinbarung1;
    
  var content = document.getElementById('f8ausgabe_call');
  content.select();
  document.execCommand('copy');  
};

/* BUTTON KONTAKTPERSON F8 CALL */
function kontakt_call_kunde(){
  if (document.getElementById('checkbox_config_call').checked) {
    document.getElementById('input_config_name_call').value = 'Kunde';
    document.getElementById('input_config_name_call').disabled = true;
    document.getElementById('anliegen1').focus();
  } else {
    document.getElementById('input_config_name_call').value = '';
    document.getElementById('input_config_name_call').disabled = false; 
    document.getElementById('input_config_name_call').focus();
  }
}

function plus_call(){
  if(window.event.keyCode == 13){
    
  var curPos = document.getElementById('umsetzung1').selectionStart;
  console.log(curPos);
  let x = $('#umsetzung1').val();
  let text_to_insert = '\n' + '+';
  $('#umsetzung1').val(x.slice(0, curPos) + text_to_insert + x.slice(curPos));
}
}

/* F8 ERSTELLEN FÜR ADMIN */
document.getElementById('berstellen_admin').onclick = function(){
  let qname = document.getElementById('inputname').value;
  let qteam = document.getElementById('inputteam').value;
  let qanliegen = document.getElementById('anliegen_admin').value;
  
  document.getElementById('f8ausgabe_admin').value = "*" + qname + "/Avedo Dresden/Team " + qteam + "/Multianfrage*" + '\r\n' + qanliegen + '\r\n';
  
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

