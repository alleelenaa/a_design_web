var n = 2000;
var pos = 0;
var prev = -1;
var MyInterval = null;

var main_list = document.getElementById("appear-list");
var list_elements = main_list.getElementsByTagName("LI");
var number_of_list_elements = list_elements.length;

function startListTransition() {

  if (MyInterval == null)
  {
      MyInterval = setInterval(function () {
        pos+=1
        if (pos>=number_of_list_elements)
            pos=0;
        if (pos==0)
          prev = number_of_list_elements-1;
        else
          prev = pos-1;

        document.getElementById("appear-list").getElementsByTagName("LI")[prev].style.transition='2.5s ease';
        document.getElementById("appear-list").getElementsByTagName("LI")[prev].style.display='none';

        document.getElementById("appear-list").getElementsByTagName("LI")[pos].style.display='block';
        document.getElementById("appear-list").getElementsByTagName("LI")[pos].style.transition='2.5s ease';

      },
      n);
    }
}

window.addEventListener('load', startListTransition);


// Code so the user can click on the next list element
var button_prev = document.getElementsByClassName("button-list")[0];
document.getElementsByClassName("slide-show")[0];
function prevCarousel(){
  // setting the present list item position
  var pres = pos;
  var ante = 0;

  // If the list item on which we are on is the first item, then the previous item would be
  // the last item in the list
  if (pos==0)
    ante = number_of_list_elements - 1;
  else
    ante = pos - 1;
  document.getElementById("appear-list").getElementsByTagName("LI")[pres].style.transition='2.5s ease';
  document.getElementById("appear-list").getElementsByTagName("LI")[pres].style.display='none';

  document.getElementById("appear-list").getElementsByTagName("LI")[ante].style.display='block';
  document.getElementById("appear-list").getElementsByTagName("LI")[ante].style.transition='2.5s ease';

  // setting the current list item position so we know whici one to show prev
  pos = ante;
}
button_prev.addEventListener('click', prevCarousel);

// Code so that the user can click on the previous
var button_next = document.getElementsByClassName("button-list")[1];
function nextCarousel(){

  var pres = pos;
  var pred = 0;
  // If the position of the current item is the list one in the list, then the next item would be
  // the first item of the list
  if (pos==number_of_list_elements-1)
    pred = 0;
  else
    pred = pos + 1;
  document.getElementById("appear-list").getElementsByTagName("LI")[pres].style.transition='2.5s ease';
  document.getElementById("appear-list").getElementsByTagName("LI")[pres].style.display='none';

  document.getElementById("appear-list").getElementsByTagName("LI")[pred].style.display='block';
  document.getElementById("appear-list").getElementsByTagName("LI")[pred].style.transition='2.5s ease';

  pos = pred;
}
button_next.addEventListener('click', nextCarousel);