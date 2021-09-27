import { request } from "../../utils/request";
const addUserPath = "/add/user/";
const findUsersPath = "/find/users";
export const setUser = async(params) => {
    const {body} = params;
	// console.log({body});
	try {
		const data = await request(addUserPath,{
            method: "POST",
            body: JSON.stringify(body)
        });		
		return data;
	} catch (error) {
		console.error("error occurred in search service...");
	}
}

export const getUsers = async() => {
	try {
		const data = await request(findUsersPath,{
            method: "GET",
        });	
		return data;
	} catch (error) {
		console.error("error occurred in search service...");
	}
}