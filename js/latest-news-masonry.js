var elem = document.querySelector(".latest-news-content");
var msnry = new Masonry(elem, {
  // options
  itemSelector: ".latest-news-div-picture",
  horizontalOrder: true,
  gutter: 20,
});
