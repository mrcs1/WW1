//Anonymous function that is applied to all internal-links
var jump=function(e)
{
       //prevent the "normal" behaviour which would be a "hard" jump
       e.preventDefault();
       //Get the target
       var target = $(this).attr("href");
       //perform animated scrolling
       $('html,body').animate(
       {
               //get top-position of target-element and set it as scroll target
               scrollTop: $(target).offset(0).top
       //scrolldelay: 1 seconds
       },2000,function()
       {
               //attach the hash (#jumptarget) to the pageurl
              // location.hash = target;
       });

};

$(document).ready(function()
{
       $('a.scroll').bind("click", jump);
       return false;
});
