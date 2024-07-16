# A todo App API
> #### API for create, update, delete users and todos

# User Model
#### Every user should have:
- `username`
- `email`
- `password`
> [!IMPORTANT]
> a password should be **hashed** and store the ***hashed password*** in Db
> [!TIP]
> you can use a npm [library](https://www.npmjs.com/package/bcryptjs) called `bcryptjs` for hashing the password, a npm [library](https://www.npmjs.com/package/mongoose) called `mongoose` to connect to a [MonogoDb](https://www.mongodb.com/lp/cloud/atlas/try4?utm_content=controlhterms&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_emea-eg_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624392&adgroup=115749716783&cq_cmp=12212624392&gad_source=1&gclid=EAIaIQobChMIzuqlztKrhwMVyZpoCR0AOgfhEAAYASAAEgLEC_D_BwE)  
- `created_at`
> [!TIP]
> you can use a npm library called `dayjs` to handle the cuunrt date, it's **prohibited** to use the Date Js object

> [!NOTE]
> `username, email, password` are provided to the api via a body on post request, `created_at` should be a **default value** setted by the api

# Todo Model
#### Every todo should have:
- `username`
- `title`
- `description`
- `priority`
- `created_at`
> [!TIP]
> you can use a npm library called `dayjs` to handle the cuunrt date, it's **prohibited** to use the Date Js object
- `due_date`

> [!NOTE]
> `username, title, description, priority, due_date` are provided to the api via a body on post request, `created_at` should be a **default value** setted by the api


# required End Ponits
#### the end points that the api should proived to interact with

- ### `api/user` 
> - **options** method to reply for the preflight request 
> > - reply with a status `200` and a message says `ok` and the header `Access-Control-Allow-Origin = * `

> - **get** method for getting user info
> > - accept a `username` from the req query and find the user with that username 

> [!TIP]
 you can use a mongoose method called `findOne` to achieve this approach, [Query.prototype.findOne()](https://mongoosejs.com/docs/api/query.html#Query.prototype.findOne())

> - **post** method for create new user 
> > - accept `username, email, password` from the req body and create a user with the provided data

> [!IMPORTANT]
 **`password` MUST be hashed**

- ### `api/todos` 
> - **options** method to reply for the preflight request 
> > - reply with a status `200` and a message says `ok` and the header `Access-Control-Allow-Origin = * `

> - **get** method for getting user todos
> > - accept a `username` from the req query and find all of the user's todos with that username 
> > - Question: why not use the requset body to send the username instead of the requset query ?

> [!TIP]
you can use a mongoose method called `find` to achieve this approach, [Query.prototype.find()](https://mongoosejs.com/docs/api/query.html#Query.prototype.find())

> - **post** method for create new todo 
> > - accept `username, title, description, priority, due_date` from the req body and create a todo with the provided data

> - **put** method to updata a specific user's data 
> > - accept `username, title, newTitle or newDescription or newPriority or newDue_date` from the req body and get the todo with that username and title and updata its keys with the provided data

> - **delete** method for delete a specific user 
> > - accept `username, email, password` from the req body and create a user with the provided data

> [!TIP]
 you can use a mongoose method called `deleteOne` to achieve this approach, [Query.prototype.deleteOne()](https://mongoosejs.com/docs/api/query.html#Query.prototype.deleteOne())




## submit code to todo-api-test branch in [todolist repository](https://github.com/BaHGet/todolist)