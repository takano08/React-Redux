import {db, FirebaseTimestamp} from '../../firebase/index';
import {push} from "connected-react-router";

const productsRef = db.collection('products')

export const saveProduct = (id, name, description, category, gender, price) => {
    return async (dispatch) => {
        const timestamp = FirebaseTimestamp.now();

        const data = {
            category: category,
            description: description,
            gender: gender,
            name: name,
            price: parseInt(price, 10),
            updated_at: timestamp
        }
        const ref = productsRef.doc();
        const id = ref.id
        data.id = id
        data.created_at = timestamp

        return productsRef.doc(id).set(data)
            .then(() => {
                dispatch(push('/'))
            }).catch((error) => {
                throw new Error(error)
            })
    }
}