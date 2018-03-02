//The user needs to see an overview of the current project, broken down per sprints, how many issues in each status, how many features, how many bugs, etc.
function displayProjectDetails(){
  console.log("GOOD");
  const div = document.getElementById('seeProjectDetails');
  div.innerHTML="";
  project.sprints.forEach((aux) => {
    //get each sprint
    const currentSprint = allSprints.find(sprint => sprint.id === aux);
    //add sprint to div
      const boxDiv = "<div class='box'>";
      div.innerHTML +="<h3> Sprint"+
                      currentSprint.id +
                      " : "+
                      currentSprint.name + "</h3>";
        //get issues of a sprint
        allIssues.forEach((currentIssue)=>{
          if(currentIssue.sprint === currentSprint.id){
              div.innerHTML += "<div class='issue'><h4>"+
                              currentIssue.type+
                              "</h4> <p>For user with id: "+
                              currentIssue.assignee+
                              ", Status: "+
                              currentIssue.status+
                              "</p></div>"
          }
        });
      div.innerHTML += "</div>"; //close .box
  });
}
