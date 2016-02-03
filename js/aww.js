$(document).ready(function() {
  $("html").removeClass('no-js');
  $aww = $("#aww");
  $aww.empty();
  $.get("http://api.reddit.com/r/aww/hot?limit=10", function(data) {
    for (var i = data.data.children.length - 1; i >= 0; i--) {
      console.log(data.data.children[i].data)
      var thumb;
      try {
        thumb = data.data.children[i].data.preview.images[0].source.url;
      } catch (e) {
        thumb = data.data.children[i].data.thumbnail;
      }

      if (thumb !== "self" && data.data.children[i].data.post_hint === "image") {
        $aww.append('<div class="aww-wrapper"><a href="https://www.reddit.com' +
          data.data.children[i].data.permalink + '"><img class="img-responsive" src="' +
          thumb + '" alt="' + data.data.children[i].data.title +'"/></a><span>' +
          data.data.children[i].data.title + '</span></div>');
      }
    };
  });
});