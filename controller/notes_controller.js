import db_data from "../../todos_proj/db_connection/db_connection.js";


const display_notes = (req, res) => {
    const email = req.query.email;
    res.render('notes', { email: email });
}
const get_data = async (req, res) => {
    const data = (await db_data.query('select * from clients_data join users_notes on clients_data.email = users_notes.email')).rows;

    res.send(data);
}
const delete_post = async (req, res) => {
    const { user_post, email } = req.body;

    console.log('Deleting post:', user_post, 'for email:', email);


    const queryText = 'DELETE FROM users_notes WHERE email = $1 AND post = $2';
    const queryValues = [email, user_post];

    const result = await db_data.query(queryText, queryValues);

    res.send('Post deleted successfully.');

};


const submit_note = async (req, res) => {
    const { new_post, email } = req.body;
    const queryText = `
            INSERT INTO users_notes (email, post) 
            VALUES ($1, $2) 
        `;
    const queryValues = [email, new_post];

    await db_data.query(queryText, queryValues);
    res.send('done');
}

const edit_post = async (req, res) => {
    const { post, newpost, email } = req.body;
console.log('this is data  : ')
    console.log(post , newpost , email);
    const queryText = `
    UPDATE users_notes
    SET post = $1
    WHERE email = $2
      AND post = $3
`;
const queryValues = [newpost, email, post];

const result = await db_data.query(queryText, queryValues);

    res.send('done');
}


export { display_notes, get_data, delete_post, submit_note, edit_post };