import db_data from "../../todos_proj/db_connection/db_connection.js";
import router from "../routes/signup_route.js";


const signup_user = async (req, res) => {
    var { name, email } = req.body;
    if (!name || !email) {
        res.send('plz fill the required feilds');
    }
    const data = (await db_data.query('select * from clients_data ')).rows;
    for (let i = 0; i < data.length; i++) {
        if (email === data[i].email) {
            res.send('sorry email exist try again using another one ');
        }
    }
    await db_data.query(
        'INSERT INTO clients_data (name, email) VALUES ($1, $2)',
        [name, email]
    );
    res.redirect('/login');
    
}


const display_signup = (req, res) => {
    res.render('signup');
}

export { signup_user, display_signup }