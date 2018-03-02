//populate database
//create project
const project = new Project({
  id:0,
  name:'Project Management Tool'});

//create users
const user1 = new User({
  id: 1,
  name: 'Claudia',
});
const user2 = new User({
  id: 2,
  name: 'Georgiana',
});
const user3 = new User({
  id: 10,
  name: 'Alexandru',
});
const users = [user1, user2, user3]

//create sprints
const sprint1 = new Sprint({
  id: 3,
  name: 'Starting Sprint',
});
const sprint2 = new Sprint({
  id: 4,
  name: 'Middle Sprint',
});
const sprint3 = new Sprint({
  id: 5,
  name: 'Middle Part2',
});


//create issues
const issue1 = new Issue({
  id: 6,
  name: "I am a task",
  type: 'task',
  sprintId: sprint1.id,
  userId: user1.id,
  assigneeId: user2.id,
});
const issue2 = new Issue({
  id: 7,
  name: "I am a Bug",
  type: 'bug',
  sprintId: sprint1.id,
  userId: user1.id,
  assigneeId: user2.id,
});
const issue3 = new Issue({
  id: 11,
  name: "I am a Feature",
  type: 'feature',
  sprintId: sprint1.id,
  userId: user1.id,
  assigneeId: user2.id,
});
const issue4 = new Issue({
  id: 8,
  name: "I am a task of a bug",
  type: 'task',
  sprintId: sprint1.id,
  userId: user1.id,
  assigneeId: user2.id,
});
const issue5 = new Issue({
  id: 9,
  name: "I am a task from sprint 2, subtask of Bug7",
  type: 'task',
  sprintId: sprint2.id,
  userId: user2.id,
  assigneeId: user1.id,
});


//put all sprints in an array
const allSprints = [sprint1,sprint2, sprint3];
//put sprints'ids in Project
Object.assign(project,{sprints: [sprint1.id,sprint2.id, sprint3.id]});
//put all issues in an array
const allIssues = [issue1, issue2, issue3, issue4, issue5];
