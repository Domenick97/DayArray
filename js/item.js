/**
 * To-do item class
 *
 * @author Domenick DiBiase
 */
class item{

  /**
   * Constructor for the item class, giving the item
   * a title and Description
   *
   * @param title The title of the to-do item
   * @param description Description given to the to-do item
   */
  constructor(title, description){
    this.title = title;
    this.description = description;
  }

  /**
   * Adds a date atribute to the to-do item
   *
   * @param date The date given to the item
   */
  addDate(date){
    this.date = date;
  }

  /**
   * Adds the item to the document page
   */
  add(){
    // Creates elements
    var shell = document.createElement('div');
    var main = document.createElement('div');
    var itemTitle = document.createElement('p');
    var info = document.createElement('div');
    var itemDesc = document.createElement('p');
    var edit = document.createElement('div');
    var pen = new Image();

    // Sets atributes to the elements
    pen.src = "images/edit2.png";
    shell.setAttribute("class","item item-theme");
    main.setAttribute("class",'item-main');
    itemTitle.innerHTML = this.title;
    info.setAttribute("class","item-info");
    itemDesc.innerHTML = this.description;
    edit.setAttribute("class", "item-edit");

    // Appends the elements together
    edit.appendChild(pen);
    info.appendChild(itemDesc);
    main.appendChild(itemTitle);
    shell.appendChild(main);
    shell.appendChild(info);
    shell.appendChild(edit);

    // Appends the elements to the document page
    var rost = document.getElementById('stretch');
    rost.appendChild(shell);

    //alert("Added");
  }
}

// Session Storage
// JS for list of undo's storing the deleted todo's

//Local Storage
// JS to store the has been here berfore info and settings
// JS to store the to do list
