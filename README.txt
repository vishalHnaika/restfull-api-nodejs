
/*** To START Server to be able to receive API end point requests ***/

npm run dev    - To start the sever in development Mode on PORT 5000.
npm run start  - To start the server in Prodouction Mode on PORT 5000.

/*** To update ENV for Mongoose Database connection ***/
You can find this connection URI from MongoDB Atlas using below mentioned Path.

Path : Under DATA STORAGE => <NEW CLUSTER NAME> => connect => Connect your application. => Copy URI from there to replace in the ENV file.
MONGO_URI=mongodb+srv://<USER ID>:<PASSWORD>@sandbox-oxnyw.mongodb.net/<DATABASE>?retryWrites=true&w=majority
this is node test
