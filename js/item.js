/**
 * To-do item class
 *
 * @author Domenick DiBiase
 */
function Item(title, description){
  this.title = title;
  this.description = description;
  this.queue = document.getElementById('stretch').children.length;

  /**
   * Adds the item to the document page
   */
  this.add = function(){

    // Creates elements
    var shell = document.createElement('div');
    var main = document.createElement('div');
    var itemTitle = document.createElement('p');
    var info = document.createElement('div');
    var itemDesc = document.createElement('p');
    var edit = document.createElement('div');
    var pen = new Image();
    var del = document.createElement('div');
    var trash = new Image();
    this.queue = document.getElementById('stretch').children.length;

    // Sets atributes to the elements
    pen.src = "images/edit2.png";
    trash.src = "images/trash.png";
    shell.setAttribute("class","item item-theme");
    // Draggable
    shell.setAttribute("draggable", "true");
    shell.setAttribute("ondragstart", "drag(event)");
    shell.setAttribute("id", this.queue);
    shell.setAttribute("dropEffect", "none");
    //shell.setAttribute("ondrop", "drop(event)");
    //shell.setAttribute("ondragover", "allowDrop(event)");

    main.setAttribute("class",'item-main');
    itemTitle.innerHTML = this.title; // ~~
    // main.innerHTML = this.title;
    info.setAttribute("class","item-info");
    itemDesc.innerHTML = this.description;
    edit.setAttribute("class", "item-edit");
    del.setAttribute("class", "item-delete");
    var index = this.queue;
    del.onclick = function(){removeItem(index)};
    edit.onmouseover = function(){
      pen.style.transition = ".5s";
      pen.style.height = "20px";
      pen.style.width = "20px";
      del.style.top = "33px";
      del.style.borderRadius= "50%";
      del.style.backgroundColor= "#CCC";
      edit.style.borderRadius= "50%";
      edit.style.backgroundColor= "#CCC";
      edit.style.height = "30px";
      edit.style.width = "30px";
      document.body.style.cursor = "pointer";
    };
    edit.onmouseout = function(){
      pen.style.height = "14px";
      pen.style.width = "14px";
      del.style.top = "23px";
      edit.style.height = "24px";
      edit.style.width = "24px";
      document.body.style.cursor = "auto";
    };
    del.onmouseover = function(){
      trash.style.transition = ".5s";
      trash.style.height = "20px";
      trash.style.width = "20px";
      pen.style.top = "5px";
      del.style.borderRadius= "50%";
      del.style.backgroundColor= "#CCC";
      del.style.height = "30px";
      del.style.width = "30px";
      edit.style.borderRadius= "50%";
      edit.style.backgroundColor= "#CCC";
      edit.style.top = "-5px";
      document.body.style.cursor = "pointer";
    };
    del.onmouseout = function(){
      trash.style.height = "14px";
      trash.style.width = "14px";
      pen.style.top = "5px";
      del.style.height = "24px";
      del.style.width = "24px";
      edit.style.top = "0px";
      document.body.style.cursor = "auto";
    };

    // Appends the elements together
    edit.appendChild(pen);
    del.appendChild(trash);
    info.appendChild(itemDesc);
    main.appendChild(itemTitle); // ~~
    shell.appendChild(main);
    shell.appendChild(info);
    shell.appendChild(edit);
    shell.appendChild(del);

    // Appends the elements to the document page
    var rost = document.getElementById('stretch');
    rost.appendChild(shell);
  };

}

// Session Storage
// JS for list of undo's storing the deleted todo's

//Local Storage
// JS to store the has been here berfore info and settings
// JS to store the to do list
