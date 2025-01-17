import * as Yup from 'yup'
import Product from '../models/Product.js'
import Category from '../models/Category.js'
import User from '../models/User.js'

class ProductController {
    async store(request, response) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required(),
                price: Yup.number().required(),
                category_id: Yup.number().required(),
                offer: Yup.boolean()
            })

            try {
                await schema.validateSync(request.body, { abortEarly: false })
            } catch (err) {
                return response.status(400).json({ error: err.errors })
            }

            const { admin: isAdmin } = await User.findByPk(request.userId)

            if (!isAdmin) {
                return response.status(401).json()
            }

            const { filename: path } = request.file
            const { name, price, category_id, offer } = request.body

            const product = await Product.create({
                name,
                price,
                category_id,
                path,
                offer
            })

            return response.json(product)
        } catch (error) {
            console.log(error)
        }
    }

    async index(request, response) {
        const products = await Product.findAll({
            include: [
                {
                    model: Category,
                    as: 'category',
                    attributes: ['id', 'name']
                }
            ]
        })

        return response.json(products)
    }

    async update(request, response) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string(),
                price: Yup.number(),
                category_id: Yup.number(),
                offer: Yup.boolean()
            })

            try {
                await schema.validateSync(request.body, { abortEarly: false })
            } catch (err) {
                return response.status(400).json({ error: err.errors })
            }

            const { admin: isAdmin } = await User.findByPk(request.userId)

            if (!isAdmin) {
                return response.status(401).json()
            }

            const { id } = request.params

            const product = await Product.findByPk(id)

            if (!product) {
                return response.status(401).json({ error: "Make sure your product id is correct!" })
            }

            let path
            if (request.file) {
                path = request.file.filename
            }

            const { name, price, category_id, offer } = request.body

            await Product.update({
                name,
                price,
                category_id,
                path,
                offer
            },
                { where: { id } }
            )

            return response.status(200).json({ message: "Product updated successfully!" })
        } catch (error) {
            console.log(error)
        }
    }

    async delete(request, response) {
        try {
            const { id } = request.params

            const product = await Product.findByPk(id)

            if (!product) {
                return response.status(404).json({ error: "Product not found!" })
            }

            await Product.destroy({ where: { id } })

            return response.status(204).send()
        } catch (error) {
            console.log(error)
            return response.status(500).json({ error: "Internal server error" })
        }
    }
}

export default new ProductController()