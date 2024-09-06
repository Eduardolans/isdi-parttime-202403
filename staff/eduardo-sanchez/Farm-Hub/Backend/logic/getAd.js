import { Ad } from '../data/index.js'

import { SystemError, NotFoundError } from 'com/errors.js'

import validate from 'com/validate.js'

const getAd = (adId) => {
    validate.id(adId, 'adId')

    return Ad.findById(adId).populate('author', 'username').populate('adcomments.author', 'username').lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(ad => {
            if (!ad) {
                throw new NotFoundError('ad not found')
            }

            return ad
        })
}

export default getAd


// import { Ad, User } from '../data/index.js';
// import { SystemError, NotFoundError } from 'com/errors.js';
// import validate from 'com/validate.js';

// import mongoose from 'mongoose'; // Asegúrate de importar mongoose si usas ObjectId  
// const { ObjectId } = mongoose.Types;

// const getAd = (adId) => {
//     validate.id(adId, 'adId');

//     return Ad.findById(adId).lean()
//         .then(ad => {
//             if (!ad) {
//                 throw new NotFoundError('ad not found');
//             }

//             // Obtener el autor del anuncio 
//             return User.findById(ad.author).select('username').lean()
//                 .then(author => {
//                     ad.author = author;

//                     // Obtener comentarios y sus autores  
//                     return Promise.all(ad.adcomments.map(comment => {
//                         return User.findById(comment.author).select('username').lean()
//                             .then(commentAuthor => {
//                                 return { ...comment, author: commentAuthor };
//                             });
//                     }));
//                 })
//                 .then(commentsWithAuthors => {
//                     ad.adcomments = commentsWithAuthors;
//                     return ad; // Retornar el anuncio con los autores poblados  
//                 });
//         })
//         .catch(error => {
//             throw new SystemError(error.message);
//         });
// };

// export default getAd;