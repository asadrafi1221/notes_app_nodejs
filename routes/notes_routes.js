import { 
    display_notes ,
    get_data ,
    delete_post ,
     submit_note,
     edit_post
} from "../controller/notes_controller.js";


import notes_router from "./signup_route.js";


notes_router.get('/home/notes',display_notes)
.get('/get_data',get_data)
.post('/delete_post',delete_post)
.post('/submit_note',submit_note)
.post('/edit_post',edit_post)

export default notes_router;

