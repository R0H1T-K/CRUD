import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [students, setStudents] = useState([]);

  const onSubmit = (data) => {
    setStudents([...students, data]);
    reset();
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Add Student</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
              className="border border-gray-300 rounded-md px-4 py-2 mb-4 md:mr-4 w-full md:w-auto"
            />
            <select
              {...register("class", { required: true })}
              className="border border-gray-300 rounded-md px-4 py-2 mb-4 md:mr-4 w-full md:w-auto"
            >
              <option value="">Select Class</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>{`Class ${i + 1}`}</option>
              ))}
            </select>
            <input
              type="text"
              {...register("rollNumber", { required: true })}
              placeholder="Roll Number"
              className="border border-gray-300 rounded-md px-4 py-2 mb-4 md:mr-4 w-full md:w-auto"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-md"
            >
              Add
            </button>
          </div>
          {errors.name && <p className="text-red-500">Name is required</p>}
          {errors.class && <p className="text-red-500">Class is required</p>}
          {errors.rollNumber && <p className="text-red-500">Roll Number is required</p>}
        </form>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">Student List</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index} className="mb-2">
              <span className="font-bold">{student.name}</span>, Class {student.class}, Roll Number {student.rollNumber}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
