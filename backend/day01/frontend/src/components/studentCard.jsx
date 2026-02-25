const StudentCard = ({ student }) => {
  return (
    <div style={{border : "2px solid black" , textAlign:"center" , margin:"40px" , width:"500px" }} >
      <h2 >{student.name}</h2>
      <p >ID: {student.id}</p>
      <div>
        <img src={student.img}></img>
        <p><span class="font-medium">Age:</span> {student.age}</p>
        <p><span class="font-medium">Branch:</span> {student.branch}</p>
        <p><span class="font-medium">Year:</span> {student.year}</p>
        <p><span class="font-medium">CGPA:</span> {student.cgpa}</p>
        <p class="text-blue-600 font-medium">{student.email}</p>
      </div>
    </div>
  );
};

export default StudentCard;
