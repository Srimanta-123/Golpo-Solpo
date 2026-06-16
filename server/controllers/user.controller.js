import User from '../models/user.model.js';
import { asyncHandler } from '../utilities/asyncHandler.utility.js';
import { errorHandler } from '../utilities/errorHandler.utility.js';
import bcrypt from 'bcryptjs';

export const register = asyncHandler(async (req, res, next) => {
    const { fullName, username, password, gender } = req.body;

    if (!fullName || !username || !password || !gender) {
        return next(new errorHandler("All fields are required", 400));
    }

    const user = await User.findOne({ username });

    if (user) {
        return next(new errorHandler("Username already exists", 400));
    }




    const hashedPassword = await bcrypt.hash(password, 10);

    const avatarType = gender === "male" ? "boy" : "girl";
    const avatar = `https://avatar.iran.liara.run/public/${avatarType}`;

    const newUser = await User.create({
        username,
        fullname: fullName,         //fullName,
        password : hashedPassword, 
        gender,
        avatar
    })



    res.status(200).json({
        success: true,
        response: { 
           newUser
        }
    })

    

})


export const login = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return next(new errorHandler("Username and password are required", 400));
    }

    const user = await User.findOne({ username });

    if (!user) {
        return next(new errorHandler("Invalid username or password", 400));
    }




    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        return next(new errorHandler("Invalid username or password", 400));
    }

    


    res.status(200).json({
        success: true,
        response: { 
           user
        }
    })

    

})
