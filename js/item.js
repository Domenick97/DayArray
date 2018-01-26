class item{

  constructor(title, description){
    this.title = title;
    this.description = description;
  }

  addDate(date){
    this.date = date;
  }

  add(){
    var shell = document.createElement('div');
    var main = document.createElement('div');
    var itemTitle = document.createElement('p');
    var info = document.createElement('div');
    var itemDesc = document.createElement('p');
    var edit = document.createElement('div');
    var pen = new Image();
    pen.src = "images/edit2.png";

    shell.setAttribute("class","item item-theme");
    main.setAttribute("class",'item-main');
    itemTitle.innerHTML = this.title;
    info.setAttribute("class","item-info");
    itemDesc.innerHTML = this.description;
    edit.setAttribute("class", "item-edit");

    edit.appendChild(pen);
    info.appendChild(itemDesc);
    main.appendChild(itemTitle);
    shell.appendChild(main);
    shell.appendChild(info);
    shell.appendChild(edit);



    var rost = document.getElementById('stretch');
    rost.appendChild(shell);
    //alert("Added");
  }

}
