function selectHighPerformingStudents(students) {
    const filteredStudents = students.filter((item)=> item.GPA >= 5 && item.hobbies.includes('coding'));
    const tranformedList = filteredStudents.map((item)=> ({name: item.name, email: item.email}));
    return tranformedList.sort((a,b)=>(a.name > b.name) ? 1 : -1);
}
const students = [
    {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      GPA: 6.5,
      hobbies: ["coding", "chess"],
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@example.com",
      GPA: 5.4,
      hobbies: ["running", "swiming"],
    },
    {
      id: 3,
      name: "Charlie",
      email: "charlie@example.com",
      GPA: 4.8,
      hobbies: ["coding", "swimming"],
    },
    {
      id: 4,
      name: "Dave",
      email: "dave@example.com",
      GPA: 5.2,
      hobbies: ["coding"],
    },
    {
      id: 5,
      name: "Bill",
      email: "bill@example.com",
      GPA: 5.2,
      hobbies: ["coding", "swimming"],
    },
    {
      id: 6,
      name: "Alex",
      email: "alex@example.com",
      GPA: 6.2,
      hobbies: ["coding", "reading"],
    },
  ];
  
console.log(selectHighPerformingStudents(students))