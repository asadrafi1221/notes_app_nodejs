import db_data from "../../todos_proj/db_connection/db_connection.js";

const check_user =async (req,res)=>{
    const {email} = req.body;
    console.log('email is : ');
    console.log(email)
    const data = (await db_data.query('select * from clients_data')).rows;

    let user_found =  false;
    for(let i=0;i<data.length;i++){
        if(email===data[i].email){
user_found = true;
break;
        }
    }
    if(user_found === false){
        res.send('sorry user not found');
    }
    else{
        res.redirect(`/home/notes?email=${encodeURIComponent(email)}`);
    }


}

const display_login = (req,res)=>{
    res.render('login');
}

export {check_user , display_login};