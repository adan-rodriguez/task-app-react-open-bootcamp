import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LEVELS } from "../../../models/levels.enum";

const taskSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required("Name is required"),
  description: Yup.string().max(500, 'Too Long!').required("Description is required"),
  level: Yup.string()
    .oneOf(
      [LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING],
      "You must select a level: Normal / Urgent / Blocking"
    )
    .required("Level is required"),
});

const TaskFormik = () => {
  const initialTasks = {
    name: "",
    description: "",
    completed: false,
    level: LEVELS.NORMAL,
  };

  return (
    <div>
      <h1>Create Task</h1>
      <Formik
        initialValues={initialTasks}
        validationSchema={taskSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />
            <label htmlFor="description">Description</label>
            <Field
              id="description"
              name="description"
              placeholder="Description"
            />
            <ErrorMessage name="description" component="div" />
            <label htmlFor="level">Level</label>
            <Field id="level" name="level" as="select">
              <option value={LEVELS.NORMAL}>Normal</option>
              <option value={LEVELS.URGENT}>Urgent</option>
              <option value={LEVELS.BLOCKING}>Blocking</option>
            </Field>
            <ErrorMessage name="level" component="div" />
            <button type="submit">Save</button>
            {isSubmitting && <p>Saving your task...</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskFormik;
