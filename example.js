var TaskView = Backbone.View.extend({
  render: function(){
    var html = '<li>' + this.model.get('description') + '</li>';
    $(this.el).html(html);
    $(this.el).html('<li></li>')
    //every view instance has its own view top level element
    //<div> is default
  }
});

var taskView = new TaskView({model : taskItem});
taskview.render();
console.log(taskView.el)
// you should get this output

<div>
  <li> walk the puppy </li>
<div>
