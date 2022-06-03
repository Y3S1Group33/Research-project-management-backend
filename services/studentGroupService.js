import {
    saveStudentGroup,
    getStudentGroupById,
    getStudentGroup,
    updateStudentGroup,
    deleteStudentGroup,
} from "../repository/studentGroupRepo.js"

export const saveStudentGroupService = async (data) => {
    const { groupId, groupName, std1, std2, std3, std4 } = data;
    try {
      await saveStudentGroup({ groupId, groupName, std1, std2, std3, std4 });
      return Promise.resolve("Successfully Create Student Group.");
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };

export const getStudentGroupByIdService = async (id) => {
    try {
      const studentGroup = await getStudentGroupById(id);
      return Promise.resolve(studentGroup);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
export const getStudentGroupService = async () => {
    try {
      const studentGroup = await getStudentGroup();
      return Promise.resolve(studentGroup);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
export const updateStudentGroupService = async (id, data) => {
    try {
      const studentGroup = await updateStudentGroup(id, data);
      return Promise.resolve(studentGroup);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };
  
  export const deleteStudentGroupService = async (id) => {
    try {
      const studentGroup = await deleteStudentGroup(id);
      return Promise.resolve(studentGroup);
    } catch (err) {
      throw new Error(err.message, err.status);
    }
  };