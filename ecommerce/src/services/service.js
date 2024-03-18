const baseurl = "https://02a3-182-156-148-35.ngrok-free.app/";

export const registeration = (registerationdata) => {
     const registerresponse = fetch(`${baseurl}registerUser`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerationdata),
    })
    console.log(registerresponse,"::::::::");
}
export const login = (logindata) => {
    console.log(logindata,"logindatalogindatalogindatalogindata");
    const loginresponse =  fetch(`${baseurl}loginUser`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(logindata),
    })
    console.log(loginresponse,"=====::::::::");
}