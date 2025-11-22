import * as    UserModel from "../models/UserModel.js";

// export const fetchUsers = async (req,res,) =>{
//     try{
//         const Users = await UserModel.getUsers();
//         res.status(200).json({success: true, message: users});    
//     }catch(e){
//         console.log(e),
//         res.status(500).json({
//             success: false,
//             message: "Internal Server Error"
//         })
//     }
// }

// export const createStudent = async (req, res) =>{
//     const {name, srcode, course} = req.body
//     try{
//         const studentId = await StudentModel.insertStudent(name, srcode, course);
//         res.status(200).json({success : true, message : studentId})
//     }catch(e){
//         console.log(e)
//         res.status(500).json({success : false, message : "Internal Server Error"})
//     }
// }

// export const editStudent = async (req, res) =>{
//     const {name, srcode, course} = req.body
//     const {studentId} = req.params

//     try{
//         const updatedId = await StudentModel.updateStudent(name, srcode, course, studentId);
//         res.status(200).json({success : true, message : updatedId});
//     }catch(e){
//         console.log(e)
//         res.status(500).json({success : false, message : "Internal Server Error"})
//     }
// }

// export const deleteStudent = async (req, res) =>{
//     const {studentId} = req.params

//     try{
//         const deletedId = await StudentModel.deleteStudent(studentId);
//         res.status(200).json({success : true, message : deletedId});
//     }catch(e){
//         console.log(e)
//         res.status(500).json({success : false, message : "Internal Server Error"})
//     }
// }




export const register = async (req, res) =>{
    const {name, email, password} = req.body;

    try{
        const Users = await UserModel.createUser(name, email, password);
        res.status(200).json({success : true, message: [{result : "A new account has been created!"}]
        });
    }catch(e){
        console.log(e)
        res.status(500).json({success : false, message: "Internal Server Error",
        });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await UserModel.login(email, password);
        res.status(200).json({
            success: true,
            message: [
                {result: "Login successful",token},
            ]
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
