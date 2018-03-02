//classes
class User{
  constructor(options){
    this.id = options.id;
    this.name = options.name;
  }
}

class Sprint{
  constructor(options){
    this.id = options.id;
    this.name = options.name;
  }
}
class Comment{
  constructor(options){
    this.id = options.id;
    this.name = options.name;
  }
}
class Project{
  constructor(options){
    this.id = options.id;
    this.sprints = [];
  }
  addSprint(sprint){
    this.sprints.push(sprint.id);
  }
}

class Issue{
  constructor(options){
    this.id = options.id;
    this.name = options.name;
    this.type = options.type;
    //CreatedBy will be filled on creation with the ID of the user that created that issue
    this.createdBy = options.userId;
    this.sprint = options.sprintId;
    //The field CreatedAt are updated automatically on issue creation
    this.createdAt = new Date();
    //All newly created issues will have the status New
    this.status = 'new';
    this.assignee = options.assigneeId;
    this.comments = [];
    //Only issues of type BUG or FEATURE can have subtasks.
    if((this.type === 'bug') || (this.type === 'feature')){
    this.tasks =[];
    }

  }
  //The fields UpdatedAt  are updated automatically on issue change
  update(){
    this.updatedAt = new Date();
  }
  addTask(issue){
    this.tasks.push(issue.id);
    this.update();
  }
  addComment(comment){
    this.comments.push(comment.id);
    this.update();
  }
  changeSprint(sprintId){
    this.sprint = sprintId;
    //If the user moves the bug or feature in a different sprint, the subtasks will have to be moved as well.
    if((this.type === 'bug') || (this.type === 'feature')){
      tasks.forEach((task) => {
      task.changeSprint(sprint);
    });
    }
    this.update();
  }

  changeState(newState){
    this.status = newState;
    this.update();
  }
  changeAsignee(id){
    this.assignee = id;
    this.update();
  }
}
