const { Schema, model } =  require('mongoose');

const productSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    summary:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
        maxLength: [8, 'Product price cannot exceed 8 characters'],
    },
    rating:{
        type: Number,
        default: 0,
    },
    images:[{
        public_id:{
            type: String,
            required: true,
        } ,
        url:{
            type: String,
            required: true,
        }
    }],
    category:{
        type: String,
        required: true,
    },
    stock:{
        type: Number,
        required: true,
        maxLength: [5, 'Product stock cannot exceed 5 characters'],
        default: 1,
    },
    numOfReviews:{
        type: Number,
        default: 0,
    },
    reviews:[
        {
            name:{
                type: String,
                required: true,
            },
            rating:{
                type: Number,
                required: true,
            } ,
            comment:{
                type: String,
                required: true,
            }
        }
    ],
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

const ProductModel = model('Product', productSchema);
module.exports = ProductModel;