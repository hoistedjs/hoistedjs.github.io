console.log('This would be the main JS file.');

$.getJSON("https://s3.amazonaws.com/extend.brackets/registry.json").done(function(data) {
  console.log("done", data);
});
