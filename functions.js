
const loggedUser = user1;
let idCount = 12;


const addSprint = function addSprintToCurrentProject(name){
  allSprints.push(new Sprint({id:idCount,
                              name: name}));
  project.sprints.push(idCount);
  idCount++;
}


const addIssue = function addIssueToCurrentProject(name, type, sprintId, assigneeId, description, subtaskOf){
  const givenIssue = new Issue({id:idCount,
                            name: name,
                            type: type,
                            userId: loggedUser.id,
                            sprintId: sprintId,
                            assigneeId: assigneeId,
                            description: description});
  allIssues.push(givenIssue);

  if((subtaskOf !== "") && (type === "task")){
    allIssues.
          find(sprint => sprint.id === subtaskOf).
          addTask(givenIssue);
  }
  idCount++;
}

//Apart for the fields mentioned above, the user can change any field of an issue through an UPDATE action.
const updateIssue = function updateSomeFieldsOfAnIssue(issue, options){
  //update sprint
  if(Object.prototype.hasOwnProperty.call(options,"sprintId")){
    issue.changeSprint(options.sprintId)
  }
  //update status
  if(Object.prototype.hasOwnProperty.call(options,"status")){
    const parentIssue = {};
    if(issue.type === 'task')
      //get parent Issue if it has none
      allIssues.forEach((aux) => {
        if((aux.type ==='feature' || aux.type === 'bug')
            && aux.tasks.indexOf(issue.id) > -1){
              if(issue.status === 'new'){
                //give parent Issue same status
                aux.changeState(options.status);
              }
              //change status of issue given as param
              issue.changeState(options.status);

              //check if all subtasks are completed
              const allTasksCompleted = true;
              aux.tasks.forEach((taskId) =>{
                const test = allIssues.find(task => task.id === taskId);
                if(test.status !== 'resolved')
                  allTasksCompleted = false;
              });
              //if all tasks completed make parent Ready for testing
              if(allTasksCompleted){
                aux.changeState('ready for testing');
              }
            }
      });

      issue.changeState(options.status);
  }
  //change assignee
  if(Object.prototype.hasOwnProperty.call(options,"asigneeId")){
    issue.changeAsignee(options.assigneeId);
  }
}
//FOR TESTING PURPOSES FROM CONSOLE
// addIssue("My New task",'task', 4, 10, "Long Description",  8);
// console.log(allIssues);
//updateIssue(issue1,{sprintId: 4});
//issue2.addTask(issue5);
//updateIssue(issue5,{sprintId: 99, status: "In better Progress"});
//console.log(allIssues);
