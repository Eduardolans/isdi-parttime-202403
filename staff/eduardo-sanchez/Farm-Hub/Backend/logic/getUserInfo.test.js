import 'dotenv/config'
import mongoose from 'mongoose'

import getUserInfo from './getUserInfo.js'

const { MONGODB_URL } = process.env

mongoose.connect(MONGODB_URL)
    .then(() => {
        try {
            getUserInfo('66ae6370f11082ed7f0623dd', '66a939ddca799581a845711c')
                .then(user => {
                    console.log(`User found with name: ${user.name} and username: ${user.username}`)
                })
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))