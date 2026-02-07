import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import cookieParser  from 'cookie-parser';
import connectDB from './config/mongoDb.js';
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'

const app = express();
const PORT = process.env.PORT || 4000

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:'http://localhost:5173', credentials: true}))

connectDB();

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || 'something went wrong'
  return res.status(errorStatus).send(errorMessage)
})

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})

app.get("/", (req, res) => {
  res.send("api is working");
});

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

