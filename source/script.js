 var link = getPluginParameter('link');
 var embedlink = link.replace("watch?v=", "embed/");
 var YouTube = document.getElementById('youtube');

 YouTube.innerHTML = '<iframe width="100%" height="100%" src=' + embedlink + ' frameborder="0" allowfullscreen="" style="position:absolute; top:0; left: 0"></iframe>';
