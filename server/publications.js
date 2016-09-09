Meteor.publish('posts', function(flagged, author, category) {
  var fliter = {}
  if(flagged) fliter.flagged = flagged
  if(author) fliter.author = author
  if(category) fliter.category = category
  return Posts.find(fliter);
});

Meteor.publish('allPost', function() {
  return Posts.find();
});

Meteor.publish('comments', function() {
  return Comments.find();
});