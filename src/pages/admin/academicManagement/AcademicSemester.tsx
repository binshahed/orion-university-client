import { useGetAllAcademicSemesterQuery } from "../../../store/app/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllAcademicSemesterQuery(undefined);
  console.log(data);

  return (
    <div>
      <h1>Academic Semester</h1>
    </div>
  );
};

export default AcademicSemester;
