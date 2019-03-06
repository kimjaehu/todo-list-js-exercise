function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? "" : " not"} been compeleted`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
    return task
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  task.complete = true;
}

task1.logState();
task1.markCompleted();
task1.logState();