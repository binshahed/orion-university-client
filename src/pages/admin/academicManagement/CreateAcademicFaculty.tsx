import { Button } from "antd";
import { PageHeading } from "../../../components";
import { OrionForm, OrionFormInput } from "../../../components/form";
import { useCreateAcademicFacultyMutation } from "../../../store/app/features/academicFaculty/academicFacultyApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAcademicFacultySchema } from "../../../schema/AcademicFacultySchema";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateAcademicFaculty = () => {
  const [createAcademicFaculty, { isLoading }] =
    useCreateAcademicFacultyMutation();

  const handleFacultySubmit: SubmitHandler<FieldValues> = (data) => {
    createAcademicFaculty(data);
  };

  return (
    <div>
      <PageHeading>Create Academic Faculty</PageHeading>

      <OrionForm
        onSubmit={handleFacultySubmit}
        resolver={zodResolver(createAcademicFacultySchema)}
      >
        <OrionFormInput
          type="text"
          label="Faculty Name"
          placeholder="Enter Faculty Name"
          name="name"
        />
        <Button
          loading={isLoading}
          htmlType="submit"
          type="primary"
          size="large"
        >
          Submit
        </Button>
      </OrionForm>
    </div>
  );
};

export default CreateAcademicFaculty;
