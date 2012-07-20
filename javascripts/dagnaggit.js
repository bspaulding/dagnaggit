var DN = Ember.Application.create();

DN.Reminder = Ember.Object.extend({
  timestamp: null,
  name: null,
  fired: null
});

DN.RemindersController = Ember.ArrayController.extend();
DN.remindersController = DN.RemindersController.create({
  content: [],
  isEmpty: function() {
    return this.get('length') == 0;
  }.property('length')
});

DN.ReminderView = Ember.View.extend({
  templateName: 'ReminderView'
});

DN.InputField = Ember.TextField.extend({
  placeholder: "Move the thing! @ 10:18",
  insertNewline: function() {
    var value = this.get('value');
    var tokens = value.split("@");
    var name = tokens[0].trim();
    var time = tokens[1].trim();
    console.log("Remind you about '" + name + "' at " + time);
  }
});