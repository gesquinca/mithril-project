/* jshint devel:true */
// console.log('\'Allo \'Allo!');

(function() {
  "use strict";

  // console.log('hello');

  //model
  var people = [
      {id: 1, name: "John"},
      {id: 2, name: "Mary"},
      {id: 3, name: "Bob"}
  ]

  //controller
  var controller = function() {
      this.remove = function(person) {
          people.splice(people.indexOf(person), 1)
      }
  }

  //view
  var view = function(ctrl) {
    // return m("ul", [
    //     people.map(function(person) {
    //         return m("li", {
    //             key: person.id,
    //             onclick: fadesOut(ctrl.remove.bind(this, person)),
    //             config: fadesIn
    //         }, person.name)
    //     })
    // ])

    return  <ul>
              {people.map}
            </ul>
  }

  //view helpers
  var fadesIn = function(element, isInitialized, context) {
      if (!isInitialized) {
          element.style.opacity = 0
          $.Velocity(element, {opacity: 1})
      }
  }
  var fadesOut = function(callback) {
      return function(e) {
          //don't redraw yet
          m.redraw.strategy("none")

          $.Velocity(e.target, {opacity: 0}, {
              complete: function() {
                  //now that the animation finished, redraw
                  m.startComputation()
                  callback()
                  m.endComputation()
              }
          })
      }
  }

  //run the app
  m.module(document.body, {controller: controller, view: view})

}());
