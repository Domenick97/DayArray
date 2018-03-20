/**
 * To-do item class
 *
 * @author Domenick DiBiase
 */
function Item(title, description){
  this.title = title;
  this.description = description;
  this.queue = document.getElementById('stretch').children.length;

  var queue = document.getElementById('stretch').children.length;
  /**
   * Switches the items mode to edit
   */
   this.edit = function(t){
     t.innerHTML = "k";
   };

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
    var save = document.createElement('div');
    var floppy = new Image();
    this.queue = document.getElementById('stretch').children.length;

    // Editing elements
    var itemTitleE;
    var itemDescE;

    // Sets atributes to the elements
    pen.src = "images/edit2.png";
    trash.src = "images/trash.png";
    floppy.src = "images/save.png";
    shell.setAttribute("class","item item-theme");
    // Draggable
    shell.setAttribute("draggable", "true");
    shell.setAttribute("ondragstart", "drag(event)");
    shell.setAttribute("id", this.queue);
    shell.setAttribute("dropEffect", "none");
    shell.setAttribute("ondrop", "drop(event)");
    shell.setAttribute("ondragover", "allowDrop(event)");
    shell.style.zIndex = "3";

    main.setAttribute("class",'item-main');
    itemTitle.innerHTML = this.title;
    info.setAttribute("class","item-info");
    itemDesc.innerHTML = this.description;
    edit.setAttribute("class", "item-edit");
    edit.setAttribute("id", "edit" + this.queue);
    del.setAttribute("class", "item-delete");
    save.setAttribute("class", "item-edit");
    save.setAttribute("id", "save" + this.queue);
    var index = this.queue;

    // On click of the delete button call removeItem function
    del.onclick = function(){removeItem(index)};

    // On click of the edit button call edit function
    edit.onclick = function(){
      itemTitleE =  document.createElement('input');
      itemTitleE.type = "text";
      itemTitleE.placeholder = "Item";
      itemTitleE.value = title;
      itemTitleE.className = "edit-input  edit-left";
      main.removeChild(main.firstChild);
      main.appendChild(itemTitleE);

      itemDescE = document.createElement('textarea');
      itemDescE.type = "text";
      itemDescE.placeholder = "Description";
      itemDescE.value = descriptions.replace(/\<br\>/g, "\n")
      itemDescE.className = "edit-input edit-left";
      info.removeChild(info.firstChild);
      info.appendChild(itemDescE);

      // Switches out the editor pen for a save icon
      shell.appendChild(save);
      var editor = document.getElementById("edit" + queue);
      editor.parentNode.removeChild(editor);
    };

    save.onclick = function(){
      itemTitle.innerHTML = itemTitleE.value;
      array[queue].title = itemTitleE.value;
      main.removeChild(main.firstChild);
      main.appendChild(itemTitle);

      itemDesc.innerHTML = itemDescE.value;
      array[queue].description = itemDescE.value;
      info.removeChild(info.firstChild);
      info.appendChild(itemDesc);

      shell.appendChild(edit);
      var saver = document.getElementById("save" + queue);
      saver.parentNode.removeChild(saver);
      autoSave();
    };

    // Mouse over event for the edit button
    edit.onmouseover = function(){
      pen.style.transition = ".5s";
      pen.style.height = "20px";
      pen.style.width = "20px";
      edit.style.height = "30px";
      edit.style.width = "30px";
      del.style.top = "33px";
      document.body.style.cursor = "pointer";
    };

    // Mouse out event for the edit button
    edit.onmouseout = function(){
      pen.style.height = "14px";
      pen.style.width = "14px";
      edit.style.height = "24px";
      edit.style.width = "24px";
      del.style.top = "25px";
      document.body.style.cursor = "auto";
    };

    // Mouse over event for the delete button
    del.onmouseover = function(){
      trash.style.transition = ".5s";
      trash.style.height = "20px";
      trash.style.width = "20px";
      del.style.height = "30px";
      del.style.width = "30px";
      del.style.top = "22px";
      edit.style.top = "-8px";
      save.style.top = "-8px";
      document.body.style.cursor = "pointer";
    };

    // Mouse out event for the delete button
    del.onmouseout = function(){
      trash.style.height = "14px";
      trash.style.width = "14px";
      del.style.height = "24px";
      del.style.width = "24px";
      del.style.top = "25px";
      edit.style.top = "0px";
      save.style.top = "0px";
      document.body.style.cursor = "auto";
    };

    // Mouse over event for the save button
    save.onmouseover = function(){
      floppy.style.transition = ".5s";
      floppy.style.height = "20px";
      floppy.style.width = "20px";
      save.style.height = "30px";
      save.style.width = "30px";;
      del.style.top = "33px";
      document.body.style.cursor = "pointer";
    };

    // Mouse out event for the save button
    save.onmouseout = function(){
      floppy.style.height = "14px";
      floppy.style.width = "14px";
      save.style.height = "24px";
      save.style.width = "24px";
      edit.style.top = "0px";
      del.style.top = "25px";
      document.body.style.cursor = "auto";
    };

    // Appends the elements together
    edit.appendChild(pen);
    del.appendChild(trash);
    save.appendChild(floppy);
    info.appendChild(itemDesc);
    main.appendChild(itemTitle); // ~~
    shell.appendChild(main);
    shell.appendChild(info);
    shell.appendChild(edit);
    shell.appendChild(del);
    //shell.appendChild(save);

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
