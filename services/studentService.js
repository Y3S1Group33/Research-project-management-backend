import {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
} from "../repository/studentRepo.js";

export const creteStudentService = async (data) => {
    const { studentId, email, userName,contactNumber,password } = data;
    try {
        await createStudent({ studentId, email, userName,contactNumber,password });
        return Promise.resolve("Student Saved");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getStudentsService = async () => {
    try {
        const student = await getStudents();
        return Promise.resolve(student);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getStudentByIdService = async (studentId) => {
    try {
        const student = await getStudentById(studentId);
        if(student.length===0){
            return null
        }else{
            return Promise.resolve(student);
        }

    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const updateStudentService = async (studentId, data) => {
    try {
        const student = await updateStudent(studentId, data);
        return Promise.resolve(student);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const deleteStudentService = async (studentId) => {
    try {
        const student = await deleteStudent(studentId);
        return Promise.resolve(student);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};